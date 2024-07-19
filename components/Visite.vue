<template>
  <div class="container">
    <div class="visite-item" @click="openLightbox">
      <div class="columns">
        <div class="column is-three-fifths">
          <NuxtImg :src="preview" format="webp" quality="80" />
        </div>
        <div class="column is-one-fifth">
          <NuxtImg :src="icone" format="webp" quality="80" />
          <h3>{{ type }}</h3>
          <p>{{ description }}</p>
          <button>{{ action }}</button>
        </div>
      </div>
    </div>
    <div v-if="isLightboxOpen" class="lightbox" @click.self="closeLightbox">
      <div class="lightbox-content">
        <iframe :src="lien" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["description", "type", "action", "icone", "lien", "preview"]);
const isLightboxOpen = ref(false);

const openLightbox = () => {
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
