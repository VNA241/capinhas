// Sample Data
const products = [
    { name: 'Slim Case', price: 15.99, imageUrl: 'https://via.placeholder.com/200x300?text=Slim+Case' },
    { name: 'Rugged Case', price: 29.99, imageUrl: 'https://via.placeholder.com/200x300?text=Rugged+Case' },
    { name: 'Wallet Case', price: 24.99, imageUrl: 'https://via.placeholder.com/200x300?text=Wallet+Case' },
    { name: 'Classic Case', price: 19.99, imageUrl: 'https://via.placeholder.com/200x300?text=Classic+Case' },
    { name: 'Artistic Case', price: 27.99, imageUrl: 'https://via.placeholder.com/200x300?text=Artistic+Case' },
    { name: 'Transparent Case', price: 12.99, imageUrl: 'https://via.placeholder.com/200x300?text=Transparent+Case' },
    { name: 'Leather Case', price: 34.99, imageUrl: 'https://via.placeholder.com/200x300?text=Leather+Case' },
    { name: 'Patterned Case', price: 22.99, imageUrl: 'https://via.placeholder.com/200x300?text=Patterned+Case' }
];

// Render Products
const renderProducts = () => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.imageUrl}" alt="${product.name}"/>
            <p>$${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', renderProducts);

const images = [
    "images/image1.jpg", // Replace with your actual image paths
    "images/image2.jpg",
    "images/image3.jpg"
];

let currentImageIndex = 0;

const updateCarousel = () => {
    const carouselImage = document.getElementById('carousel-image');
    carouselImage.src = images[currentImageIndex];

    currentImageIndex = (currentImageIndex + 1) % images.length;
};

// Initialize the first image
updateCarousel();
// Change image every 3 seconds
setInterval(updateCarousel, 3000);

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

