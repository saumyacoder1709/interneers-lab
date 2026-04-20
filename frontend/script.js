const API_URL = 'http://127.0.0.1:8000/api/products/';

function renderProducts(productsArray) {
    const container = document.getElementById('product-container');
    
    container.innerHTML = ''; 

    productsArray.forEach(product => {
        const productHTML = `
            <div class="product-card">
                <img src="https://via.placeholder.com/250x150" alt="Product Image" class="product-image">
                <h2 class="product-title">${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price}</p>
                <button class="buy-button">Add to Cart</button>
            </div>
        `;
        
        container.innerHTML += productHTML;
    });
}

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const productData = await response.json();
        
        renderProducts(productData);

    } catch (error) {
        console.error("❌ Failed to fetch data:", error);
    }
}

fetchProducts();