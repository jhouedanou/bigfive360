<template>
  <div id="notreoffre" class="container">
    <h2>{{ globalData?.notreOffre }}</h2>
    <Visite
      v-for="(visite, index) in globalData?.visites"
      :key="index"
      :description="visite.description"
      :type="visite.type"
      :action="visite.action"
      :icone="visite.icone"
      :lien="visite.lien"
      :preview="visite.preview"
    />
  </div>
</template>

<script setup>
const globalData = inject("globalData");
</script>
<style scoped>
/* Styles spécifiques au composant */
</style>
