<template>
  <section id="avantages">
    <div class="container">
      <h2>{{ globalData?.avantages.headline }}</h2>
      <div id="listeavantages">
        <ul>
          <li
            v-for="(item, index) in globalData?.avantages.listes"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
const globalData = inject("globalData");
</script>
