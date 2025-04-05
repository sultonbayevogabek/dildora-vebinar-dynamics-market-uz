document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".lazy-section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fetch(entry.target.dataset.src)
          .then(response => response.text())
          .then(html => {
            entry.target.innerHTML = html;

            if (entry.target.dataset.src === 'sections/comments.html') {
              loadComments();
            }

            entry.target.classList.add("loaded");

            initRegisterButtons();
          });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
});
