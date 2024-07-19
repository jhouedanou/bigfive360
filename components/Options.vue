<script setup>
const globalData = inject("globalData");
</script>

<template>
  <div id="options" class="container">
    <h3>{{ globalData?.options.titre }}</h3>
    <div id="listedeservices">
      <h4>Options</h4>
      <ul>
        <li
          v-for="(services_principal, index) in globalData?.options.services_principaux"
          :key="index"
        >
          {{ services_principal }}
        </li>
      </ul>
    </div>
    <div id="offrescomplementaires">
      <h4>Offres complémentaires</h4>
      <ul>
        <li v-for="(sous_option, index) in globalData?.options.sous_options" :key="index">
          <h5>{{ sous_option.titre }}</h5>
          <p>{{ sous_option.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
