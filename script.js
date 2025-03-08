// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Mobile menu functionality
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // About section animation
    const aboutSection = document.getElementById('about');
    window.addEventListener('scroll', () => {
        const position = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;

        if (position < screenPosition) {
            aboutSection.style.opacity = 1;
            aboutSection.style.transform = 'translateY(0)';
        }
    });
});

function placeOrder(product, price) {
    const quantity = prompt(`Enter quantity for ${product} (₹${price}/unit):`);
    const parsedQty = parseInt(quantity);

    if (isNaN(parsedQty) || parsedQty <= 0) {
        alert('Please enter a valid quantity');
        return;
    }

    const total = parsedQty * price;
    const confirmation = confirm(`Confirm order:\n${parsedQty} x ${product}\nTotal: ₹${total}`);
    
    if (confirmation) {
        alert(`Order placed successfully!\nThank you for choosing Dudh Dairy.`);
    }
}