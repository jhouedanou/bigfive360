<script setup>
const globalData = inject("globalData");
</script>

<template>
  <section id="devis" class="section is-fullheight secondary-bg">
    <div id="demo" class="container">
      <div class="columns">
        <div class="column is-half">
          <ContactForm />
        </div>
        <div class="column">
          <h3>{{ globalData?.demo.introForm }}</h3>
          <h4>{{ globalData?.demo.text }}</h4>
          <h1 class="title is-1">{{ globalData?.demo.text }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
#nanada {
  background: white;
  width: 100vw;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h4 {
    line-height: 39px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    font-size: 33px !important;
    margin-top: 19px !important;
    margin-bottom: 20px !important;
    color: black;
  }
}
</style>
