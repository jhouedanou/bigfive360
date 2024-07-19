<template>
  <div id="app">
    <Header @toggle-sidebar="toggleSidebar" />
    <Hero />
    <Avantages />
    <NotreOffre />
    <LaTechnologie />
    <NosServices />
    <Options />
    <Ccm />
    <Demo />
  </div>
</template>

<script setup>
import { ref } from "vue";
const sidebarOpen = ref(false);
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

import { useGlobalData } from "~/composables/useGlobalData";
const { data: globalData } = useGlobalData();
provide("globalData", globalData);
</script>
