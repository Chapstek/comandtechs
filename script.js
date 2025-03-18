document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(() => {
        showSlide(slideIndex + 1);
    }, 3000);

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(slideIndex - 1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(slideIndex + 1);
    });

    showSlide(slideIndex);
});
