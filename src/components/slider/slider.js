import Swiper from 'swiper/bundle';

function initSwiper(slider, index = 0) {
  const sliderParams = JSON.parse(slider.getAttribute('data-slider'));
  const sliderPagination = slider.querySelector('.swiper-pagination');
  const sliderBtnNext = slider.querySelector('.swiper-button-next');
  const sliderBtnPrev = slider.querySelector('.swiper-button-prev');
 

  const swiper = new Swiper(slider, {
    pagination: {
      el: sliderPagination,
    },
    navigation: {
      nextEl: sliderBtnNext,
      prevEl: sliderBtnPrev,
    },

    ...sliderParams,
  });
}

const sliders = document.querySelectorAll('.js-slider');

function initAllSliders() {
  sliders.length > 0 &&
  sliders.forEach((slider, index) => initSwiper(slider, index));
}

initAllSliders();