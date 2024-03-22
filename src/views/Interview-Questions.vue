<template>
  <div class="w-screen min-h-screen h-auto pb-10">
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
        v-if="language === 'Javascript'"
        class="w-10 h-10"
      />
      <img
        src="../assets/language/ts.png"
        :alt="language"
        v-if="language === 'Typescript'"
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
    <div class="flex w-screen flex-col mt-7">
      <div class="w-screen mb-5">
        <h2
          class="ml-3 text-3xl font-primary font-medium text-gray-800 tracking-wide text-center mb-4"
        >
          Basic
        </h2>
        <div
          v-for="(el, index) in Object.entries(Questions['basic'])"
          :key="index"
          class="mb-3 pl-1 pr-2"
        >
          <h2 class="ml-2 mb-2 text-lg font-primary font-medium text-gray-800 tracking-wide">
            {{ el[0] }}
          </h2>
          <h2 class="ml-2 mb-2 text-lg font-primary font-medium text-blue-500 tracking-normal">
            {{ el[1] }}
          </h2>
        </div>
      </div>
      <div class="w-screen mb-5">
        <h2
          class="ml-3 text-3xl font-primary font-medium text-gray-800 tracking-wide mb-4 text-center"
        >
          Intermediate
        </h2>
        <div
          v-for="(el, index) in Object.entries(Questions['intermediate'])"
          :key="index"
          class="mb-3 pl-1 pr-2"
        >
          <h2 class="ml-2 mb-2 text-lg font-primary font-medium text-gray-800 tracking-wide">
            {{ el[0] }}
          </h2>
          <h2 class="ml-2 mb-2 text-lg font-primary font-medium text-blue-500 tracking-normal">
            {{ el[1] }}
          </h2>
        </div>
      </div>
      <div class="w-screen mb-5">
        <h2
          class="ml-3 text-3xl font-primary font-medium text-gray-800 tracking-wide text-center mb-4"
        >
          Advanced
        </h2>
        <div
          v-for="(el, index) in Object.entries(Questions['advance'])"
          :key="index"
          class="mb-3 pl-1 pr-2"
        >
          <h2 class="ml-2 mb-2 text-lg font-primary font-medium text-gray-800 tracking-wide">
            {{ el[0] }}
          </h2>
          <h2 class="ml-2 mb-2 text-lg font-primary font-medium text-blue-500 tracking-normal">
            {{ el[1] }}
          </h2>
        </div>
      </div>
    </div>
    <modal-comp :type="Type" v-if="Modal"></modal-comp>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import ModalComp from '../components/Modal-Comp.vue'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  components: { ModalComp },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const language = ref('')
    const questions = ref({ basic: {}, intermediate: {}, advance: {} })
    const type = ref('')
    const modal = ref(false)
    const Type = computed(() => {
      return type.value
    })
    const Modal = computed(() => {
      return modal.value
    })
    const Questions = computed(() => {
      if (!questions.value) {
        return []
      }

      return questions.value
    })
    const goBack = () => {
      router.push({ name: 'home' })
    }
    const store = useStore()
    onMounted(async () => {
      language.value = route.params.language
      type.value = 'loader'
      modal.value = true
      const data = await store.dispatch('language', { value: language.value })
      modal.value = false
      if (data.error) {
        type.value = 'error'
        modal.value = true
        setTimeout(() => {
          modal.value = false
        }, 1500)
      }
      questions.value = data.result.interview_questions
    })
    return {
      Type,
      Modal,
      Questions,
      goBack,
      questions,
      language
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
