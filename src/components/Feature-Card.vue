<template>
  <div class="w-[95vw] bg-blue-500 rounded-lg mb-5 pb-2 shadow" @click="redirect">
    <h2 class="mt-3 ml-3 font-inter text-white text-xl tracking-wider font-medium">
      {{ title.toUpperCase() }}
    </h2>
    <div class="mt-4 w-[91vw] ml-[2vw] bg-gray-800 rounded-lg pt-2 pb-2">
      <Vue3Prism :source="code"></Vue3Prism>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'code', 'language'],
  methods: {
    redirect() {
      this.$router.push({
        name: 'feature',
        params: { language: this.language, feature: this.title }
      })
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
