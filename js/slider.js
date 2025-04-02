const commentsSlider = new Splide('#comments-slider', {
  perPage: 4,
  gap: 30,
  arrows: true,
  pagination: false,
  breakpoints: {
    1200: {
      perPage: 3,
      gap: 24
    },
    800: {
      perPage: 2,
      gap: 12
    },
    500: {
      perPage: 1,
      gap: 12
    }
  },
  autoplay: false,
  type: 'loop'
});

commentsSlider?.mount();

const sliderItems = document.querySelectorAll('#comments-slider .splide__slide');

sliderItems.forEach((item) => {
  item.addEventListener('touched', (e) => {
    console.log('clicked', e);
  })
})
