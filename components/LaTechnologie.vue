<template>
  <section id="technologie">
    <div id="techcontainer" class="secondary-bg">
      <div class="container section">
        <h2 class="section-title">{{ globalData?.technologie.title }}</h2>
        <p>{{ globalData?.technologie.content }}</p>
        <p>{{ globalData?.technologie.content2 }}</p>
        <NuxtImg
          :src="globalData?.technologie.logo"
          format="webp"
          quality="80"
        />
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
  min-height: 500px;
  display: flex;
  height: 100vh;
  .section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    img {
      width: 290px;
    }
  }
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
  min-height: 500px;
  line-height: 1.25;
}
@media screen and (max-width: 1024px) {
  h2 {
    font-size: 40px !important;
    line-height: 45px !important;
    text-align: center;
  }
  #techcontainer {
    p {
      font-size: 20px !important;
      line-height: 25px !important;
      text-align: center;
    }
    img {
      max-width: 150px !important;
      margin: 0 auto;
    }
  }
  section {
    li {
      font-size: 20px !important;
      line-height: 25px !important;
      text-align: center;
    }
  }
}
</style>
