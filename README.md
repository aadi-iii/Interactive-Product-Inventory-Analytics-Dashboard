# Interactive Product Inventory & Analytics Dashboard

> **JavaScript Internship Capstone Project**  
> Built strictly using Vanilla JavaScript, HTML5, and CSS3.

---

## 🌟 Project Overview

The **Interactive Product Inventory & Analytics Dashboard** is a full-featured JavaScript application that demonstrates 15 foundational JavaScript concepts taught in the internship program. It allows users to manage product inventories, categorize items dynamically based on pricing tiers, compute category tax rates via a `switch` statement, execute inventory search audits, and calculate financial statistics—all updated dynamically without hardcoded values or external frameworks.

---

## 📁 Project File Structure

```text
inventory-analytics-dashboard/
├── index.html      # Interactive UI runner & DevTools terminal emulator
├── styles.css      # Monochrome editorial stylesheet (grid background, typography)
├── app.js          # Core vanilla JS application logic (15 Concepts)
└── README.md       # Project documentation & Assignment Requirement Checklist
```

---

## 🚀 How to Run the Project

### Option A: Open in Browser (Recommended for interactive `prompt()`)
1. Open the project folder in File Explorer.
2. Double-click `index.html` to open it in any browser (Chrome, Edge, Firefox, Safari).
3. Click **"Add Product"** to trigger interactive browser `prompt()` dialogs.
4. Open **Browser DevTools** (`F12` or `Ctrl + Shift + I` -> **Console tab**) to view live log outputs alongside the on-page terminal simulator.

### Option B: Run via Node.js
Open your terminal in the project directory and run:
```bash
node -e "const app = require('./app.js'); app.runDashboard(true, 'Monitor', 150);"
```

---

## 📊 Sample Output Format

```text
--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]

--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Keyboard ($45) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard

--- Inventory Audit & Target Search (for loop with break & continue) ---
Auditing item #1: Laptop ($800)
Skipping minor budget item during audit (continue triggered): Mouse ($25)
Auditing item #3: Keyboard ($45)
Target item "Keyboard" located! Terminating search loop (break triggered).

--- Financial Analytics ---
Total Inventory Value: $1020
Total Category Tax (via switch & while loop): $138.50
Filtered Affordable Items (Under $200): ["Mouse","Keyboard","Monitor"]
Formatted Report List: ["LAPTOP: $800","MOUSE: $25","KEYBOARD: $45","MONITOR: $150"]
```

---

## 📋 Assignment Requirement Checklist

Below is the comprehensive requirement-by-requirement audit detailing every required JavaScript concept, where it is implemented in `app.js`, and how it functions.

| # | Requirement / JS Concept | Where Implemented | How It Works | Verified |
|---|-------------------|-------------------|--------------|:--------:|
| 1 | **Variables & Data Types** | `app.js` (Lines 12–19) | Declares immutable references with `const` and mutable variables with `let`. Uses Primitive types (numbers, strings, booleans) and Reference types (arrays, objects). | ✅ |
| 2 | **Operators & Expressions** | `app.js` (Lines 57, 106, 121, 319) | Demonstrates arithmetic (`+`, `*`), comparison (`<`, `>=`, `===`), logical (`&&`, `||`), and template literal expressions (`${product.name}`). | ✅ |
| 3 | **`prompt()` & Explicit Type Conversion** | `app.js` (Lines 210, 212, 222, 229) | Invokes `prompt()` to collect product name and price, converting string price explicitly via `Number(rawPrice)`. Validates using `isNaN()`. | ✅ |
| 4 | **`if...else` Conditionals** | `app.js` (Lines 57–63, 237–245) | Evaluates price thresholds: "Budget" (< $50), "Standard" ($50–$299), "Premium" (>= $300), and validates input strings/numbers. | ✅ |
| 5 | **`switch` Statement** | `app.js` (Lines 79–91) | Evaluates product category in `getCategoryTaxRate()` to return category tax rates (Budget: 5%, Standard: 10%, Premium: 15%). | ✅ |
| 6 | **`for`, `while`, & `do...while` Loops** | `app.js` (Lines 119, 139, 205, 270) | Uses `do...while` for input prompt retry validation, `while` loop to compute total category tax, and `for` loop to compute total value and search product roster. | ✅ |
| 7 | **`break` & `continue` Statements** | `app.js` (Lines 275, 283) | Demonstrates `continue` to skip minor items (< $30) during audit and `break` to terminate search loop early upon finding target item. | ✅ |
| 8 | **Regular Functions** | `app.js` (Lines 52, 75, 104, 116, 134) | Defines regular function declarations `calculateTotalValue()`, `calculateTotalInventoryTax()`, `getCategory()`, and `calculateTaxOrDiscount()` with explicit return values. | ✅ |
| 9 | **Arrow Functions** | `app.js` (Lines 160, 173) | Uses arrow function syntax `const formatReportItem = (product) => ...` and inline arrow callbacks inside array methods. | ✅ |
| 10 | **Function & Default Parameters** | `app.js` (Lines 104, 158) | Specifies default values `rate = 0.08` in `calculateTaxOrDiscount()` and `maxPrice = 200` in `filterAffordableProducts()`. | ✅ |
| 11 | **Scope (Global, Function, Block)** | `app.js` (Throughout) | Demonstrates Global scope (`inventory`), Function scope (`total` inside `calculateTotalValue`), and Block scope (`let i` inside `for` loop, `let index` in `while`). | ✅ |
| 12 | **Arrays & Objects** | `app.js` (Lines 12–16) | Stores inventory as an array of product objects containing key-value pairs (`name`, `price`). | ✅ |
| 13 | **`forEach()` Array Method** | `app.js` (Lines 311–321) | Iterates over every product object in `inventory` to log item names, prices, and assigned categories without standard index loops. | ✅ |
| 14 | **`filter()` Array Method** | `app.js` (Lines 160–161) | Filters inventory array dynamically to return products priced under the specified maximum threshold. | ✅ |
| 15 | **`map()` Array Method** | `app.js` (Lines 163, 184) | Maps product array into a transformed uppercase report string array `["LAPTOP: $800", ...]`. | ✅ |

---

## 🔍 Verification of Core Features

- **Dynamic Financial Analytics**: Inventory total (`$1020`), category tax (`$138.50`), affordable items (`["Mouse","Keyboard","Monitor"]`), and report strings are generated dynamically via array functions rather than hardcoded text.
- **Strict Input Validation**: Prevents empty product names or non-numeric/negative prices from breaking execution.
- **No Third-Party Dependencies**: Pure vanilla JavaScript suitable for JavaScript internship grading.
