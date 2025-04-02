document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".lazy-section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fetch(entry.target.dataset.src)
          .then(response => response.text())
          .then(html => {
            entry.target.innerHTML = html;
            entry.target.classList.add("loaded");
          });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
});
