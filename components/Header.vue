<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const globalData = inject("globalData");
const isSticky = ref(false);
const isSidebarOpen = ref(false);
const props = defineProps({
  activeSlideIndex: Number,
});
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
const handleScroll = () => {
  isSticky.value = window.scrollY > 0;
};
const smoothScroll = (targetId) => {
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="navbar is-light"
    :class="[{ sticky: isSticky }, `slide-active-${activeSlideIndex}`]"
    role="navigation"
    aria-label="main navigation"
  >
    <!-- la sidebar-->
    <div class="sidebar" :class="{ 'is-active': isSidebarOpen }">
      <!-- Contenu de la sidebar -->
      <ul>
        <li><a @click="smoothScroll('#avantages')">Accueil</a></li>
        <li><a @click="smoothScroll('#notreoffre')">Services</a></li>
        <li><a @click="smoothScroll('#services')">À propos</a></li>
        <li><a @click="smoothScroll('#devis')">Contact</a></li>
      </ul>
    </div>
    <div
      class="sidebar-overlay"
      v-if="isSidebarOpen"
      @click="toggleSidebar"
    ></div>

    <!-- le content de la navbar -->
    <div id="vangogh" class="columns is-mobile is-multiline">
      <div id="natalia" class="column is-half is-2-mobile m-0 p-0">
        <div class="navbar-brand">
          <a class="navbar-item" @click="toggleSidebar">
            <span class="material-icons">menu</span>
          </a>
        </div>
      </div>

      <div id="natavia" class="column is-10-mobile is-half">
        <div class="navbar-end is-mobile is-multiline">
          <a class="navbar-item is-4-mobile">
            <span class="material-icons">phone</span>
            {{ globalData?.navbar.numero }}
          </a>
          <a @click="smoothScroll('#devis')" class="navbar-item is-8-mobile">
            <span class="material-icons">email</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
// Vos styles existants...

.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #fff;
  transition: left 0.3s ease;
  z-index: 1001;

  &.is-active {
    left: 0;
  }

  ul {
    padding: 20px;
    list-style-type: none;

    li {
      margin-bottom: 10px;

      a {
        color: #333;
        text-decoration: none;
      }
    }
  }
}
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
header {
  background-color: #ffffff00;
  position: absolute;
  width: 100%;
  &.sticky {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    width: 100vw;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
  &.slide-active-1,
  &.slide-active-2,
  &.slide-active-3,
  &.slide-active-5,
  &.slide-active-7 {
    background-color: #fff !important;
    transition: all 0.3s ease;
    * {
      color: #e61d00 !important;
    }
  }
}
#vangogh {
  background-color: #ffffff00;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin: 0;
  .navbar-end {
    height: 100%;
  }
}
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
}
#natavia {
  margin: 0;
  padding: 0;
}
.navbar-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 145px;
  .navbar-item {
    color: white;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
      color: #ffffff;
      font-size: 3em;
      margin-right: 0.5em;
    }
  }
}
@media screen and (max-width: 1024px) {
  .navbar-brand {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
