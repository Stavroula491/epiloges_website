const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let current = 0;

function updateCarousel() {
  slides.forEach((slide, i) => {
    const offset = i - current;

    if (offset === 0) {
      // Center
      slide.style.transform = `translateX(-50%) translateZ(200px) rotateY(0deg) scale(1)`;
      slide.style.opacity = 1;
      slide.style.zIndex = 3;
      slide.style.pointerEvents = "auto";
    } else if (offset === -1) {
      // Left
      slide.style.transform = `translateX(-150%) rotateY(30deg) scale(.8)`;
      slide.style.opacity = 1;
      slide.style.zIndex = 2;
    } else if (offset === 1) {
      // Right
      slide.style.transform = `translateX(50%) rotateY(-30deg) scale(.8)`;
      slide.style.opacity = 1;
      slide.style.zIndex = 2;
    } else {
      // Hide others
      slide.style.transform = `translateX(-50%) scale(.5)`;
      slide.style.opacity = 0;
      slide.style.zIndex = 1;
    }
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateCarousel();
});

updateCarousel();
