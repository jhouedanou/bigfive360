<template>
  <div id="services">
    <div class="container">
      <h2>{{ globalData?.services.title }}</h2>
      <p>{{ globalData?.services.content }}</p>
      <button>{{ globalData?.services.txtBtn }}</button>
    </div>
    <div class="carouselwrapper">
      <Service
        v-for="(service, index) in globalData?.services.service"
        :key="index"
        :titre="service.titre"
        :image="service.image"
        :icone="service.icone"
      />
    </div>
  </div>
</template>

<script setup>
const globalData = inject("globalData");
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
