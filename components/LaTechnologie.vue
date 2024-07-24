<template>
  <section id="technologie">
    <div id="techcontainer" class="secondary-bg">
      <div class="container section">
        <h2 class="section-title">{{ globalData?.technologie.title }}</h2>
        <p>{{ globalData?.technologie.content }}</p>
        <p>{{ globalData?.technologie.content2 }}</p>
        <NuxtImg :src="globalData?.technologie.logo" format="webp" quality="80" />
      </div>
    </div>

    <div id="serviceintro" class="primary-bg">
      <div class="container section">
        <h2 class="section-title">{{ globalData?.services.title }}</h2>
        <p>{{ globalData?.services.content }}</p>
        <button>{{ globalData?.services.txtBtn }}</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const globalData = inject("globalData");
</script>

<style scoped lang="scss">
/* Styles spécifiques au composant */
#technologie {
  margin: 0;
  padding: 0;
}
#techcontainer {
  height: 60vh;
  min-height: 500px;
  display: flex;
  p {
    color: black;
    line-height: 1.4;
    font-family: "Work Sans", sans-serif !important;
    font-weight: 700 !important;
    font-size: 35px !important;
    display: inline-block;
    position: relative;
    margin-bottom: 1.7em;
  }
}
#serviceintro {
  height: 40vh;
  min-height: 500px;
  line-height: 1.25;
}
</style>
