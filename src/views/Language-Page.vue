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

    <div class="w-[94vw] ml-[3vw] mr-[3vw] mt-5">
      <h2 class="font-primary text-2xl font-normal text-gray-700 ml-1">Description</h2>
      <span class="font-inter text-md text-gray-600 mt-2 w-[92vw] ml-[1vw]">
        {{ Paragraph.paragraph }}
        <h4 class="text-blue-400 font-inter font-medium tracking-normal text-lg" @click="toggle">
          {{ Paragraph.state === 0 ? 'show more' : 'show less' }}
        </h4>
      </span>
      <h2 class="font-primary text-2xl font-normal text-gray-700 ml-1 mt-5">Working</h2>
      <span class="font-inter text-md text-gray-600 mt-2 w-[92vw] ml-[1vw]">
        {{ Working.working }}
        <h4
          class="text-blue-400 font-inter font-medium tracking-normal text-lg"
          @click="toggleWorking"
        >
          {{ Working.state === 0 ? 'show more' : 'show less' }}
        </h4>
      </span>
    </div>

    <div class="w-screen flex flex-col items-center mt-7">
      <div
        class="w-[96vw] h-14 rounded-xl bg-blue-500 flex flex-col justify-center items-center pt-3 pb-3 mb-6"
        @click="interview"
      >
        <h2 class="text-3xl text-white font-primary font-medium tracking-wide">
          Interview Questions
        </h2>
      </div>
      <div
        class="w-[96vw] h-14 rounded-xl bg-blue-500 flex flex-col justify-center items-center pt-3 pb-3"
        @click="featureRedirect"
      >
        <h2 class="text-3xl text-white font-primary font-medium tracking-wide">Features</h2>
      </div>
    </div>

    <modal-comp :type="Type" v-if="Modal"></modal-comp>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import ModalComp from '../components/Modal-Comp.vue'
import { useStore } from 'vuex'
export default {
  components: { ModalComp },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const language = ref('')
    const expand = ref(0)
    const para = ref('')
    const working = ref('')
    const expandWorking = ref(0)
    const type = ref('')
    const modal = ref(false)
    const features = ref([])
    const Type = computed(() => {
      return type.value
    })
    const Modal = computed(() => {
      return modal.value
    })
    const Features = computed(() => {
      return features.value
    })
    const Working = computed(() => {
      if (expandWorking.value == 0) {
        return { working: working.value.slice(0, 350), state: 0 }
      } else return { working: working.value, state: 1 }
    })
    const Paragraph = computed(() => {
      if (expand.value === 0) {
        return { paragraph: para.value.slice(0, 350), state: 0 }
      }
      return { paragraph: para.value, state: 1 }
    })
    const goBack = () => {
      router.push({ name: 'home' })
    }
    const interview = () => {
      router.push({ name: 'interview', params: { language: language.value } })
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
      para.value = data.result.description
      working.value = data.result.working
    })
    const toggle = () => {
      expand.value = expand.value === 0 ? 1 : 0
    }
    const toggleWorking = () => {
      expandWorking.value = expandWorking.value === 0 ? 1 : 0
    }
    const featureRedirect = () => {
      router.push({ name: 'langFeatures', params: { language: language.value } })
    }
    return {
      goBack,
      language,
      Paragraph,
      toggle,
      Type,
      Modal,
      Features,
      Working,
      toggleWorking,
      interview,
      featureRedirect
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
