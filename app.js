/**
 * INTERACTIVE PRODUCT INVENTORY & ANALYTICS DASHBOARD
 * ----------------------------------------------------
 * JavaScript Internship Capstone Project
 * Demonstrates 15 Core JavaScript Concepts strictly using Vanilla JS.
 */

// ==========================================
// CONCEPT 1 & 12: VARIABLES, DATA TYPES, ARRAYS & OBJECTS (Global Scope)
// ==========================================
// Global Scope Variable: Available throughout the entire application script.
const initialProducts = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

// Initialize main inventory array of product objects
let inventory = [...initialProducts];

// Helper logger function that logs to both Browser DevTools Console and visual UI (if present)
function logOutput(message) {
  console.log(message);
  if (typeof document !== 'undefined') {
    const consoleContainer = document.getElementById('terminalOutput');
    if (consoleContainer) {
      consoleContainer.innerHTML += message + '\n';
    }
  }
}

function clearLogOutput() {
  if (typeof document !== 'undefined') {
    const consoleContainer = document.getElementById('terminalOutput');
    if (consoleContainer) {
      consoleContainer.innerHTML = '';
    }
  }
}

// ==========================================
// CONCEPT 8 & 11: REGULAR FUNCTIONS & SCOPE
// ==========================================

/**
 * Categorizes a product based on its price using if...else conditionals.
 * Demonstrates CONCEPT 4: if...else & CONCEPT 11: Function/Local Scope.
 * 
 * @param {number} price - The numeric price of the product.
 * @returns {string} Category name ("Budget", "Standard", or "Premium").
 */
function getCategory(price) {
  // Function Scope Variable (local to getCategory function)
  let categoryName = "";

  // CONCEPT 4: if...else conditional logic & CONCEPT 2: Comparison operators (<, >=, &&)
  if (price < 50) {
    categoryName = "Budget"; // Price under $50
  } else if (price >= 50 && price < 300) {
    categoryName = "Standard"; // Price between $50 and $299
  } else {
    categoryName = "Premium"; // Price $300 and above
  }

  return categoryName;
}

/**
 * Determines tax rate based on product category using a switch statement.
 * Demonstrates CONCEPT 5: switch statement meaningfully in financial analytics.
 * 
 * @param {string} category - The category of the product.
 * @returns {number} Tax rate decimal percentage (e.g. 0.05 for 5%).
 */
function getCategoryTaxRate(category) {
  let taxRate;

  // CONCEPT 5: switch statement evaluating category
  switch (category) {
    case "Budget":
      taxRate = 0.05; // 5% tax rate for Budget items
      break;
    case "Standard":
      taxRate = 0.10; // 10% tax rate for Standard items
      break;
    case "Premium":
      taxRate = 0.15; // 15% tax rate for Premium items
      break;
    default:
      taxRate = 0.08; // Default standard tax rate fallback
  }

  return taxRate;
}

/**
 * Calculates tax or discount amount using function parameters and default parameters.
 * Demonstrates CONCEPT 8: Regular Function & CONCEPT 10: Default Parameters & CONCEPT 2: Operators.
 * 
 * @param {number} price - Product price.
 * @param {number} rate - Tax or discount rate percentage (default: 0.08 = 8%).
 * @returns {number} Calculated monetary tax or discount amount.
 */
function calculateTaxOrDiscount(price, rate = 0.08) {
  // CONCEPT 2: Operator (multiplication *)
  return price * rate;
}

/**
 * Regular function to calculate the total inventory value dynamically using a for loop.
 * Demonstrates CONCEPT 6: for loop & CONCEPT 8: Regular function.
 * 
 * @param {Array} productList - Array of product objects.
 * @returns {number} Sum total of all product prices.
 */
function calculateTotalValue(productList) {
  let total = 0; // Local function scope variable

  for (let i = 0; i < productList.length; i++) {
    // CONCEPT 2: Addition operator & Property Access
    total += productList[i].price;
  }

  return total;
}

/**
 * Calculates total estimated inventory tax across all items using a while loop.
 * Integrates switch statement category rates and calculateTaxOrDiscount.
 * Demonstrates CONCEPT 5: switch, CONCEPT 6: while loop, & CONCEPT 8: regular function.
 * 
 * @param {Array} productList - Array of product objects.
 * @returns {number} Sum total of category tax across all products.
 */
function calculateTotalInventoryTax(productList) {
  let totalTax = 0;
  let index = 0;

  // CONCEPT 6: while loop iterating through inventory list
  while (index < productList.length) {
    const item = productList[index];
    const category = getCategory(item.price);
    const taxRate = getCategoryTaxRate(category); // Uses switch statement
    const taxAmount = calculateTaxOrDiscount(item.price, taxRate); // Uses default parameters
    
    totalTax += taxAmount;
    index++;
  }

  return totalTax;
}

