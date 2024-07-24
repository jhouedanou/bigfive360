<template>
  <div id="technologie">
    <div id="techcontainer" class="secondary-bg">
      <div class="container">
        <h2>{{ globalData?.technologie.title }}</h2>
        <p>{{ globalData?.technologie.content }}</p>
        <p>{{ globalData?.technologie.content2 }}</p>
        <NuxtImg :src="globalData?.technologie.logo" format="webp" quality="80" />
      </div>
    </div>

    <div id="serviceintro" class="primary-bg">
      <div class="container">
        <h2>{{ globalData?.services.title }}</h2>
        <p>{{ globalData?.services.content }}</p>
        <button>{{ globalData?.services.txtBtn }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const globalData = inject("globalData");
</script>

<style scoped lang="scss" Ò>
/* Styles spécifiques au composant */
#technologie {
  margin: 0;
  padding: 0;
}
#techcontainer {
  height: 50vh;
  min-height: 500px;
  display: flex;
}
#serviceintro {
  height: 50vh;
  min-height: 500px;
}
</style>
