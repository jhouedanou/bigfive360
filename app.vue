<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
const activeSlideIndex = ref(0);
const sidebarOpen = ref(false);
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
const modules = [Mousewheel, Pagination];

import { useGlobalData } from "~/composables/useGlobalData";
const { data: globalData } = useGlobalData();
provide("globalData", globalData);
</script>

<template>
  <div id="app">
    <Header
      @toggle-sidebar="toggleSidebar"
      :activeSlideIndex="activeSlideIndex"
    />
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      direction="vertical"
      :mousewheel="true"
      :pagination="{ clickable: true }"
      class="mySwiper"
      @slideChange="(swiper) => (activeSlideIndex = swiper.activeIndex)"
    >
      <swiper-slide><Hero /></swiper-slide>
      <swiper-slide><Avantages /></swiper-slide>
      <swiper-slide><NotreOffre /></swiper-slide>
      <swiper-slide><LaTechnologie /></swiper-slide>
      <swiper-slide><NosServices /></swiper-slide>
      <swiper-slide><Options /></swiper-slide>
      <swiper-slide><Ccm /></swiper-slide>
      <swiper-slide><Demo /></swiper-slide>
    </swiper>
  </div>
</template>

<style>
.mySwiper {
  height: 100vh;
}
@import "swiper/css";
@import "swiper/css/mousewheel";

.swiper {
  width: 100%;
  height: 100vh;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide > * {
  width: 100%;
  height: 100%;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  height: 100vh;
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: #fff;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}

.swiper-pagination-vertical {
  right: 10px;
}
</style>
