/**
 * We've Got Rhythm - Hero Slideshow Controller
 * Controls homepage hero background image transitions and pagination dots.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlideshow();
});

function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

  if (!slides.length || !dots.length || !prevBtn || !nextBtn) return;

  let currentSlide = 0;
  let autoplayTimer = null;
  const AUTOPLAY_INTERVAL = 5000; // 5 seconds per slide

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, idx) => {
      slide.style.opacity = idx === currentSlide ? '1' : '0';
      slide.setAttribute('aria-hidden', String(idx !== currentSlide));
    });

    dots.forEach((dot, idx) => {
      const indicator = dot.querySelector('span');
      const isCurrent = idx === currentSlide;
      dot.setAttribute('aria-current', String(isCurrent));
      if (indicator) {
        indicator.classList.toggle('bg-white', isCurrent);
        indicator.classList.toggle('bg-white/50', !isCurrent);
      }
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    restartAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    restartAutoplay();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      restartAutoplay();
    });
  });

  // Pause autoplay when user hovers or focuses within the carousel
  const carouselContainer = document.querySelector('[aria-label="Hero Carousel"]');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoplay);
    carouselContainer.addEventListener('mouseleave', startAutoplay);
    carouselContainer.addEventListener('focusin', stopAutoplay);
    carouselContainer.addEventListener('focusout', startAutoplay);
  }

  // Initial state setup and start timer
  showSlide(0);
  startAutoplay();
}
