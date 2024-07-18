<template>
  <header
    class="navbar is-light"
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
import { defineEmits } from "vue";
import { useGlobalData } from "~/composables/useGlobalData";
const { data: globalData } = useGlobalData();
const emit = defineEmits(["toggle-sidebar"]);
const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>
