<template>
  <div class="item" :style="{ backgroundImage: `url(${image})` }">
    <div class="service-content">
      <nuxt-img :src="icone" class="icone" alt="" format="webp" quality="80" />
      <h3>{{ titre }}</h3>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["titre", "image", "icone"]);
</script>
<style scoped lang="scss">
$itemHeight: 380px !important;

.swiper-slide {
  margin: 0 !important;
  padding: 0 !important;
}
.item {
  position: relative;
  height: $itemHeight;
  max-height: $itemHeight;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  &:hover {
    .service-content {
      background-color: #ff000000;

      -webkit-transition: all 0.4s ease-in-out 0.2s;
      -moz-transition: all 0.4s ease-in-out 0.2s;
      -o-transition: all 0.4s ease-in-out 0.2s;
      -ms-transition: all 0.4s ease-in-out 0.2s;
      transition: all 0.4s ease-in-out 0.2s;
    }
    img {
      display: none;
      -webkit-transition: all 0.4s ease-in-out 0.2s;
      -moz-transition: all 0.4s ease-in-out 0.2s;
      -o-transition: all 0.4s ease-in-out 0.2s;
      -ms-transition: all 0.4s ease-in-out 0.2s;
      transition: all 0.4s ease-in-out 0.2s;
    }
    h3 {
      display: block !important;
      -webkit-transition: all 0.4s ease-in-out 0.2s;
      -moz-transition: all 0.4s ease-in-out 0.2s;
      -o-transition: all 0.4s ease-in-out 0.2s;
      -ms-transition: all 0.4s ease-in-out 0.2s;
      transition: all 0.4s ease-in-out 0.2s;
    }
  }
  .service-content {
    position: absolute;

    -webkit-transition: all 0.4s ease-in-out 0.2s;
    -moz-transition: all 0.4s ease-in-out 0.2s;
    -o-transition: all 0.4s ease-in-out 0.2s;
    -ms-transition: all 0.4s ease-in-out 0.2s;
    transition: all 0.4s ease-in-out 0.2s;

    top: 0;
    display: flex;
    flex-direction: column;
    background: #ff000063;
    height: $itemHeight;
    max-height: $itemHeight;
    flex-wrap: wrap;
    width: inherit;
    justify-content: center;
    align-content: center;
    align-items: center;
    img {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      height: 54px;
      width: fit-content;
      -webkit-transition: all 0.4s ease-in-out 0.2s;
      -moz-transition: all 0.4s ease-in-out 0.2s;
      -o-transition: all 0.4s ease-in-out 0.2s;
      -ms-transition: all 0.4s ease-in-out 0.2s;
      transition: all 0.4s ease-in-out 0.2s;
    }
    h3 {
      display: none;
      transition: all 0.4s ease-in-out 0.2s;
      display: none;
      color: #fff;
      text-align: center;
      font-size: 31px !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      font-family: Work Sans, sans-serif;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.44);
      position: absolute;
      align-items: center;
      justify-content: center;
      top: 0;
      z-index: 0;
      bottom: 0;
      transition: all 0.4s ease-in-out 0.2s;
      margin: auto;
      max-height: 31px;
    }
  }
}
</style>
