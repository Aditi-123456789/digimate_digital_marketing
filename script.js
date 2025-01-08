<script>
document.addEventListener("DOMContentLoaded", () => {
    const quoteBtn = document.querySelector(".quote-btn");

    // Remove the alert for "REQUEST A QUOTE"
    quoteBtn.addEventListener("click", () => {
        // No alert here
    });

    const menuBtn = document.querySelector(".menu");

    // Remove the alert for "MENU"
    menuBtn.addEventListener("click", () => {
        // No alert here
    });

    // Carousel autoplay
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }, 3000);
});
</script>