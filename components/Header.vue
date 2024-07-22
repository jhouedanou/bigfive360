<template>
  <header
    class="navbar is-light"
    :class="{ sticky: isSticky }"
    role="navigation"
    aria-label="main navigation"
  >
    <div id="vangogh" class="columns">
      <div class="column is-half m-0 p-0">
        <div class="navbar-brand">
          <a class="navbar-item" @click="toggleSidebar">
            <span class="material-icons">menu</span>
          </a>
        </div>
      </div>

      <div class="column is-half">
        <div class="navbar-end">
          <a class="navbar-item">
            <span class="material-icons">phone</span>
            {{ globalData?.navbar.numero }}
          </a>
          <a class="navbar-item">
            <span class="material-icons">email</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { defineEmits } from "vue";

const globalData = inject("globalData");
const emit = defineEmits(["toggle-sidebar"]);
const isSticky = ref(false);

const toggleSidebar = () => {
  emit("toggle-sidebar");
};

const handleScroll = () => {
  isSticky.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped lang="scss">
header {
  background-color: #ffffff00;
  position: absolute;
  width: 100%;
  &.sticky {
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    max-width: 80vw;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
}
#vangogh {
  background-color: #ffffff00;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
}
</style>
