<template>
  <div class="w-screen min-h-screen h-auto pt-0 mt-0 flex flex-col items-center">
    <div class="w-screen flex flex-row justify-between bg-blue-400 pt-2 shadow mb-10">
      <div class="ml-4">
        <h3 class="text-lg font-primary font-normal text-gray-200 mb-0">Hello</h3>
        <h4 class="text-lg font-primary font-normal text-gray-200 mt-0">Abhipray Dumka</h4>
      </div>
      <img src="../assets/logo.png" alt="Code Granth" class="w-12 h-12 mr-4" />
    </div>

    <carousel-comp></carousel-comp>
    <h2
      class="mt-8 ml-5 text-2xl text-gray-600 font-primary font-medium tracking-wide self-start mb-4"
    >
      Languages
    </h2>
    <div class="flex flex-row overflow-x-auto bar pl-3 pr-3 w-screen gap-4">
      <div class="flex flex-col items-center flex-shrink-0" @click="langRedirect('Javascript')">
        <img src="../assets/language/js.png" alt="JS" class="h-30 w-30 rounded-2xl image-shadow" />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">JavaScript</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0" @click="langRedirect('Typescript')">
        <img src="../assets/language/ts.png" alt="TS" class="h-30 w-30 rounded-2xl image-shadow" />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">TypeScript</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0" @click="langRedirect('Python')">
        <img src="../assets/language/py.png" alt="py" class="h-30 w-30 rounded-2xl image-shadow" />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Python</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0" @click="langRedirect('Golang')">
        <img src="../assets/language/go.png" alt="go" class="h-30 w-30 rounded-2xl image-shadow" />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Golang</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0" @click="langRedirect('Dart')">
        <img
          src="../assets/language/dart.png"
          alt="dart"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Dart</h4>
      </div>
    </div>
    <h2
      class="mt-8 ml-5 text-2xl text-gray-600 font-primary font-medium tracking-wide self-start mb-4"
      @click="redirect('ds')"
    >
      Data Structures
    </h2>
    <div class="flex flex-row overflow-x-auto bar pl-3 pr-3 w-screen gap-4">
      <div class="flex flex-col items-center flex-shrink-0" @click="dsRedirect('Array')">
        <img
          src="../assets/boxes/ds1.png"
          alt="Data Structure1"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Array</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0" @click="dsRedirect('Set')">
        <img
          src="../assets/boxes/ds2.png"
          alt="Data Structure2"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Sets</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0" @click="dsRedirect('String')">
        <img
          src="../assets/boxes/ds3.png"
          alt="Data Structure3"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">String</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0" @click="dsRedirect('Linked List')">
        <img
          src="../assets/boxes/ds4.png"
          alt="Data Structure4"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">List</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0" @click="dsRedirect('Stack')">
        <img
          src="../assets/boxes/ds5.png"
          alt="Data Structure 5"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Stack</h4>
      </div>
    </div>
    <h2
      class="mt-8 ml-5 text-2xl text-gray-600 font-primary font-medium tracking-wide self-start mb-4"
      @click="redirect('algo')"
    >
      Algorithms
    </h2>
    <div class="flex flex-row overflow-x-auto bar pl-3 pr-3 w-screen gap-4">
      <div
        class="flex flex-col items-center flex-shrink-0"
        @click="algoRedirect(`Dijkstra's Algorithm`)"
      >
        <img
          src="../assets/boxes/algo1.png"
          alt="Algorithm"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Dijkstra's</h4>
      </div>
      <div
        class="flex flex-col items-center flex-shrink-0"
        @click="algoRedirect('Minimum Window Substring')"
      >
        <img src="../assets/boxes/algo2.png" alt="TS" class="h-30 w-30 rounded-2xl image-shadow" />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">MWS</h4>
      </div>
      <div
        class="flex flex-col items-center flex-shrink-0"
        @click="algoRedirect('Longest Common Subsequence (LCS)')"
      >
        <img
          src="../assets/boxes/aalgo3.png"
          alt="Algorithm3"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">LCS</h4>
      </div>
      <div
        class="flex flex-col items-center flex-shrink-0"
        @click="algoRedirect(`Floyd's Cycle Detection Algorithm`)"
      >
        <img
          src="../assets/boxes/algo4.png"
          alt="Algorithm4"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Floyd's</h4>
      </div>
      <div
        class="flex flex-col items-center flex-shrink-0"
        @click="algoRedirect(`Tarjan's Algorithm`)"
      >
        <img
          src="../assets/boxes/algo5.png"
          alt="Algorithm5"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Tarjan's</h4>
      </div>
    </div>
    <h2
      class="mt-8 ml-5 text-2xl text-gray-600 font-primary font-medium tracking-wide self-start mb-4"
    >
      How to?
    </h2>
    <div class="flex flex-row overflow-x-auto bar pl-3 pr-3 w-screen gap-4">
      <div class="flex flex-col items-center flex-shrink-0">
        <img
          src="../assets/boxes/trick1.png"
          alt="trick1"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Trick1</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0">
        <img
          src="../assets/boxes/trick2.png"
          alt="trick2"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Trick2</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0">
        <img
          src="../assets/boxes/trick3.png"
          alt="trick3"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Trick3</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0">
        <img
          src="../assets/boxes/trick4.png"
          alt="trick4"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Trick4</h4>
      </div>
      <div class="flex flex-col items-center flex-shrink-0">
        <img
          src="../assets/boxes/trick5.png"
          alt="trick5"
          class="h-30 w-30 rounded-2xl image-shadow"
        />
        <h4 class="mt-2 text-lg font-inter font-normal text-gray-700">Trick5</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { isTokenValid } from '../utiils/authorization'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import CarouselComp from '../components/Carousel-Comp.vue'
export default {
  components: {
    CarouselComp
  },
  setup() {
    const router = useRouter()
    const langRedirect = (value) => {
      router.push({ name: 'language', params: { language: value } })
    }
    const redirect = (value) => {
      router.push({ name: value })
    }
    onMounted(() => {
      if (!isTokenValid()) {
        router.push({ name: 'login' })
      }
    })
    const dsRedirect = (val) => {
      router.push({ name: 'dsCode', params: { code: val } })
    }
    const algoRedirect = (val) => {
      router.push({ name: 'algoCode', params: { code: val } })
    }
    return {
      langRedirect,
      redirect,
      dsRedirect,
      algoRedirect
    }
  }
}
</script>

<style scoped>
.shadow {
  box-shadow:
    inset 2px 2px 4px rgba(51, 51, 51, 0.314),
    inset -2px -2px 4px rgb(51, 51, 51, 0.314);
}
.bar::-webkit-scrollbar {
  display: none;
}
.image-shadow {
  box-shadow:
    2px 2px 4px rgba(0, 0, 0, 0.9),
    -2px -2px 4px white;
}
</style>
