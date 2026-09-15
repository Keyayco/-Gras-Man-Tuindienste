const menuButton = document.querySelector('.mobile-toggle');
const mobilePanel = document.querySelector('.mobile-panel');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  mobilePanel.hidden = isOpen;
});

document.querySelectorAll('.mobile-panel a').forEach((link) => {
  link.addEventListener('click', () => {
    mobilePanel.hidden = true;
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open menu');
  });
});

document.querySelector('#quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const message = document.querySelector('#message').value.trim();
  const text = `Hi Gras Man Tuindienste, my name is ${name}. ${message}`;
  window.open(`https://wa.me/27655252052?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

const revealItems = document.querySelectorAll('.service-card, .trust-item, .process-step, .about-copy, .about-art, .location-copy, .map-card, .contact-intro, .quote-form');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));
