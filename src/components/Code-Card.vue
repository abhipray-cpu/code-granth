<template>
  <div class="h-auto">
    <div class="w-[95vw] bg-gray-800 rounded-lg mb-5 pb-2 pt-2 shadow">
      <div class="flex flex-row w-[90vw] ml-[2.5vw] gap-[2.5vw] mb-2">
        <img src="../assets/language/js.png" alt="Javascript" class="w-8 h-8 active mt-1" />
        <h2 class="font-inter font-normal text-xl text-gray-100 tracking-wide ml-3 mt-2">
          Javascript
        </h2>
      </div>
      <Vue3Prism :source="code_data['javascript']" id="javascript"></Vue3Prism>
    </div>
    <div class="w-[95vw] bg-gray-800 rounded-lg mb-5 pb-2 pt-2 shadow">
      <div class="flex flex-row w-[90vw] ml-[2.5vw] gap-[2.5vw] mb-2">
        <img src="../assets/language/ts.png" alt="Typescript" class="w-8 h-8 active mt-1" />
        <h2 class="font-inter font-normal text-xl text-gray-100 tracking-wide ml-3 mt-2">
          Typescript
        </h2>
      </div>

      <Vue3Prism :source="code_data['typescript']" id="typescript"></Vue3Prism>
    </div>
    <div class="w-[95vw] bg-gray-800 rounded-lg mb-5 pb-2 pt-2 shadow">
      <div class="flex flex-row w-[90vw] ml-[2.5vw] gap-[2.5vw] mb-2">
        <img src="../assets/language/py.png" alt="Python" class="w-8 h-8 active mt-1" />
        <h2 class="font-inter font-normal text-xl text-gray-100 tracking-wide ml-3 mt-2">Python</h2>
      </div>

      <Vue3Prism :source="code_data['python']" id="python"></Vue3Prism>
    </div>
    <div class="w-[95vw] bg-gray-800 rounded-lg mb-5 pb-2 pt-2 shadow">
      <div class="flex flex-row w-[90vw] ml-[2.5vw] gap-[2.5vw] mb-2">
        <img src="../assets/language/go.png" alt="Javascript" class="w-8 h-8 active mt-1" />
        <h2 class="font-inter font-normal text-xl text-gray-100 tracking-wide ml-3 mt-2">Golang</h2>
      </div>

      <Vue3Prism :source="code_data['golang']" id="golang"></Vue3Prism>
    </div>
    <div class="w-[95vw] bg-gray-800 rounded-lg mb-5 pb-2 pt-2 shadow">
      <div class="flex flex-row w-[90vw] ml-[2.5vw] gap-[2.5vw] mb-2">
        <img src="../assets/language/dart.png" alt="Dart" class="w-8 h-8 active mt-1" />
        <h2 class="font-inter font-normal text-xl text-gray-100 tracking-wide ml-3 mt-2">Dart</h2>
      </div>

      <Vue3Prism :source="code_data['dart']" id="dart"></Vue3Prism>
    </div>
  </div>
</template>

<script>
export default {
  props: ['codes'],
  data() {
    return {
      language: 'Javascript',
      code_data: {}
    }
  },
  computed: {
    Language() {
      return this.language
    },
    Codes() {
      return this.code_data
    }
  },
  methods: {
    setLanguage(value) {
      this.language = value
    }
  },
  async mounted() {
    this.code_data = await this.codes
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
