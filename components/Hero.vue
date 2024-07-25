<script setup>
const globalData = inject("globalData");
</script>
<template>
  <section class="hero is-link is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <img :src="globalData?.hero.logo" class="logo" />
        <h1 class="title">{{ globalData?.hero.subtitle }}</h1>
        <button class="lebtn">
          <span>{{ globalData?.hero.txtBtn }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$primary-color: #e61d00;

.hero {
  background: url("../images/background-hero.webp") $primary-color no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  h1 {
    color: #fff;
    white-space: pre-wrap;
    font-family: Work Sans;
    font-weight: 700;
    font-size: 53px;
    line-height: 58px;
    text-align: left;
    color: #fff;
    margin-top: 17px;
  }
}
.hero-body {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
