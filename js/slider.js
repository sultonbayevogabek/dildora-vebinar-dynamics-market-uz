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

const sliderItems = document.querySelectorAll('#comments-slider .splide__slide');

sliderItems.forEach((item) => {
  item.addEventListener('touched', (e) => {
    console.log('clicked', e);
  })
})
