import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Swiper', Swiper);
    nuxtApp.vueApp.component('SwiperSlide', SwiperSlide);
    nuxtApp.provide('swiperModules', { Navigation, Pagination, Autoplay, Mousewheel });
  });