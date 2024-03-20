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
      @click="back"
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
        {{ feature.toUpperCase() }}
      </h2>
    </div>

    <div class="w-screen flex flex-col items-center mt-6">
      <snippet-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></snippet-card>
      <snippet-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></snippet-card>
      <snippet-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></snippet-card>
      <snippet-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></snippet-card>
      <snippet-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></snippet-card>
      <snippet-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></snippet-card>
      <snippet-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></snippet-card>
      <snippet-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></snippet-card>
      <snippet-card
        title="loop"
        code="numbers = [1, 2, 3, 4, 5]
        for num in numbers:
          print(num)"
        language="Python"
      ></snippet-card>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import SnippetCard from '../components/Snippet-Card.vue'
export default {
  components: { SnippetCard },
  setup() {
    const language = ref('')

    const feature = ref('')
    const route = useRoute()
    const router = useRouter()
    const back = () => {
      router.go(-1)
    }
    onMounted(() => {
      language.value = route.params.language
      feature.value = route.params.feature
    })
    return {
      language,
      feature,
      back
    }
  }
}
</script>
