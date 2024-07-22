<script setup>
const globalData = inject("globalData");
</script>

<template>
  <div id="demo" class="container">
    <h1>{{ globalData?.demo.text }}</h1>
    <button class="lebtn">{{ globalData?.demo.btn }}</button>
    <div id="demo" class="container">
      <div id="form">
        <h3>{{ globalData?.demo.introForm }}</h3>
        <ContactForm />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
