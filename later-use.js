

<!--
            <canvas id="imageCanvas" style="display: block; width:100%; height: 150px;">
                <div class="flex justify-center items-center pt-4">
                    <button type="button"
                            class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
                            data-carousel-prev>
                        <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                            <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black"  viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button"
                            class="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
                            data-carousel-next>
                        <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                            <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="black" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </canvas>

            -->

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