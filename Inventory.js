// 1. Store Details
let store = {
  storeName: "Datablitz",
  storeLocation: "Las Pinas, Philippines",
  storeCapacity: 300,
};

// 2. Dynamic Product Inventory
let products = [
  { name: "Laptop", price: 1899, quantity: 50 },
  { name: "Smartphone", price: 999, quantity: 200 },
  { name: "Tablet", price: 1299, quantity: 80 },
];

// 3. Inventory Validation
function checkInventoryCapacity() {
  let totalProducts = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  if (totalProducts > store.storeCapacity) {
    console.log(`Store is at full capacity. Cannot add new products.`);
  }
  return totalProducts;
}

// 4. Product Manipulation: Add Product
function addProduct(name, price, quantity) {
  let totalProducts = checkInventoryCapacity();

  if (totalProducts + quantity > store.storeCapacity) {
    console.log(
      "Warning: Adding this product exceeds the store's inventory capacity."
    );
    return;
  }

  let existingProduct = products.find((product) => product.name === name);
  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    products.push({ name, price, quantity });
  }
  console.log(`${name} added to the inventory.`);
  console.log(`Updated Inventory: `, products);
}

// Product Manipulation: Remove Product
function removeProduct(name, quantity) {
  let productIndex = products.findIndex((product) => product.name === name);

  if (productIndex === -1) {
    console.log("Error: Product not found.");
    return;
  }

  let product = products[productIndex];
  if (product.quantity < quantity) {
    console.log("Error: Cannot remove more quantity than available.");
    return;
  }

  product.quantity -= quantity;

  if (product.quantity === 0) {
    products.splice(productIndex, 1); // Remove product completely if quantity is 0
  }

  console.log(`${quantity} units of ${name} removed.`);
  console.log(`Updated Inventory: `, products);
}

// 5. Most Expensive Product
function getMostExpensiveProduct() {
  let mostExpensive = products.reduce((prev, current) =>
    prev.price > current.price ? prev : current
  );
  return mostExpensive;
}

// 6. Total Inventory Value
function calculateTotalInventoryValue() {
  let totalValue = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  return totalValue;
}

// 7. User Interaction
function userAddProduct() {
  let name = prompt("Enter product name:");
  let price = parseFloat(prompt("Enter product price:"));
  let quantity = parseInt(prompt("Enter product quantity:"));

  addProduct(name, price, quantity);
}

function userRemoveProduct() {
  let name = prompt("Enter product name to remove:");
  let quantity = parseInt(prompt("Enter quantity to remove:"));

  removeProduct(name, quantity);
}

// 8. Comments (Note: Already integrated throughout the code for explanation)

// Example Outputs:
console.log(`Store Name: ${store.storeName}`);
console.log(`Store Location: ${store.storeLocation}`);

let totalProducts = checkInventoryCapacity();
console.log(`Total Number of Products in Store: ${totalProducts}`);
console.log(`Total Inventory Value: $${calculateTotalInventoryValue()}`);

// Get Most Expensive Product
let expensiveProduct = getMostExpensiveProduct();
console.log(
  `Most Expensive Product: ${expensiveProduct.name}, Price: $${expensiveProduct.price}`
);

