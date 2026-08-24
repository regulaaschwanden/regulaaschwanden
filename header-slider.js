        document.addEventListener('DOMContentLoaded', function () {

        const slides = document.querySelectorAll('.header-slide');

        if (slides.length <= 1) return;

        let currentSlide = 0;

        setInterval(function () {

            slides[currentSlide].classList.remove('active');

            currentSlide++;

            if (currentSlide >= slides.length) {
            currentSlide = 0;
            }

            slides[currentSlide].classList.add('active');

        }, 3500);

        });