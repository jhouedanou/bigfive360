<template>
  <div id="app">
    <Header @toggle-sidebar="toggleSidebar" />
    <Hero />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Header from "./components/Header.vue";

import Sidebar from "./components/Sidebar.vue";

const sidebarOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>
