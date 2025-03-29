import { playVideo } from './hero-play-video';
import { priceTab } from './price-tab';
import { faqTub } from './faq-tab';
import { validateForm } from './form-valid';

playVideo();
priceTab();
faqTub();
validateForm();

import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const juriSwiper = document.querySelector('.swiper');
const juriSlider = new Swiper(juriSwiper, {

  modules: [Navigation],

  loop: true,
  speed: 500,
  effect: 'fade',

  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.juri__button--next',
    prevEl: '.juri__button--prev',
  },
});

juriSlider.update();


const reviewsSwiper = document.querySelector('.reviews__swiper');
const reviewsSlider = new Swiper(reviewsSwiper, {

  modules: [Navigation],

  watchOverflow: true,
  speed: 500,
  effect: 'fade',

  breakpoints: {
    slidesPerView: 1,
  },

  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
    lockClass: 'disabled',
  },
});

reviewsSlider.update();
