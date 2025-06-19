
        // Keyboard navigation (optional)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            }
        });

        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;

        document.getElementById('gallery-carousel').addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        document.getElementById('gallery-carousel').addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });

        function handleSwipe() {
            if (startX - endX > 50) {
                // Swipe left - next slide
                nextSlide();
            }
        }