<template>
  <div id="services" class="container">
    <h2>{{ globalData?.services.title }}</h2>
    <p>{{ globalData?.services.content }}</p>
    <button>{{ globalData?.services.txtBtn }}</button>
  </div>
</template>

<script setup>
const globalData = inject("globalData");
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