/**
 * Filter affordable products under a maximum price limit using default parameter.
 * Demonstrates CONCEPT 10: Default parameter & CONCEPT 14: filter() array method.
 * 
 * @param {Array} productList - Array of product objects.
 * @param {number} maxPrice - Upper price limit (default: 200).
 * @returns {Array} Array of product names under the threshold.
 */
function filterAffordableProducts(productList, maxPrice = 200) {
  // CONCEPT 14: filter() method & CONCEPT 9: Arrow function callback
  const affordableObjects = productList.filter((product) => product.price < maxPrice);
  
  // CONCEPT 15: map() to extract product names
  return affordableObjects.map((product) => product.name);
}

// ==========================================
// CONCEPT 9: ARROW FUNCTIONS
// ==========================================

/**
 * Arrow function to format product name into uppercase report string.
 * Demonstrates CONCEPT 9: Arrow function with implicit return.
 * 
 * @param {Object} product - Product object with name and price.
 * @returns {string} Formatted string e.g. "LAPTOP: $800"
 */
const formatReportItem = (product) => `${product.name.toUpperCase()}: $${product.price}`;

/**
 * Generates full uppercase report list using map() array method.
 * Demonstrates CONCEPT 15: map() array method.
 * 
 * @param {Array} productList - Array of product objects.
 * @returns {Array<string>} Formatted report string array.
 */
function generateFormattedReport(productList) {
  // CONCEPT 15: map() with arrow function
  return productList.map(formatReportItem);
}

// ==========================================
// CONCEPT 3, 6, & 7: PROMPT, LOOPS, BREAK & CONTINUE
// ==========================================

/**
 * Interactive function to add a new product using prompt() and explicit type conversion Number().
 * Demonstrates CONCEPT 3: prompt() & Number() explicit type conversion,
 * CONCEPT 6: do...while loop, and CONCEPT 7: break / continue.
 * 
 * @param {string} forcedName - Optional pre-set name for automated running.
 * @param {number|string} forcedPrice - Optional pre-set price for automated running.
 * @returns {Object|null} The newly added product object or null if cancelled.
 */
function promptAddNewProduct(forcedName = null, forcedPrice = null) {
  let productName = "";
  let productPrice = NaN;
  let isValidInput = false;

  // CONCEPT 6: do...while loop to guarantee at least one prompt execution & retry until valid input
  do {
    // Check if input is provided programmatically or via window.prompt
    if (forcedName !== null && forcedPrice !== null) {
      productName = String(forcedName).trim();
      // CONCEPT 3: Explicit type conversion using Number()
      productPrice = Number(forcedPrice);
    } else if (typeof window !== 'undefined' && typeof window.prompt === 'function') {
      const rawName = prompt("Enter the new product name (e.g., Monitor):");
      
      // If user clicked Cancel on prompt
      if (rawName === null) {
        logOutput("[User cancelled adding product input]");
        return null;
      }

      productName = rawName.trim();

      const rawPrice = prompt(`Enter price for "${productName}" (e.g., 150):`);
      if (rawPrice === null) {
        logOutput("[User cancelled price input]");
        return null;
      }

      // CONCEPT 3: Explicit type conversion using Number()
      productPrice = Number(rawPrice);
    } else {
      // Default fallback for node/non-browser environment testing
      productName = "Monitor";
      productPrice = Number(150);
    }

    // CONCEPT 4: Validation using if...else & CONCEPT 2: Logical OR (||) & isNaN()
    if (productName === "" || isNaN(productPrice) || productPrice <= 0) {
      logOutput("⚠️ Invalid input! Product name cannot be empty and price must be a positive number.");
      
      if (forcedName !== null) {
        // Break out of retry loop in non-interactive environment to avoid infinite loop
        break;
      }
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);

  if (isValidInput) {
    const newProduct = { name: productName, price: productPrice };
    inventory.push(newProduct);
    logOutput(`[Prompt executed: User adds "${productName}" at "$${productPrice}"]`);
    return newProduct;
  }

  return null;
}

/**
 * Demonstration of for loop with break and continue control flow.
 * Demonstrates CONCEPT 6: for loop & CONCEPT 7: break and continue statements.
 * 
 * @param {string} searchName - Product name to find.
 */
function auditAndSearchInventory(searchName = "Keyboard") {
  logOutput("\n--- Inventory Audit & Target Search (for loop with break & continue) ---");

  // CONCEPT 6 & 11: for loop with block scope variable 'i'
  for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i]; // CONCEPT 11: Block scope variable inside for loop

    // CONCEPT 7: continue statement (skips processing items with price less than $30 during audit)
    if (item.price < 30) {
      logOutput(`Skipping minor budget item during audit (continue triggered): ${item.name} ($${item.price})`);
      continue; // Skip the rest of loop body for this iteration
    }

    logOutput(`Auditing item #${i + 1}: ${item.name} ($${item.price})`);

    // CONCEPT 7: break statement (stops search loop early when target item is found)
    if (item.name.toLowerCase() === searchName.toLowerCase()) {
      logOutput(`🎯 Target item "${item.name}" located! Terminating search loop (break triggered).`);
      break; // Exit the search loop immediately
    }
  }
}

