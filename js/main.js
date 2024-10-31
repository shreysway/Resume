// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
});

// Animation for fade-in, slide-in-left, scale-up, and new effects
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .bounce-in, .zoom-in, .scale-up');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Optional: If you want to refresh the Locomotive Scroll on animations
const animateElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .bounce-in, .zoom-in, .scale-up');
animateElements.forEach(element => {
    element.addEventListener('animationend', () => {
        scroll.update();
    });
});
