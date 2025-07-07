// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks   = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    // close menu on mobile after click
    if (window.innerWidth < 769) navLinks.style.display = 'none';
  });
});

// Simple form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for contacting Karyam Event Management!');
  form.reset();
});
