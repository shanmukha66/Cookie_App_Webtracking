// Cookie management functions
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Recently viewed products management
function updateRecentlyViewed(productId, productName, productImage) {
    let recentlyViewed = JSON.parse(getCookie('recentlyViewed') || '[]');
    
    // Remove if already exists
    recentlyViewed = recentlyViewed.filter(item => item.id !== productId);
    
    // Add to beginning
    recentlyViewed.unshift({
        id: productId,
        name: productName,
        image: productImage
    });
    
    // Keep only last 5 items
    recentlyViewed = recentlyViewed.slice(0, 5);
    
    setCookie('recentlyViewed', JSON.stringify(recentlyViewed), 30);
    displayRecentlyViewed();
}

// Most visited products management
function updateMostVisited(productId, productName, productImage) {
    let mostVisited = JSON.parse(getCookie('mostVisited') || '[]');
    
    // Find if product exists
    const existingProduct = mostVisited.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.visits++;
    } else {
        mostVisited.push({
            id: productId,
            name: productName,
            image: productImage,
            visits: 1
        });
    }
    
    // Sort by visits and keep top 5
    mostVisited.sort((a, b) => b.visits - a.visits);
    mostVisited = mostVisited.slice(0, 5);
    
    setCookie('mostVisited', JSON.stringify(mostVisited), 30);
    displayMostVisited();
}

// Display functions
function displayRecentlyViewed() {
    const container = document.getElementById('recently-viewed-list');
    if (!container) return;
    
    const recentlyViewed = JSON.parse(getCookie('recentlyViewed') || '[]');
    
    if (recentlyViewed.length === 0) {
        container.innerHTML = '<p>No recently viewed products</p>';
        return;
    }
    
    container.innerHTML = recentlyViewed.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <a href="products/${product.id}.html" class="btn">View Again</a>
        </div>
    `).join('');
}

function displayMostVisited() {
    const container = document.getElementById('most-visited-list');
    if (!container) return;
    
    const mostVisited = JSON.parse(getCookie('mostVisited') || '[]');
    
    if (mostVisited.length === 0) {
        container.innerHTML = '<p>No most visited products</p>';
        return;
    }
    
    container.innerHTML = mostVisited.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Visited ${product.visits} times</p>
            <a href="products/${product.id}.html" class="btn">View Again</a>
        </div>
    `).join('');
}

// Initialize displays when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayRecentlyViewed();
    displayMostVisited();
    
    // If we're on a product page, update the tracking
    const productId = window.location.pathname.split('/').pop().replace('.html', '');
    if (productId && productId !== 'index') {
        const productName = document.querySelector('h1')?.textContent;
        const productImage = document.querySelector('.product-image')?.src;
        
        if (productName && productImage) {
            updateRecentlyViewed(productId, productName, productImage);
            updateMostVisited(productId, productName, productImage);
        }
    }
}); 