// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Almanac cover placeholders — show fallback div if image fails
document.querySelectorAll('.almanac-cover img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    const placeholder = img.nextElementSibling;
    if (placeholder) placeholder.style.display = 'flex';
  });
});
