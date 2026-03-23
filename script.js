// Nav scroll shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Smooth anchor scroll with nav offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 8;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Fallback: hide broken logo images and show text fallback
document.querySelectorAll('.nav-logo img, .contact-logo img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    if (img.closest('.nav-logo')) {
      const fallback = document.createElement('span');
      fallback.className = 'nav-logo-fallback';
      fallback.textContent = 'L\\WLA';
      img.closest('.nav-logo').appendChild(fallback);
    }
  });
});

// Gallery items with missing images get dark placeholder
document.querySelectorAll('.gallery-item').forEach(item => {
  const url = item.style.backgroundImage;
  if (url && url !== 'none') {
    const testImg = new Image();
    const src = url.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
    testImg.onerror = () => {
      item.style.backgroundImage = 'none';
      item.style.background = '#2a2a30';
    };
    testImg.src = src;
  }
});

// Intersection observer — fade in sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.highlight-card, .broker-card, .details-row').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add visible class styles dynamically
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(style);
