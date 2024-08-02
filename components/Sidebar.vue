<template>
  <aside class="menu">
    <p class="menu-label">Notre offre</p>
    <ul class="menu-list">
      <li><a>Visites Virtuelles 3D</a></li>
      <li><a>Visites Virtuelles HD</a></li>
      <li><a>Retouches</a></li>
    </ul>
    <p class="menu-label">À propos</p>
    <ul class="menu-list">
      <li><a>La technologie</a></li>
      <li><a>Comment ça se passe ?</a></li>
      <li><a>Tarifs</a></li>
    </ul>
    <p class="menu-label">Nous contacter</p>
    <ul class="menu-list">
      <li><a>07-47-625-978</a></li>
      <li><a>info@bigfivesolutions.com</a></li>
    </ul>
  </aside>
</template>

<script setup>
const smoothScroll = (targetId) => {
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
