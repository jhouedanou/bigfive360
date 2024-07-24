<script setup>
import { ref, onMounted } from "vue";
import Service from "./Service.vue";

const globalData = inject("globalData");
const isCarouselLoaded = ref(false);

let Carousel, Slide, Pagination, Navigation;

onMounted(async () => {
  const module = await import("vue3-carousel");
  Carousel = module.Carousel;
  Slide = module.Slide;
  Pagination = module.Pagination;
  Navigation = module.Navigation;
  isCarouselLoaded.value = true;
});
</script>
<template>
  <div id="services">
    <client-only>
      <Carousel v-if="isCarouselLoaded" :items-to-show="3" :wrap-around="true">
        <Slide v-for="(service, index) in globalData?.services.service" :key="index">
          <Service :titre="service.titre" :image="service.image" :icone="service.icone" />
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </client-only>
  </div>
</template>

<style>
@import "vue3-carousel/dist/carousel.css";
</style>
