<template>
  <section class="hero is-link is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <p class="title">{{ globalData?.hero.subtitle }}</p>
        <button class="lebtn">{{ globalData?.hero.txtBtn }}</button>
      </div>
    </div>
  </section>
</template>
<script setup>
const globalData = inject("globalData");
</script>
