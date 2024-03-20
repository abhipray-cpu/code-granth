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
      class="iconify iconify--emojione-monotone w-10 h-10 ml-3 mt-3"
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

    <div class="flex flex-col items-center -mt-8">
      <img
        src="../assets/language/js.png"
        :alt="language"
        v-if="language === 'JavaScript'"
        class="w-10 h-10"
      />
      <img
        src="../assets/language/ts.png"
        :alt="language"
        v-if="language === 'TypeScript'"
        class="w-10 h-10"
      />
      <img
        src="../assets/language/py.png"
        :alt="language"
        v-if="language === 'Python'"
        class="w-10 h-10"
      />
      <img
        src="../assets/language/go.png"
        :alt="language"
        v-if="language === 'Go'"
        class="w-10 h-10"
      />
      <img
        src="../assets/language/dart.png"
        :alt="language"
        v-if="language === 'Dart'"
        class="w-10 h-10"
      />
      <h2 class="font-primary text-xl font-normal text-gray-700 tracking-wide mt-2">
        {{ language }}
      </h2>
    </div>

    <div class="w-[94vw] ml-[3vw] mr-[3vw] mt-5">
      <h2 class="font-primary text-xl font-normal text-gray-700 ml-1">Description</h2>
      <span class="font-inter text-md text-gray-600 mt-1 w-[92vw] ml-[1vw]">
        {{ Paragraph.paragraph }}
        <h4 class="text-blue-400 font-inter font-medium tracking-normal text-lg" @click="toggle">
          {{ Paragraph.state === 0 ? 'show more' : 'show less' }}
        </h4>
      </span>
    </div>

    <div class="w-screen flex flex-col items-center mt-6">
      <feature-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></feature-card>
      <feature-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></feature-card>
      <feature-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></feature-card>
      <feature-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></feature-card>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import FeatureCard from '../components/Feature-Card.vue'
export default {
  components: { FeatureCard },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const language = ref('')
    const expand = ref(0)
    const para =
      ref(`This will contain a long paragraph about the language.This will contain a long paragraph
        about the language.This will contain a long paragraph about the language.This will contain a
        long paragraph about the language.This will contain a long paragraph about the language.This
        will contain a long paragraph about the language.This will contain a long paragraph about
        the language.This will contain a long paragraph about the language.This will contain a long
        paragraph about the language.This will contain a long paragraph about the language.This will
        contain a long paragraph about the language.This will contain a long paragraph about the
        language.This will contain a long paragraph about the language.This will contain a long
        paragraph about the language.This will contain a long paragraph about the language.This will
        contain a long paragraph about the language.This will contain a long paragraph about the
        language.This will contain a long paragraph about the language.This will contain a long
        paragraph about the language.This will contain a long paragraph about the language.This will
        contain a long paragraph about the language.This will contain a long paragraph about the
        language.This will contain a long paragraph about the language.This will contain a long
        paragraph about the language.This will contain a long paragraph about the language.This will
        contain a long paragraph about the language.This will contain a long paragraph about the
        language.This will contain a long paragraph about the language.This will contain a long
        paragraph about the language.This will contain a long paragraph about the language.This will
        contain a long paragraph about the language.This will contain a long paragraph about the
        language.This will contain a long paragraph about the language.This will contain a long
        paragraph about the language.This will contain a long paragraph about the language.This will
        contain a long paragraph about the language.This will contain a long paragraph about the
        language.This will contain a long paragraph about the language.This will contain a long
        paragraph about the language.This will contain a long paragraph about the language.This will
        contain a long paragraph about the language.This will contain a long paragraph about the
        language.This will contain a long paragraph about the language.This will contain a long
        paragraph about the language.This will contain a long paragraph about the language.This will
        contain a long paragraph about the language.This will contain a long paragraph about the
        language.`)
    const goBack = () => {
      router.push({ name: 'home' })
    }
    onMounted(() => {
      language.value = route.params.language
    })
    const toggle = () => {
      expand.value = expand.value === 0 ? 1 : 0
    }
    const Paragraph = computed(() => {
      if (expand.value === 0) {
        return { state: expand.value, paragraph: para.value.slice(0, 500) }
      } else {
        return { state: expand.value, paragraph: para.value }
      }
    })
    return {
      goBack,
      language,
      Paragraph,
      toggle
    }
  }
}
</script>

<style scoped>
.icon-shadow {
  box-shadow:
    5px 5px 15px #bfbfbf,
    -5px -5px 15px #ffffff;
}
</style>
