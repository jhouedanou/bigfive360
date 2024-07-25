<template>
  <section id="notreoffre" class="is-fullheight white-bg">
    <div class="container">
      <div id="offrewrapper">
        <h2 class="section-title">{{ globalData?.notreOffre }}</h2>
      </div>
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :navigation="true"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000, disableOnInteraction: true }"
        :modules="[Navigation, Pagination, Autoplay]"
        class="mySwiper"
      >
        <swiper-slide v-for="(visite, index) in globalData?.visites" :key="index">
          <Visite
            :description="visite.description"
            :type="visite.type"
            :action="visite.action"
            :icone="visite.icone"
            :lien="visite.lien"
            :preview="visite.preview"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const globalData = inject("globalData");
</script>

<style scoped lang="scss">
/* Styles spécifiques au composant */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff00;
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
#notreoffre {
  .container {
    padding: 0;
    margin: 0;
    .section-title {
      margin: 0 !important;
      padding: 0 !important;
      position: absolute;
      top: 70px;
      left: 0;
    }
  }
}
</style>
