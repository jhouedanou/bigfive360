<script setup>
import { ref, onMounted } from "vue";
import Service from "./Service.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const globalData = inject("globalData");
const isSwiper = ref(false);

onMounted(() => {
  isSwiper.value = true;
  nextTick(() => {
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      const img = item.querySelector(".service-img");
      if (img) {
        item.style.height = `${img.offsetHeight}px`;
      }
    });
  });
});
</script>

<template>
  <section id="services" class="primary-bg">
    <div id="serviceintro" class="primary-bg">
      <div class="container section">
        <h2 class="section-title">{{ globalData?.services.title }}</h2>
        <p>{{ globalData?.services.content }}</p>
        <button class="btn lebtn">
          <span>{{ globalData?.services.txtBtn }}</span>
        </button>
      </div>
    </div>
    <client-only>
      <Swiper
        v-if="isSwiper"
        :modules="[Navigation, Pagination]"
        const
        :slides-per-view="2"
        :space-between="0"
        :navigation="true"
        :pagination="true"
        :loop="true"
        :autoplay="{ delay: 2000, disableOnInteraction: true }"
        id="caro"
      >
        <SwiperSlide
          v-for="(service, index) in globalData?.services.service"
          :key="index"
        >
          <Service
            :titre="service.titre"
            :image="service.image"
            :icone="service.icone"
          />
        </SwiperSlide>
      </Swiper>
    </client-only>
  </section>
</template>

<style scoped lang="scss">
$itemHeight: 380px !important;
#serviceintro {
  .section {
    padding: 2em 0;
    * {
      margin: 1em 0;
    }
  }
}
.section-title {
  color: white !important;
  border-bottom: 1px white solid !important;
}
p {
  color: white !important;
}
.lebtn {
  width: 350px !important;
  span {
    width: 330px !important;
    margin: 7px !important;
    height: 48px !important;
  }
}
.item {
  height: $itemHeight;
  display: flex;
  flex-direction: column;
  .service-content {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    background: rgba(255, 0, 0, 0.3882352941);
    width: 100%;
    justify-self: center;
    align-content: center;
    align-items: center;
    height: $itemHeight !important;
  }
}

.service-img {
  flex-grow: 1; // L'image prendra tout l'espace disponible
  object-fit: cover; // L'image couvrira tout l'espace tout en maintenant son ratio
  width: 100%;
  height: 100%;
}
.swiper {
  height: $itemHeight;
  max-height: $itemHeight;
  .swiper-slide {
    max-height: $itemHeight;
    height: $itemHeight;
  }
}

@media screen and (max-width: 1024px) {
  #services {
    .section {
    }
  }
  .section-title {
    font-size: 22px !important;
    line-height: 25px !important;
    text-align: center;
    padding: 1em;
  }
}
</style>
