<script setup>
const globalData = inject("globalData");
</script>

<template>
  <section id="options" class="section is-fullheight secondary-bg">
    <div class="container">
      <h3 class="section-title">{{ globalData?.options.titre }}</h3>
      <div id="listedeservices">
        <h4 class="section-title-alt">Options</h4>
        <ul>
          <li
            v-for="(services_principal, index) in globalData?.options
              .services_principaux"
            :key="index"
          >
            {{ services_principal }}
          </li>
        </ul>
      </div>
      <div id="offrescomplementaires">
        <h4 class="section-title-alt">Offres complémentaires</h4>
        <ul>
          <li
            v-for="(sous_option, index) in globalData?.options.sous_options"
            :key="index"
          >
            <h5>{{ sous_option.titre }}</h5>
            <p>{{ sous_option.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 1024px) {
  h4 {
    font-size: 25px !important;
    line-height: 30px !important;
    text-align: center;
  }
  li {
    font-size: 18px !important;
    line-height: 20px !important;
    text-align: center;
  }
}
</style>
