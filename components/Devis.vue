<script setup>
import { ref, onMounted } from "vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";
const globalData = inject("globalData");

const videoPlayer = ref(null);

onMounted(() => {
  const player = videojs(videoPlayer.value, {
    techOrder: ["youtube"],
    autoplay: true,
    muted: true,
    loop: true,
    controls: false,
    sources: [
      {
        type: "video/youtube",
        src: "https://www.youtube.com/watch?v=jGcPTA5ze90",
      },
    ],
  });
});
</script>

<template>
  <section id="devis" class="section is-fullheight secondary-bg">
    <div class="video-background">
      <video
        ref="videoPlayer"
        class="video-js vjs-default-skin"
        preload="auto"
      ></video>
    </div>
    <div id="demopbdfs" class="container">
      <div class="columns">
        <div class="column is-half">
          <ContactForm />
        </div>
        <div class="column">
          <h1>{{ globalData?.demo.introForm }}</h1>
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
#devis {
  position: relative;
  overflow: hidden;
}
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  .video-js {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
#demopbdfs {
  h1 {
    color: #ffffff;
    font-family: Work Sans, sans-serif !important;
    font-weight: 700 !important;
    font-size: 53px;
    line-height: 59px;
    padding-bottom: 13px;
    margin-bottom: 23px !important;
    border-bottom: 1px #e61d00 solid;
    display: inline-block;
    position: relative;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.45);
  }
}
@media screen and (max-width: 1024px) {
  h1 {
    font-size: 25px !important;
    line-height: 1 !important;
  }
}
</style>
