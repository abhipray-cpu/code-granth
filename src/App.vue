<template>
  <div id="render">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
  <div id="redirect" class="w-screen h-screen flex flex-col items-center justify-center">
    <Vue3Lottie :animationData="BookJSON" :height="500" :width="500" />
    <h1 class="text-4xl tracking-wider text-white font-primary font-bold -mt-18">Code Granth</h1>
    <h3 class="text-xl tracking-wider text-white font-inter font-medium mt-2">
      The content is only available on a mobile device so please use a mobile device
    </h3>
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import BookJSON from './assets/lottie/book.json'
export default {
  components: {
    Vue3Lottie
  },
  data() {
    return {
      BookJSON
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 480px) {
  #render {
    display: block;
  }
  #redirect {
    display: none;
  }
}
@media only screen and (min-width: 481px) {
  #render {
    display: none;
  }
  #redirect {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #387eb8;
    width: 100vw;
    height: 100vh;
  }
  .neumorph {
    font-size: 32px;
    font-weight: bold;
    color: #f0f0f0;
    text-shadow:
      0px 4px 4px rgba(116, 166, 6, 0.2),
      0px 8px 12px rgba(168, 233, 5, 0.2);
  }
}
</style>
