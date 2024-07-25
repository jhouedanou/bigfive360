<script setup>
import { ref } from "vue";

const props = defineProps(["description", "type", "action", "icone", "lien", "preview"]);
const isPopupOpen = ref(false);

const openPopup = () => {
  isPopupOpen.value = true;
};

const closePopup = () => {
  isPopupOpen.value = false;
};
</script>
<template>
  <div class="container">
    <div class="visite-item" @click="openPopup">
      <div class="columns is-flex">
        <div class="column visite-visuel is-three-fifths is-flex-grow-1">
          <NuxtImg :src="preview" format="webp" quality="80" />
        </div>
        <div class="column visite-detail is-flex-grow-1">
          <NuxtImg class="icone" :src="icone" format="webp" quality="80" />
          <h3>{{ type }}</h3>
          <p>{{ description }}</p>
          <button class="lebtn btnstyle">
            <span>{{ action }}</span>
          </button>
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

<style scoped lang="scss">
$itemHeight: 380px !important;

.swiper-pagination-bullet {
  background-color: #e61d00 !important;
}
.visite-item {
  background-color: #1d1d1d;
  margin: 80px auto 0;
  max-width: 1150px;
  max-height: 595px;
  .visite-visuel {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .visite-detail {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 4em;
    .icone {
      position: absolute;
      top: -45px;
      height: 124px;
      width: auto;
    }
    h3 {
      font-size: 33px !important;
      font-weight: 900 !important;
      color: white !important;
    }
    p {
      color: #fff !important;
      font-size: 25px !important;
      font-family: Work Sans, sans-serif !important;
      line-height: 35px;
      margin: 11px 0 28px !important;
      font-weight: 300 !important;
      padding: 10px;
    }
  }
}
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

.comparison-slider {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .before-image {
    clip-path: inset(0 50% 0 0);
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: ew-resize;
  }
}
comparison-slider {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .before-image {
    clip-path: inset(0 50% 0 0);
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: ew-resize;
  }
}
</style>
