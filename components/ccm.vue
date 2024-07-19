<script setup>
const globalData = inject("globalData");
</script>

<template>
  <div id="ccm" class="container">
    <h2>{{ globalData?.ccm.titre }}</h2>
    <div class="columns">
      <div
        class="column is-4"
        v-for="(etape, index) in globalData?.ccm.etapes"
        :key="index"
      >
        <NuxtImg
          :src="etape.image.webp"
          :alt="`Étape ${index + 1} de BigFive360`"
          format="webp"
          :fallback="etape.image.png"
        />
        <h4>{{ etape.titre }}</h4>
        <p v-if="etape.description">{{ etape.description }}</p>
        <button v-if="etape.bouton">{{ etape.bouton }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
