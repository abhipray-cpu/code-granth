<template>
  <div class="w-screen min-h-screen h-auto">
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="iconify iconify--emojione-monotone w-10 h-10 ml-3 mt-5"
      preserveAspectRatio="xMidYMid meet"
      fill="#387EBB"
      stroke="#387EBB"
      @click="goBack"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M32 2C15.432 2 2 15.432 2 32c0 16.568 13.432 30 30 30s30-13.432 30-30C62 15.432 48.568 2 32 2zm17 35.428H30.307V48L15 32l15.307-16v11.143H49v10.285z"
          fill="#387EBB"
        ></path>
      </g>
    </svg>
    <div class="flex flex-col items-center -mt-10">
      <h2 class="font-primary text-2xl font-normal text-gray-700 tracking-wide mt-2">Algorithms</h2>
    </div>
    <div class="mt-5 flex flex-col items-center gap-4">
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
      >
        <h2 class="text-white text-5xl font-inter font-medium tracking-wider">Array</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }
    return {
      goBack
    }
  }
}
</script>

<style scoped>
.shadow {
  box-shadow:
    5px 5px 15px #2f2f2f,
    -5px -5px 15px #ffffff;
}
</style>
