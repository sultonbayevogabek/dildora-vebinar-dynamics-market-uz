function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}

function loadCSS(href) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function initSlider() {
  const commentsSlider = new Splide('#comments-slider', {
    perPage: 3,
    gap: 30,
    arrows: true,
    pagination: false,
    breakpoints: {
      1200: {
        perPage: 2,
        gap: 24
      },
      700: {
        perPage: 1,
        gap: 12
      }
    },
    autoplay: false,
    type: 'loop'
  });

  commentsSlider?.mount();
}

function loadComments() {
  loadCSS("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");
  loadScript("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js", initSlider);
}
