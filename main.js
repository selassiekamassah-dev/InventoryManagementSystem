// Inventory Management System - JavaScript

// Storage key for localStorage
const STORAGE_KEY = 'ims_inventory';

// Get inventory from localStorage
function getInventory() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// Save inventory to localStorage
function saveInventory(inventory) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory));
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('inventory.html')) {
        initInventoryPage();
    } else if (currentPage.includes('addItem.html')) {
        initAddItemPage();
    } else if (currentPage.includes('index.html') || currentPage === '/' || currentPage.endsWith('/Codes/')) {
        initHomePage();
    }
});

// ==================== HOME PAGE ====================
function initHomePage() {
    updateStats();
}

function updateStats() {
    const inventory = getInventory();
    
    const totalItems = inventory.length;
    const inStockItems = inventory.filter(item => item.quantity > 0).length;
    const lowStockItems = inventory.filter(item => item.quantity > 0 && item.quantity <= 10).length;
    
    // Update stats
    const totalElement = document.getElementById('total-items');
    const inStockElement = document.getElementById('items-in-stock');
    const lowStockElement = document.getElementById('low-stock-items');
    
    if (totalElement) totalElement.textContent = totalItems;
    if (inStockElement) inStockElement.textContent = inStockItems;
    if (lowStockElement) lowStockElement.textContent = lowStockItems;
}

// ==================== INVENTORY PAGE ====================
function initInventoryPage() {
    renderInventory();
    setupFilters();
    updateInventorySummary();
}

function renderInventory(filteredItems = null) {
    const inventory = filteredItems || getInventory();
    const tbody = document.getElementById('inventory-body');
    
    if (!tbody) return;
    
    // Clear existing rows
    tbody.innerHTML = '';
    
    if (inventory.length === 0) {
        tbody.innerHTML = '<tr class="empty-state"><td colspan="8">No items found. <a href="addItem.html">Add your first item</a></td></tr>';
        return;
    }
    
    inventory.forEach((item, index) => {
        const status = getStockStatus(item.quantity);
        const statusClass = `status-${status.class}`;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${item.imageData ? `<img src="${item.imageData}" alt="${item.name}">` : '<span style="color: #ccc;">No image</span>'}
            </td>
            <td><strong>${item.name}</strong></td>
            <td>${item.sku}</td>
            <td>${item.category}</td>
            <td>$${parseFloat(item.price).toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td><span class="status-badge ${statusClass}">${status.label}</span></td>
            <td>
                <button class="action-btn edit-btn" onclick="editItem(${index})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteItem(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function getStockStatus(quantity) {
    if (quantity === 0) {
        return { label: 'Out of Stock', class: 'out-of-stock' };
    } else if (quantity <= 10) {
        return { label: 'Low Stock', class: 'low-stock' };
    } else {
        return { label: 'In Stock', class: 'in-stock' };
    }
}

function setupFilters() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            applyFilters();
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            applyFilters();
        });
    }
}

function applyFilters() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : '';
    
    let inventory = getInventory();
    
    // Apply search filter
    if (searchTerm) {
        inventory = inventory.filter(item =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.sku.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply category filter
    if (selectedCategory) {
        inventory = inventory.filter(item => item.category === selectedCategory);
    }
    
    renderInventory(inventory);
}

function updateInventorySummary() {
    const inventory = getInventory();
    
    const totalItems = inventory.length;
    const totalValue = inventory.reduce((sum, item) => sum + (parseFloat(item.price) * parseInt(item.quantity)), 0);
    const inStockItems = inventory.filter(item => item.quantity > 0).length;
    
    const summaryTotal = document.getElementById('summary-total');
    const summaryValue = document.getElementById('summary-value');
    const summaryInStock = document.getElementById('summary-in-stock');
    
    if (summaryTotal) summaryTotal.textContent = totalItems;
    if (summaryValue) summaryValue.textContent = totalValue.toFixed(2);
    if (summaryInStock) summaryInStock.textContent = inStockItems;
}

function deleteItem(index) {
    if (confirm('Are you sure you want to delete this item?')) {
        let inventory = getInventory();
        inventory.splice(index, 1);
        saveInventory(inventory);
        renderInventory();
        updateInventorySummary();
        alert('Item deleted successfully!');
    }
}

function editItem(index) {
    const inventory = getInventory();
    const item = inventory[index];
    
    // For now, just alert. In a full app, you'd open an edit modal or navigate to edit page
    alert(`Edit functionality for: ${item.name}\n\nImplement edit modal for full functionality.`);
}

// ==================== ADD ITEM PAGE ====================
function initAddItemPage() {
    const form = document.getElementById('item-form');
    const imageInput = document.getElementById('image');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    if (imageInput) {
        imageInput.addEventListener('change', handleImagePreview);
    }
}

function handleImagePreview(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('image-preview');
    
    if (!preview) return;
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '';
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(document.getElementById('item-form'));
    const imageInput = document.getElementById('image');
    
    // Validate form
    if (!validateForm(formData)) {
        return;
    }
    
    // Create item object
    const item = {
        name: formData.get('itemName'),
        sku: formData.get('sku'),
        category: formData.get('category'),
        description: formData.get('description'),
        price: formData.get('price'),
        quantity: formData.get('quantity'),
        status: formData.get('status'),
        flags: formData.getAll('flags'),
        imageData: null,
        createdAt: new Date().toISOString()
    };
    
    // Handle image
    if (imageInput && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            item.imageData = e.target.result;
            addItemToInventory(item);
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        addItemToInventory(item);
    }
}

function validateForm(formData) {
    const name = formData.get('itemName');
    const sku = formData.get('sku');
    const price = formData.get('price');
    const quantity = formData.get('quantity');
    
    if (!name || name.trim() === '') {
        alert('Please enter an item name');
        return false;
    }
    
    if (!sku || sku.trim() === '') {
        alert('Please enter a SKU');
        return false;
    }
    
    if (!price || parseFloat(price) <= 0) {
        alert('Please enter a valid price');
        return false;
    }
    
    if (quantity === '' || parseInt(quantity) < 0) {
        alert('Please enter a valid quantity');
        return false;
    }
    
    return true;
}

function addItemToInventory(item) {
    const inventory = getInventory();
    inventory.push(item);
    saveInventory(inventory);
    
    // Show success message and redirect
    alert('Item added successfully!');
    window.location.href = 'inventory.html';
}

// ==================== UTILITY FUNCTIONS ====================

// Format currency
function formatCurrency(amount) {
    return '$' + parseFloat(amount).toFixed(2);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Generate SKU
function generateSKU() {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `SKU-${timestamp}-${random}`;
}

// Export inventory data (optional feature)
function exportInventory() {
    const inventory = getInventory();
    const csvContent = convertToCSV(inventory);
    downloadCSV(csvContent, 'inventory.csv');
}

function convertToCSV(inventory) {
    let csv = 'Name,SKU,Category,Price,Quantity,Status\n';
    
    inventory.forEach(item => {
        const status = item.quantity === 0 ? 'Out of Stock' : 
                      item.quantity <= 10 ? 'Low Stock' : 'In Stock';
        csv += `"${item.name}","${item.sku}","${item.category}",${item.price},${item.quantity},"${status}"\n`;
    });
    
    return csv;
}

function downloadCSV(csv, filename) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Clear all data (for testing - use with caution)
function clearAllData() {
    if (confirm('Are you sure you want to clear all inventory data? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEY);
        alert('All data cleared');
        location.reload();
    }
}
