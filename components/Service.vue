<template>
  <div class="item">
    <nuxt-img :src="image" class="service-img" alt="" format="webp" quality="80" />
    <div class="service-content">
      <nuxt-img :src="icone" class="icone" alt="" format="webp" quality="80" />
      <h3>{{ titre }}</h3>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["titre", "image", "icone"]);
</script>
Ò
