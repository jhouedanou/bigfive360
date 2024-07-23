<template>
  <section class="hero is-link is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ globalData?.hero.subtitle }}</h1>
        <button class="lebtn">
          <span>{{ globalData?.hero.txtBtn }}</span>
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
const globalData = inject("globalData");
</script>
<style scoped lang="scss">
$primary-color: #e61d00;

.hero {
  background: url("../images/hero.webp") no-repeat center center;
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
.hero {
  background: $primary-color !important;
}
.hero-body {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
