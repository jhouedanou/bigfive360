<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const globalData = inject("globalData");
const isMobile = ref(false);
const checkIfMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkIfMobile();
  window.addEventListener("resize", checkIfMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkIfMobile);
});
</script>

<template>
  <div id="ccm" class="is-fullheight primary-bg">
    <div class="container">
      <h2 class="section-title">{{ globalData?.ccm.titre }}</h2>
      <div>
        <template>
          <div>
            <div v-if="isMobile">
              <swiper
                :slides-per-view="1"
                :space-between="0"
                :navigation="true"
                :pagination="true"
                :loop="true"
                :autoplay="{ delay: 2000, disableOnInteraction: true }"
              >
                <swiper-slide
                  v-for="(etape, index) in globalData?.ccm.etapes"
                  :key="index"
                >
                  <div class="column is-4">
                    <NuxtImg
                      :src="etape.image.webp"
                      :alt="`Étape ${index + 1} de BigFive360`"
                      format="webp"
                      :fallback="etape.image.png"
                    />
                    <h4>{{ etape.titre }}</h4>
                    <p v-if="etape.description">{{ etape.description }}</p>
                    <button class="lebtn" v-if="etape.bouton">
                      <span>{{ etape.bouton }}</span>
                    </button>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="columns" v-else>
              <div
                class="column is-4"
                v-for="(etape, index) in globalData?.ccm.etapes"
                :key="index"
              >
                <NuxtImg
                  :src="etape.image.webp"
                  :alt="`Étape ${index + 1} de BigFive360`"
                  format="webp"
                  :fallback="etape.image.png"
                />
                <h4>{{ etape.titre }}</h4>
                <p v-if="etape.description">{{ etape.description }}</p>
                <button class="lebtn" v-if="etape.bouton">
                  <span>{{ etape.bouton }}</span>
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  color: white;
  border-bottom: 1px solid #ffffff;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.column {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  img {
    max-width: 250px;
    height: ato;
  }
}
h4 {
  text-align: center;
  font-size: 25px !important;
  line-height: 1 !important;
  font-weight: 900 !important;
  color: white !important;
  margin: 1em auto !important;
}
p {
  color: #fff;
  font-size: 23px;
  text-align: center;
  line-height: 34px;
  letter-spacing: 1px;
  padding: 0 2em;
  white-space: pre-wrap;
}
.lebtn {
  margin-top: 1em;
}
@media screen and (max-width: 1024px) {
  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  p {
    max-width: 80vw;
  }
}
</style>
