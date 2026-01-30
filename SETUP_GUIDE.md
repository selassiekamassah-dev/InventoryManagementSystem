# INVENTORY MANAGEMENT SYSTEM - COMPLETE SETUP GUIDE

## Project Overview

This is a fully functional Inventory Management System (IMS) built with HTML5, CSS3, and JavaScript. It demonstrates professional web development practices and includes all features typically required for a web technology course project.

---

## TABLE OF CONTENTS

1. [Project Structure](#project-structure)
2. [How to Add Images](#how-to-add-images)
3. [File Descriptions](#file-descriptions)
4. [Step-by-Step Guide](#step-by-step-guide)
5. [Features Explained](#features-explained)
6. [JavaScript Functionality](#javascript-functionality)
7. [Form Validation](#form-validation)
8. [Data Storage](#data-storage)
9. [Troubleshooting](#troubleshooting)

---

## PROJECT STRUCTURE

```
Codes/
├── index.html              (Home page)
├── inventory.html          (View all items)
├── addItem.html           (Add new item form)
├── About.html             (About page)
├── external.css           (All styles)
├── main.js                (All JavaScript functionality)
├── images/                (Folder for product images)
│   ├── sample-product.jpg
│   └── [other images]
└── SETUP_GUIDE.md         (This file)
```

---

## HOW TO ADD IMAGES

### Method 1: Using the Web Form (Recommended)

1. Go to "Add Item" page (addItem.html)
2. Fill in the form details
3. Scroll down to "Product Image" section
4. Click "Choose File" and select an image from your computer
5. You'll see a preview of the image
6. Submit the form - the image is automatically encoded and stored

### Method 2: Manually Adding Image Files

1. Place your image files in the `images/` folder
2. Supported formats: PNG, JPG, JPEG, GIF, WebP
3. Images should be 500px x 500px or similar square aspect ratio for best results
4. Use descriptive filenames (e.g., `laptop.jpg`, `desk-lamp.png`)

### Image Best Practices

- **Size**: Keep under 1MB per image
- **Dimensions**: Square or rectangular (300x300px to 800x800px)
- **Format**: Use JPG for photos, PNG for graphics with transparency
- **Naming**: Use lowercase, hyphens instead of spaces
  - Good: `product-name.jpg`
  - Bad: `Product Name (1).jpg`

### Example Images Needed

- sample-product.jpg - For the home page showcase
- hero-default.jpg - For the about page (optional)

---

## FILE DESCRIPTIONS

### HTML Files

#### index.html (Home Page)

- **Purpose**: Landing page with overview
- **Key Sections**:
  - Hero section with call-to-action
  - Featured product showcase with image
  - Quick statistics (Total items, In stock, Low stock)
  - Navigation to other pages

#### inventory.html (Inventory List)

- **Purpose**: Display all items in a table
- **Key Features**:
  - Search functionality (by name, SKU, category)
  - Category filter dropdown
  - Table with columns: Image, Name, SKU, Category, Price, Quantity, Status, Actions
  - Edit and Delete buttons for each item
  - Summary section showing totals
  - Edit and Delete buttons for each item
  - Summary section showing totals

#### addItem.html (Add Item Form)

- **Purpose**: Form to add new products
- **Form Fields**:
  1. Item Name (text input) \*required
  2. SKU (text input) \*required
  3. Category (dropdown) \*required
  4. Description (textarea)
  5. Price (number input) \*required
  6. Quantity (number input) \*required
  7. Stock Status (radio buttons)
  8. Item Flags (checkboxes - fragile, taxable, onsale, bestseller)
  9. Product Image (file upload)
- **Actions**: Submit, Reset, Cancel buttons

#### About.html (About Page)

- **Purpose**: Information about the project
- **Sections**:
  - Project overview
  - Key features list with icons
  - Technologies used (HTML5, CSS3, JavaScript, LocalStorage)
  - Course topics covered in a table
  - Contact information
  - Project metadata

### CSS File

#### external.css (All Styles)

- **Color Variables** (defined in :root)
  - `--primary-color`: #0ea5e9 (Light blue)
  - `--secondary-color`: #10b981 (Green)
  - `--danger-color`: #ef4444 (Red)
  - `--text-color`: #1f2937 (Dark gray)
- **Key Classes**:
  - `.site-header`: Sticky navigation bar
  - `.container`: Main content wrapper
  - `.btn, .btn-primary, .btn-secondary, .btn-tertiary`: Button styles
  - `.form-container, .form-group`: Form styling
  - `.inventory-table`: Table styling with hover effects
  - `.status-badge`: Status indicators (green, yellow, red)
  - `.featured-card, .about-card`: Card components

### JavaScript File

#### main.js (All Functionality)

**Key Functions**:

- `getInventory()`: Retrieves items from localStorage
- `saveInventory(inventory)`: Saves items to localStorage
- `renderInventory()`: Displays items in table
- `addItemToInventory()`: Adds new item
- `deleteItem()`: Removes item
- `applyFilters()`: Search and category filtering
- Image preview functionality

---

## STEP-BY-STEP GUIDE

### Step 1: Open the Project

1. Open `index.html` in your web browser
2. You should see the home page with navigation menu

### Step 2: Add Your First Product

1. Click "Add Item" or "Add Your First Item" button
2. Fill in the form:
   ```
   Item Name: Laptop Computer
   SKU: SKU-LAP-001
   Category: Electronics
   Description: High-performance laptop
   Price: 999.99
   Quantity: 5
   Status: In Stock
   Flags: Check "Bestseller"
   Image: Choose a laptop image
   ```
3. Click "Save Item"

### Step 3: View Inventory

1. Click "Inventory" menu or you'll be redirected after adding
2. You should see your product in the table
3. Try searching by name, SKU, or category
4. Test the category filter

### Step 4: Add More Items

1. Repeat Step 2 with different products
2. Create items in different categories:
   - Electronics: Phone, Tablet, Monitor
   - Clothing: Shirt, Pants, Shoes
   - Books: Novel, Textbook
   - Food: Coffee, Snacks

### Step 5: Test Features

1. **Search**: Type product names in search box - results update instantly
2. **Filter**: Select a category - table filters
3. **Delete**: Click delete button - item is removed
4. **Statistics**: Check home page - stats update
5. **Image Display**: Verify images show in inventory table and on home page

### Step 6: Verify Data Persistence

1. Add several items
2. Close the browser tab
3. Reopen the project
4. All items should still be there!

---

## FEATURES EXPLAINED

### 1. Navigation Bar

- Sticky header (stays visible when scrolling)
- Active page indicator (highlighted)
- Responsive design (stacks on mobile)

### 2. Search & Filter

- **Search Box**: Real-time search by item name, SKU, or category
- **Category Filter**: Dropdown to filter by category
- Works together - you can search within a category

### 3. Inventory Table

- Shows all columns with data
- Hover effect on rows
- Image thumbnail for each product
- Status badge (color-coded):
  - 🟢 Green: In Stock (>10 qty)
  - 🟡 Yellow: Low Stock (0-10 qty)
  - 🔴 Red: Out of Stock (0 qty)

### 4. Form Validation

- Required fields are checked
- Price must be > 0
- Quantity must be >= 0
- SKU must be unique (check before adding)
- All validations show error messages

### 5. Image Handling

- Upload images directly in the form
- Automatic preview before saving
- Images are encoded as Data URLs
- Stored in browser's localStorage
- Display in table and on home page

### 6. Data Storage

- Uses browser's localStorage
- Data persists across browser sessions
- No server needed
- Limited to ~5-10MB per origin
- Can be cleared from browser settings

### 7. Status Indicators

- **Stock Status** (from status radio buttons):
  - In Stock
  - Low Stock
  - Out of Stock
- **Item Flags** (checkboxes):
  - Fragile: Requires careful handling
  - Taxable: Subject to tax
  - On Sale: Special pricing
  - Bestseller: Popular item

---

## JAVASCRIPT FUNCTIONALITY

### localStorage Operations

```javascript
// Save data
const inventory = getInventory(); // Get current items
saveInventory(inventory);          // Save back to storage

// Example item object:
{
  name: "Laptop",
  sku: "SKU-LAP-001",
  category: "Electronics",
  price: "999.99",
  quantity: "5",
  status: "in_stock",
  flags: ["bestseller"],
  imageData: "data:image/jpeg;base64,...",
  createdAt: "2026-01-25T..."
}
```

### Key Functions Explained

#### renderInventory(filteredItems)

- Generates HTML table rows from inventory array
- Shows images from imageData (or "No image" text)
- Creates Edit/Delete buttons for each row
- Clears and rebuilds table

#### applyFilters()

- Reads search input and category filter values
- Filters inventory array by matching terms
- Calls renderInventory() with filtered results
- Event listeners on input fields trigger this

#### addItemToInventory(item)

- Gets current inventory from storage
- Adds new item to array
- Saves back to storage
- Redirects to inventory.html

#### deleteItem(index)

- Confirms deletion with user
- Removes item at index from array
- Saves updated array
- Re-renders table
- Updates summary

---

## FORM VALIDATION

### Client-Side Validation (JavaScript)

```javascript
function validateForm(formData) {
  // Check item name
  if (!name || name.trim() === "") {
    alert("Please enter an item name");
    return false;
  }

  // Check price is positive
  if (!price || parseFloat(price) <= 0) {
    alert("Please enter a valid price");
    return false;
  }

  // Check quantity is not negative
  if (quantity === "" || parseInt(quantity) < 0) {
    alert("Please enter a valid quantity");
    return false;
  }

  return true; // All valid
}
```

### HTML5 Built-in Validation

- `required` attribute: Field must be filled
- `type="number"`: Only accepts numbers
- `type="email"`: Format validation
- `type="file"`: Only accepts files
- `accept="image/*"`: Only image files

---

## DATA STORAGE

### How localStorage Works

```javascript
// Store data
localStorage.setItem("ims_inventory", JSON.stringify(array));

// Retrieve data
const data = localStorage.getItem("ims_inventory");
const array = JSON.parse(data);

// Delete data
localStorage.removeItem("ims_inventory");

// Clear all
localStorage.clear();
```

### Data Structure

```
localStorage['ims_inventory'] = [
  {
    name: "Item 1",
    sku: "SKU-001",
    price: "100",
    quantity: "10",
    ...
  },
  {
    name: "Item 2",
    ...
  }
]
```

### Limitations

- Data is browser-specific (not synced across devices)
- Cleared when browser cache is cleared
- Limited to ~5-10MB
- Only stores strings (so we use JSON.stringify/parse)

---

## TROUBLESHOOTING

### Problem: Images Not Showing

**Solution**:

1. Ensure image file is in the `images/` folder
2. Check image filename spelling
3. Use relative path: `images/filename.jpg`
4. Make sure file exists and path is correct

### Problem: Form Won't Submit

**Solution**:

1. Check browser console for errors (F12)
2. Ensure all required fields are filled
3. Check that price is > 0
4. Ensure quantity is >= 0
5. Click "Save Item" button (not Enter key)

### Problem: Data Disappears After Closing Browser

**This is normal** - Incognito/Private mode doesn't save localStorage
**Solution**:

1. Use normal browser mode (not Private/Incognito)
2. Check browser storage settings
3. Don't clear browser cache

### Problem: Search/Filter Not Working

**Solution**:

1. Open browser console (F12)
2. Check for JavaScript errors
3. Ensure main.js is loaded
4. Try refreshing the page

### Problem: Can't Delete or Edit Items

**Solution**:

1. Ensure JavaScript is enabled
2. Check browser console for errors
3. Try a different browser
4. Clear browser cache

### Problem: Form Shows "undefined" Values

**Solution**:

1. Ensure all form inputs have `id` attributes
2. Check that JavaScript IDs match HTML IDs
3. Verify form uses POST method
4. Try refreshing the page

---

## TESTING CHECKLIST

Before submitting, verify:

- [ ] Home page displays correctly with navigation
- [ ] Can add item via form
- [ ] Image upload and preview works
- [ ] Item appears in inventory table
- [ ] Search functionality works
- [ ] Category filter works
- [ ] Delete button removes items
- [ ] Data persists after page refresh
- [ ] All pages are accessible via navigation
- [ ] About page shows project information
- [ ] Form validates (try submitting empty form)
- [ ] Responsive design works on mobile
- [ ] Status badges display correct colors
- [ ] Statistics update on home page
- [ ] No console errors (F12)

---

## BROWSER SUPPORT

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Internet Explorer: Not supported

**Test in multiple browsers before submission!**

---

## NEXT STEPS (Optional Enhancements)

1. **Edit Functionality**: Implement edit modal or edit page
2. **Export/Import**: Add CSV export/import buttons
3. **Sort**: Add column sorting in the table
4. **Pagination**: Add pagination for large datasets
5. **Categories**: Allow adding custom categories
6. **Search History**: Show recent searches
7. **Dark Mode**: Add dark theme toggle
8. **Mobile App**: Convert to mobile-responsive PWA
9. **Backend**: Connect to Node.js/PHP backend
10. **Database**: Replace localStorage with real database

---

## CONTACT & SUPPORT

**Group**: Group 25
**Email**: TopBoyShakil@gmail.com
**Year**: 2026

For issues or questions about implementation, refer to:

- HTML Documentation: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

**END OF GUIDE**
