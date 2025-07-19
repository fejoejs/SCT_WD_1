const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      const currentId = section.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const popup = document.getElementById('popup-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    popup.style.display = 'block';

    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  });
});