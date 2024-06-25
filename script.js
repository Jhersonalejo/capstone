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

// Function to simulate user login
function login(username, password) {
    // Simulate authentication (replace with actual authentication logic)
    if (username === 'admin' && password === 'admin') {
        return 'admin';
    } else if (username === 'user' && password === 'user') {
        return 'user';
    } else {
        return null;
    }
}

// Function to display navigation based on user type
function displayNavigation(userType) {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    if (userType === 'admin') {
        nav.innerHTML += '<a href="#" class="active">Dashboard</a>';
        nav.innerHTML += '<a href="#">Products</a>';
        nav.innerHTML += '<a href="#">Inventory</a>';
    } else if (userType === 'user') {
        nav.innerHTML += '<a href="#" class="active">Dashboard</a>';
    }
}

// Function to display products in the dashboard
function displayProducts() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    const productsCard = document.createElement('div');
    productsCard.classList.add('card');
    productsCard.innerHTML = '<h2>Products</h2><ul id="product-list"></ul>';
    mainContent.appendChild(productsCard);

    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        productList.appendChild(li);
    });
}

// Function to display inventory in the dashboard
function displayInventory() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    const inventoryCard = document.createElement('div');
    inventoryCard.classList.add('card');
    inventoryCard.innerHTML = '<h2>Inventory</h2><ul id="inventory-list"></ul>';
    mainContent.appendChild(inventoryCard);

    const inventoryList = document.getElementById('inventory-list');
    inventory.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Product ID: ${item.productId} - Stock: ${item.stock}`;
        inventoryList.appendChild(li);
    });
}

// Simulating user login and displaying appropriate dashboard
const loggedInUser = login('admin', 'admin'); // Change credentials for different users

if (loggedInUser) {
    displayNavigation(loggedInUser);
    displayProducts(); // Default view for admin (can be adjusted based on userType)
}
