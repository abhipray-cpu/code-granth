<template>
  <div class="w-screen min-h-screen h-auto">
    <modal-comp :type="Type" v-if="Modal"></modal-comp>
    <div v-else>
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--emojione-monotone w-10 h-10 ml-3 mt-4"
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
      <div class="flex flex-col items-center -mt-10">
        <h2
          class="font-primary text-2xl font-medium text-gray-700 tracking-wide mt-2 text-center w-48"
        >
          {{ code.toUpperCase() }}
        </h2>
      </div>
      <div class="mt-5 mb-5 pl-3">
        <h2 class="font-primary text-xl font-medium text-gray-700 tracking-wide">Description</h2>
        <h3 class="font-inter text-lg font-normal text-gray-500 tracking-normal mt-2 mr-4">
          {{ Codes['description'] }}
        </h3>
      </div>
      <div class="w-screen flex flex-col items-center justify-center mt-8">
        <div class="w-[95vw] bg-gray-800 rounded-lg mb-5 pb-2 pt-2 shadow">
          <div class="flex flex-row w-[90vw] ml-[2.5vw] gap-[2.5vw] mb-2">
            <img src="../assets/language/js.png" alt="Javascript" class="w-8 h-8 active mt-1" />
            <h2 class="font-inter font-normal text-xl text-gray-100 tracking-wide ml-3 mt-2">
              Javascript
            </h2>
          </div>
          <Vue3Prism :source="Codes['javascript']" id="javascript"></Vue3Prism>
        </div>
        <div class="w-[95vw] bg-gray-800 rounded-lg mb-5 pb-2 pt-2 shadow">
          <div class="flex flex-row w-[90vw] ml-[2.5vw] gap-[2.5vw] mb-2">
            <img src="../assets/language/ts.png" alt="Typescript" class="w-8 h-8 active mt-1" />
            <h2 class="font-inter font-normal text-xl text-gray-100 tracking-wide ml-3 mt-2">
              Typescript
            </h2>
          </div>

          <Vue3Prism :source="Codes['typescript']" id="typescript"></Vue3Prism>
        </div>
        <div class="w-[95vw] bg-gray-800 rounded-lg mb-5 pb-2 pt-2 shadow">
          <div class="flex flex-row w-[90vw] ml-[2.5vw] gap-[2.5vw] mb-2">
            <img src="../assets/language/py.png" alt="Python" class="w-8 h-8 active mt-1" />
            <h2 class="font-inter font-normal text-xl text-gray-100 tracking-wide ml-3 mt-2">
              Python
            </h2>
          </div>

          <Vue3Prism :source="Codes['python']" id="python"></Vue3Prism>
        </div>
        <div class="w-[95vw] bg-gray-800 rounded-lg mb-5 pb-2 pt-2 shadow">
          <div class="flex flex-row w-[90vw] ml-[2.5vw] gap-[2.5vw] mb-2">
            <img src="../assets/language/go.png" alt="Javascript" class="w-8 h-8 active mt-1" />
            <h2 class="font-inter font-normal text-xl text-gray-100 tracking-wide ml-3 mt-2">
              Golang
            </h2>
          </div>

          <Vue3Prism :source="Codes['golang']" id="golang"></Vue3Prism>
        </div>
        <div class="w-[95vw] bg-gray-800 rounded-lg mb-5 pb-2 pt-2 shadow">
          <div class="flex flex-row w-[90vw] ml-[2.5vw] gap-[2.5vw] mb-2">
            <img src="../assets/language/dart.png" alt="Dart" class="w-8 h-8 active mt-1" />
            <h2 class="font-inter font-normal text-xl text-gray-100 tracking-wide ml-3 mt-2">
              Dart
            </h2>
          </div>

          <Vue3Prism :source="Codes['dart']" id="dart"></Vue3Prism>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import ModalComp from '../components/Modal-Comp.vue'
import { useStore } from 'vuex'
export default {
  components: {
    ModalComp
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const codes = ref('{"javascript":"","typescript":"","python":"","golang":"","dart":""}')
    const code = ref('')
    const type = ref('')
    const modal = ref(false)
    const Type = computed(() => {
      return type.value
    })
    const Modal = computed(() => {
      return modal.value
    })
    const Codes = computed(() => {
      return codes.value
    })
    const back = () => {
      router.push({ name: 'home' })
    }
    const store = useStore()
    onMounted(async () => {
      code.value = route.params.code
      type.value = 'loader'
      modal.value = true
      const data = await store.dispatch('algoCode', { value: code.value })
      modal.value = false
      if (data.error) {
        type.value = 'error'
        modal.value = true
        setTimeout(() => {
          modal.value = false
        }, 1500)
      }
      codes.value = data.result
    })
    return {
      back,
      code,
      codes,
      Type,
      Modal,
      Codes
    }
  }
}
</script>
