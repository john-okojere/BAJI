document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel-content');
    const spans = document.querySelectorAll('.carousel-content span');
    const slideWidth = spans[0].offsetWidth;

    let currentIndex = 0;

    function changeSlide() {
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        currentIndex = (currentIndex + 1) % spans.length;
    }

    setInterval(changeSlide, 7000); 
});