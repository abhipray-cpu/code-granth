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
      <h2 class="font-primary text-2xl font-normal text-gray-700 tracking-wide mt-2 text-center">
        Data Structures
      </h2>
    </div>
    <div class="mt-5 flex flex-col items-center gap-4">
      <div
        class="w-[90vw] bg-blue-500 h-16 rounded-lg shadow flex flex-col items-center justify-center pl-4"
        v-for="(title, index) in DS"
        :key="index"
        @click="redirect(title.title)"
      >
        <h2 class="text-white text-xl font-inter font-medium tracking-wider">{{ title.title }}</h2>
      </div>
    </div>
    <modal-comp :type="Type" v-if="Modal"></modal-comp>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import ModalComp from '../components/Modal-Comp.vue'
export default {
  components: { ModalComp },
  setup() {
    const router = useRouter()
    const type = ref('')
    const modal = ref(false)
    const ds = ref([])
    const Type = computed(() => {
      return type.value
    })
    const Modal = computed(() => {
      return modal.value
    })
    const DS = computed(() => {
      return ds.value
    })
    const goBack = () => {
      router.go(-1)
    }
    const redirect = (val) => {
      router.push({ name: 'dsCode', params: { code: val } })
    }
    const store = useStore()
    onMounted(async () => {
      type.value = 'loader'
      modal.value = true
      const data = await store.dispatch('DataStructures')
      modal.value = false
      if (data.error) {
        type.value = 'error'
        modal.value = true
        setTimeout(() => {
          modal.value = false
        }, 1500)
      }
      ds.value = data.result
    })
    return {
      goBack,
      Type,
      Modal,
      DS,
      redirect
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
