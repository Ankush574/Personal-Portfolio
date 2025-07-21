// script.js

// Smooth scroll (if not already handled by CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typing effect in hero (optional enhancement)
const heroText = ["Full Stack Developer", "AI & Data Science Enthusiast", "Open Source Contributor"];
let current = 0;
let letter = 0;
const heroElement = document.querySelector('.hero p');

function type() {
  if (letter < heroText[current].length) {
    heroElement.textContent += heroText[current][letter];
    letter++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (letter > 0) {
    heroElement.textContent = heroText[current].substring(0, letter - 1);
    letter--;
    setTimeout(erase, 50);
  } else {
    current = (current + 1) % heroText.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (heroElement) type();
});