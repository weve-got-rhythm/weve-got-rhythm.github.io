/**
 * We've Got Rhythm - Core Application Scripts
 * Manages responsive navigation toggle, accessibility states, and keyboard listeners.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initMissionToggle();
});

function initMissionToggle() {
  const toggleBtn = document.getElementById('mission-toggle');
  const expandedContent = document.getElementById('mission-expanded');
  const toggleText = document.getElementById('mission-toggle-text');
  const toggleIcon = document.getElementById('mission-toggle-icon');

  if (!toggleBtn || !expandedContent) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    expandedContent.classList.toggle('hidden');

    if (toggleText) {
      toggleText.textContent = isExpanded ? 'Read More' : 'Read Less';
    }
    if (toggleIcon) {
      toggleIcon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    }
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!toggleBtn || !mobileMenu) return;

  function setMenuState(isOpen) {
    document.body.classList.toggle('menu-open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  // Toggle button click
  toggleBtn.addEventListener('click', () => {
    const isCurrentlyOpen = document.body.classList.contains('menu-open');
    setMenuState(!isCurrentlyOpen);
  });

  // Close menu when any navigation link inside it is clicked
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  // Close menu on Escape key press for keyboard accessibility
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setMenuState(false);
      toggleBtn.focus();
    }
  });

  // Close menu if viewport is resized beyond mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && document.body.classList.contains('menu-open')) {
      setMenuState(false);
    }
  });
}
