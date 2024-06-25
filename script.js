// Example data for products and inventory
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 15 }
];

const inventory = [
    { productId: 1, stock: 50 },
    { productId: 2, stock: 30 },
    { productId: 3, stock: 20 }
];

// Function to display products in the dashboard
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous list

    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        productList.appendChild(li);
    });
}

// Function to display inventory in the dashboard
function displayInventory() {
    const inventoryDiv = document.getElementById('inventory');
    inventoryDiv.innerHTML = ''; // Clear previous inventory

    inventory.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `Product ID: ${item.productId} - Stock: ${item.stock}`;
        inventoryDiv.appendChild(p);
    });
}

// Initial display when the page loads
displayProducts();
displayInventory();
