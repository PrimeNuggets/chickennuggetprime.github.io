const media = {
    "example-image.png": {
        type: "image",
        categories: ["2d_art", "mugen"],
    },
    "example-image.gif": {
        type: "image",
        categories: ["2d_art", "animation", "school"],
    }
};

document.querySelectorAll(".media-carousel").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".media-slide"));
    const previousButton = carousel.querySelector(".media-prev");
    const nextButton = carousel.querySelector(".media-next");
    const caption = carousel.querySelector(".media-caption");
    let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));

    const pauseInactiveVideos = () => {
        slides.forEach((slide, index) => {
            if (index !== activeIndex) {
                slide.querySelectorAll("video").forEach((video) => video.pause());
            }
        });
    };

    const updateCarousel = () => {
        slides.forEach((slide, index) => {
            slide.classList.toggle("is-active", index === activeIndex);
            slide.setAttribute("aria-hidden", index === activeIndex ? "false" : "true");
        });

        if (caption) {
            caption.textContent = slides[activeIndex]?.dataset.mediaTitle || `Media ${activeIndex + 1}`;
        }

        const hasMultipleSlides = slides.length > 1;
        previousButton?.toggleAttribute("disabled", !hasMultipleSlides);
        nextButton?.toggleAttribute("disabled", !hasMultipleSlides);
        pauseInactiveVideos();
    };

    const showSlide = (direction) => {
        activeIndex = (activeIndex + direction + slides.length) % slides.length;
        updateCarousel();
    };

    previousButton?.addEventListener("click", () => showSlide(-1));
    nextButton?.addEventListener("click", () => showSlide(1));
    updateCarousel();
});
