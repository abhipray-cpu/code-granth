<template>
  <div class="w-screen min-h-screen h-auto top-0 left-0 m-0 pt-3">
    <svg
      fill="#387EB8"
      width="75px"
      height="75px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      class="w-8 h-8 mt-1 ml-1"
      @click="redirect"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"
        ></path>
      </g>
    </svg>
    <div class="flex items-center justify-center">
      <h2 class="text-3xl text-gray-700 font-normal font-inter self-center -mt-10">
        Create Account
      </h2>
    </div>

    <div class="w-screen flex flex-col items-center mt-7">
      <div class="w-screen flex flex-row justify-around mb-10 mt-3">
        <male-comp></male-comp>
        <female-comp></female-comp>
      </div>
      <input
        type="text"
        placeholder="name"
        v-model="name"
        class="w-90vw h-14 mb-5 p-4 bg-blue-200 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-600"
      />
      <input
        type="text"
        placeholder="email"
        v-model="email"
        class="w-90vw h-14 mb-5 p-4 bg-blue-200 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-600"
      />
      <input
        type="password"
        placeholder="password"
        v-model="password"
        class="w-90vw h-14 mb-5 p-4 bg-blue-200 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-600"
      />
      <input
        type="password"
        placeholder="confirm password"
        v-model="confirm"
        class="w-90vw h-14 mb-5 p-4 bg-blue-200 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-600"
      />
      <div
        class="w-60 h-14 flex flex-col items-center justify-center bg-blue-500 mt-6 rounded-xl button-shadow text-white text-2xl font-bold font-inter"
      >
        Signup
      </div>
      <span class="absolute bottom-10 text-lg font-cursive font-inter"
        >Already have an account?
        <strong class="text-2xl font-inter" @click="redirect">Login</strong>
      </span>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import MaleComp from '../components/Male-Comp.vue'
import FemaleComp from '../components/Female-Comp.vue'
export default {
  components: {
    MaleComp,
    FemaleComp
  },
  setup() {
    const router = useRouter()
    const gender = ref('')
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const confirm = ref('')
    const redirect = () => {
      router.push({ name: 'login' })
    }
    return {
      redirect,
      gender,
      name,
      email,
      password,
      confirm
    }
  }
}
</script>

<style scoped>
.custom-shadow {
  box-shadow:
    inset 2px 2px 6px #b1b1b1,
    inset -2px -2px 6px #ffffff;
}
.custom-shadow:focus {
  box-shadow:
    inset 2px 2px 6px #40019eab,
    inset -2px -2px 6px #ffffff;
}
.button-shadow {
  box-shadow:
    inset 8px 8px 16px #38383864,
    inset -8px -8px 16px #38383864;
}
</style>
