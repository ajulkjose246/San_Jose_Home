// Gallery Filter
document.addEventListener('DOMContentLoaded', function() {
    // Add gallery items dynamically
    const galleryContainer = document.querySelector('.gallery-container');
    
    // Gallery configuration
    const galleries = [
        {
            category: 'blessing',
            count: 75,
            path: 'blessing_ceremony/blessing_ceremony'
        },
        {
            category: 'foundation',
            count: 24,
            path: 'foundation_stone_laying/foundation_stone_laying'
        },
        {
            category: 'others',
            count: 3,
            path: 'others/others'
        },
        {
            category: 'videos',
            count: 15,
            path: 'videos/videos'
        }
    ];

    // Create gallery items for each category
    galleries.forEach(gallery => {
        for (let i = 1; i <= gallery.count; i++) {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'col-md-4 col-lg-3 gallery-item';
            galleryItem.setAttribute('data-category', gallery.category);

            const card = document.createElement('div');
            card.className = 'gallery-card';

            if (gallery.category === 'videos') {
                const video = document.createElement('video');
                video.src = `assets/img/gallery/${gallery.path} (${i}).mp4`;
                video.className = 'img-fluid';
                video.controls = true;
                video.preload = 'metadata';
                card.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = `assets/img/gallery/${gallery.path} (${i}).jpg`;
                img.className = 'img-fluid';
                img.alt = `${gallery.category} Ceremony Image ${i}`;
                card.appendChild(img);
            }

            galleryItem.appendChild(card);
            galleryContainer.appendChild(galleryItem);
        }
    });

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