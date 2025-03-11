// jQuery version of carousel initialization
$(document).ready(function() {
    $('#heroCarousel').carousel({
        interval: 5000,
        ride: 'carousel',
        wrap: true,
        touch: true
    });

    // Optional: Add custom controls
    // Next slide
    $('.carousel-control-next').click(function() {
        $('#heroCarousel').carousel('next');
    });

    // Previous slide
    $('.carousel-control-prev').click(function() {
        $('#heroCarousel').carousel('prev');
    });
});

// Gallery Image Click Handler
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modalImage = document.querySelector('.modal-img');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            modalImage.src = this.src;
            imageModal.show();
        });
    });
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.blog-gallery .gallery-item img');
    const modalImage = document.querySelector('.modal-img');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            modalImage.src = this.src;
            imageModal.show();
        });
    });
});

// Contact Form Handler
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

// Add this to your existing script.js
document.querySelector('.scroll-down a').addEventListener('click', function(e) {
    e.preventDefault();
    const progressSection = document.querySelector('.progress-updates');
    progressSection.scrollIntoView({ behavior: 'smooth' });
});
