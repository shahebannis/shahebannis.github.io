// Subtle nav shadow on scroll
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 8) {
    nav.style.boxShadow = '0 1px 0 0 var(--border)';
  } else {
    nav.style.boxShadow = 'none';
  }
}, { passive: true });

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--text)';
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));
