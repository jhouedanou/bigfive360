<template>
  <div id="technologie" class="container">
    <h2>{{ globalData?.technologie.title }}</h2>
    <p>{{ globalData?.technologie.content }}</p>
    <img :src="globalData?.technologie.logo" />
  </div>
</template>

<script setup>
const globalData = inject("globalData");
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
