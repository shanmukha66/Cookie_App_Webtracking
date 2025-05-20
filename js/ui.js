// UI Enhancement Functions
document.addEventListener('DOMContentLoaded', () => {
    // Back to top button functionality
    const backToTop = document.querySelector('.back-to-top');
    const header = document.querySelector('header');

    if (backToTop && header) {
        window.addEventListener('scroll', () => {
            // Show/hide back to top button
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }

            // Add/remove scrolled class to header
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scroll to top
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Product card animations (if on home page)
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, i) => {
        card.style.animationDelay = (i * 0.08) + 's';
    });
}); 