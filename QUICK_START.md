# Quick Start Guide - Inventory Management System

## 🚀 Getting Started in 5 Minutes

### 1. Open the Project

Simply double-click `index.html` or open it in your browser.

### 2. Add a Product

- Click **"Add Item"** button
- Fill in the form:
  - Name: (any product name)
  - SKU: (unique code, e.g., SKU-001)
  - Category: (choose one)
  - Price: (number > 0)
  - Quantity: (number ≥ 0)
  - Status: (select one)
  - Image: (optional - upload from your computer)
- Click **"Save Item"**

### 3. View Your Inventory

- Click **"Inventory"** menu
- Your product appears in the table
- Try searching and filtering

### 4. Explore Features

- **Search**: Type in the search box to find items
- **Filter**: Select a category from dropdown
- **Delete**: Click the delete button to remove items
- **Statistics**: Check the home page for totals

## 📸 How to Add Images

### Quick Way (Recommended)

1. Go to "Add Item" page
2. At the bottom, click "Choose File"
3. Select an image from your computer (PNG, JPG, JPEG)
4. You'll see a preview
5. Submit the form - done!

### Manual Way

1. Save images in the `images/` folder
2. Use names like: `product.jpg`, `item.png`
3. Images show automatically in the table

## 🎨 Images You Need

Create or find these sample images and place them in the `images/` folder:

```
images/
├── sample-product.jpg   (For home page showcase)
└── [your product images]
```

**Image Tips:**

- Size: 300-800 pixels
- Format: JPG or PNG
- File size: Under 1MB
- Save with descriptive names

## 💾 Your Data

All your inventory data is saved automatically in your browser. When you come back, all your items are still there!

**Important**: Data is stored per browser. If you:

- Clear browser cache → data is deleted
- Use Private/Incognito mode → data is temporary
- Switch browsers → data won't transfer

## ❌ Troubleshooting

**Form won't submit?**

- Fill in all fields marked with \*
- Make sure price is greater than 0
- Check that you uploaded an image (optional)

**Items disappeared?**

- Check if you cleared browser cache
- Try not using Private/Incognito mode
- Open browser DevTools (F12) and check localStorage

**Images not showing?**

- Make sure files are in the `images/` folder
- Check the filename is correct
- Try JPG or PNG format

## 📋 Form Fields Explained

| Field       | Type       | Required | Notes                      |
| ----------- | ---------- | -------- | -------------------------- |
| Item Name   | Text       | Yes      | Any product name           |
| SKU         | Text       | Yes      | Unique identifier          |
| Category    | Dropdown   | Yes      | Electronics, Clothing, etc |
| Description | Text       | No       | Details about the item     |
| Price       | Number     | Yes      | Must be > 0                |
| Quantity    | Number     | Yes      | How many in stock          |
| Status      | Radio      | Yes      | In Stock / Low / Out       |
| Flags       | Checkboxes | No       | Fragile, Taxable, etc      |
| Image       | File       | No       | PNG, JPG, JPEG             |

## 🎯 Example Inventory

Try creating these items to test:

```
1. Gaming Laptop
   SKU: SKU-LAP-001
   Category: Electronics
   Price: $1,299.99
   Quantity: 3

2. Blue Jeans
   SKU: SKU-JEANS-001
   Category: Clothing
   Price: $49.99
   Quantity: 25

3. JavaScript Book
   SKU: SKU-BOOK-001
   Category: Books
   Price: $39.99
   Quantity: 12
```

## ✨ Features Summary

✅ **Add Items** - Form with validation
✅ **View Items** - Table view of all products
✅ **Search** - Find items instantly
✅ **Filter** - By category
✅ **Delete** - Remove items
✅ **Images** - Upload and display
✅ **Statistics** - Track totals
✅ **Data Storage** - Auto-save to browser
✅ **Responsive** - Works on mobile
✅ **Professional Design** - Modern UI

## 🔧 File Structure

```
Codes/
├── index.html          ← Start here!
├── inventory.html      ← View items
├── addItem.html        ← Add items
├── About.html          ← Project info
├── external.css        ← All styles
├── main.js             ← All features
├── images/             ← Product images
│   └── sample-product.jpg
└── SETUP_GUIDE.md      ← Full documentation
```

## ❓ FAQ

**Q: Where does my data get saved?**
A: In your browser's localStorage (local storage area)

**Q: Can I export my data?**
A: Currently no, but this can be added later

**Q: Can multiple people use this?**
A: Only one person per browser session (share via export)

**Q: What if I delete an item by mistake?**
A: Unfortunately, it's permanently deleted. Be careful!

**Q: How many items can I add?**
A: Theoretically 100+ items depending on image sizes

**Q: Do I need an internet connection?**
A: No! Everything works locally offline

---

## 🎓 Learning Points

This project demonstrates:

1. **HTML5**: Forms, tables, semantic elements
2. **CSS3**: Flexbox, grid, responsive design
3. **JavaScript**: DOM manipulation, localStorage
4. **Form Validation**: Client-side validation
5. **Data Management**: Storing and retrieving data
6. **Image Handling**: File uploads and preview
7. **User Interface**: Professional design patterns

---

## 📞 Need Help?

Refer to the full `SETUP_GUIDE.md` for detailed information on each feature.

**Happy Inventing! 🚀**

---

_Inventory Management System v1.0 - 2026_
