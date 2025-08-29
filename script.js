// Smooth scrolling for navbar links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
       const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800, // animation duration in milliseconds
    once: true, // whether animation should happen only once
});

// Scroll to Top Button Logic
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Lightbox effect for gallery images
const galleryImages = document.querySelectorAll('.photo-card img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0,0,0,0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.zIndex = '9999';

        const imgClone = img.cloneNode();
        imgClone.style.maxWidth = '80%';
        imgClone.style.maxHeight = '80%';
        imgClone.style.borderRadius = '10px';

        lightbox.appendChild(imgClone);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
