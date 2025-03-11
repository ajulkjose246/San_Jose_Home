// Gallery Filter
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.gallery-filter .btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Image Modal
    const galleryImages = document.querySelectorAll('.gallery-card img');
    const modalImg = document.querySelector('.modal-img');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modalImg.src = this.src;
            imageModal.show();
        });
    });
});