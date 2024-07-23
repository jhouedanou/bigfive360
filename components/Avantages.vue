<template>
  <section id="avantages" class="section is-fullheight secondary-bg">
    <div class="container">
      <h2 class="section-title">{{ globalData?.avantages.headline }}</h2>
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
<style lang="scss">
#avantages {
  background: #e5e5e5;
}
</style>