// ==========================================
// MAIN DASHBOARD PROCESSOR
// ==========================================

/**
 * Main function that executes the dashboard processing workflow and renders console output.
 * Demonstrates all concepts working together dynamically.
 */
function runDashboard(includePrompt = true, customName = null, customPrice = null) {
  clearLogOutput();

  logOutput("--- Initializing Inventory System ---");
  
  // Reset inventory to base state for clean run
  inventory = [...initialProducts];

  // CONCEPT 3 & 6: Run prompt input process
  if (includePrompt) {
    promptAddNewProduct(customName, customPrice);
  }

  // CONCEPT 13: forEach() method to iterate over inventory items
  logOutput("\n--- Processing Inventory Roster (forEach) ---");
  inventory.forEach((product) => {
    // CONCEPT 4 & 8: Determine category using regular function with if...else
    const category = getCategory(product.price);
    
    // CONCEPT 5: Get tax rate using switch statement
    const taxRate = getCategoryTaxRate(category);
    const taxAmount = calculateTaxOrDiscount(product.price, taxRate);

    // CONCEPT 1 & 2: Template literals string formatting & output
    logOutput(`* Item: ${product.name} ($${product.price}) -> Category: ${category}`);
  });

  // CONCEPT 6 & 7: Demonstrate for loop, break, continue
  auditAndSearchInventory("Keyboard");

  // FINANCIAL ANALYTICS
  logOutput("\n--- Financial Analytics ---");

  // CONCEPT 6 & 8: Calculate total inventory value dynamically
  const totalValue = calculateTotalValue(inventory);
  logOutput(`Total Inventory Value: $${totalValue}`);

  // CONCEPT 5, 6, & 8: Calculate total estimated category tax dynamically using while loop
  const totalTax = calculateTotalInventoryTax(inventory);
  logOutput(`Total Category Tax (via switch & while loop): $${totalTax.toFixed(2)}`);

  // CONCEPT 10 & 14: Filter affordable items dynamically (under $200 limit)
  const affordableItems = filterAffordableProducts(inventory, 200);
  logOutput(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordableItems)}`);

  // CONCEPT 9 & 15: Map formatted uppercase report list dynamically
  const formattedReport = generateFormattedReport(inventory);
  logOutput(`Formatted Report List: ${JSON.stringify(formattedReport)}`);

  // Update visual UI stats if running in browser
  updateUIStats(totalValue, affordableItems.length, inventory.length);
}

// Helper function to update HTML DOM cards if available
function updateUIStats(totalVal, affordableCount, totalCount) {
  if (typeof document !== 'undefined') {
    const totalElem = document.getElementById('statTotalValue');
    const countElem = document.getElementById('statTotalItems');
    const affordableElem = document.getElementById('statAffordableItems');

    if (totalElem) totalElem.textContent = `$${totalVal.toLocaleString()}`;
    if (countElem) countElem.textContent = totalCount;
    if (affordableElem) affordableElem.textContent = affordableCount;
  }
}

// Interactive helper for UI button click to add item via live browser prompt
function handleUserPromptAdd() {
  const newProd = promptAddNewProduct();
  if (newProd) {
    // Re-run dashboard output after adding product
    runDashboard(false);
  }
}

// Reset inventory to base state
function handleResetInventory() {
  inventory = [...initialProducts];
  runDashboard(false);
}

// Auto-run default dashboard view when script loads
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    // Run initial dashboard display with pre-added Monitor to show output layout immediately
    runDashboard(true, "Monitor", 150);
  });
}

// Export for node environment testing if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    inventory,
    getCategory,
    getCategoryTaxRate,
    calculateTaxOrDiscount,
    calculateTotalValue,
    calculateTotalInventoryTax,
    filterAffordableProducts,
    generateFormattedReport,
    promptAddNewProduct,
    runDashboard
  };
}
