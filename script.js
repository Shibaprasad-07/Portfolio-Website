// script.js

window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// Optional: Smooth scroll for nav links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Section Toggle
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.closest('.section');
        const content = section.querySelector('.section-content');

        // Toggle visibility
        content.classList.toggle('hidden');

        // Change button symbol
        button.textContent = content.classList.contains('hidden') ? '+' : '−';
    });
});