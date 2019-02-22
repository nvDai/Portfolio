<template>
  <section class="home-container">
    <img v-if="!isMobile" class="background-image" :src="desktopBackgroundImage" alt="Cover">
    <img v-if="isMobile" class="background-image" :src="mobileBackgroundImage" alt="Cover">
    <div class="overlay"></div>
    <vue-particles
      color="#ffffff"
      :particleOpacity="1"
      :particlesNumber="40"
      shapeType="circle"
      :particleSize="5"
      linesColor="#ffffff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.7"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particle-layer"
    >
    </vue-particles>
    <introduction class="introduction-layer"/>
  </section>
</template>

<script>
  import Introduction from '../components/home/Introduction'

  export default {
    name: 'home',
    components: {
      Introduction,
    },
    data() {
      return {
        desktopBackgroundImage: require('../assets/images/desktop_cover.jpg'),
        mobileBackgroundImage: require('../assets/images/mobile_cover.jpg'),
        text: 'This is home page',
        isMobile: false
      }
    },
    created() {
      if (window.innerWidth <= 1024) {
        this.isMobile = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  .container {
    overflow: hidden;
  }

  .home-container {
    width: 100vw;
    height: 100vh;
    position: relative;

    .background-image {
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1000;
    }

    .overlay {
      background-color: rgba(0, 0, 0, 0.5);
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: 1;
    }

    .particle-layer {
      position: absolute;
      left: 0;
      right: 0;
      height: 100vh;
      z-index: 1
    }

    .introduction-layer {
      position: absolute;
      z-index: 10;
      width: 50%;
      margin: 0 auto;
      top: 220px;
      left: 0;
      right: 0;
    }
  }

  .fade-enter-active {
    transition: all 3s ease;
  }
</style>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  @media only screen and (max-device-width: 768px) {
    .home-container {
      height: 70vh;

      .background-image {
        height: 100%;
        background: center / cover no-repeat;
      }

      .overlay {
        height: 70vh;
      }

      .particle-layer {
        height: 100vh;
        z-index: -1;
      }

      .introduction-layer {
        width: 100%;
        margin: 0 auto;
        top: 20vh;
        left: 0;
        right: 0;
      }
    }
  }
</style>
