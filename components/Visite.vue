<template>
  <div class="container">
    <div class="visite-item" @click="openPopup">
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
    <Teleport to="body">
      <div v-if="isPopupOpen" class="popup-overlay" @click.self="closePopup">
        <div class="popup-content">
          <button class="close-button" @click="closePopup">&times;</button>
          <iframe :src="lien" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps([
  "description",
  "type",
  "action",
  "icone",
  "lien",
  "preview",
]);
const isPopupOpen = ref(false);

const openPopup = () => {
  isPopupOpen.value = true;
};

const closePopup = () => {
  isPopupOpen.value = false;
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  position: relative;
  width: 90%;
  max-width: 800px;
  height: 80vh;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

iframe {
  width: 100%;
  height: 100%;
}
</style>
