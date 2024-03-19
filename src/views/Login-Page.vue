<template>
  <div class="w-screen min-h-screen flex flex-col items-center pt-5">
    <Vue3Lottie :animationData="Book" :height="300" :width="300" />
    <h1 class="text-4xl font-primary font-medium tracking-wider -mt-12 text-color-change">
      Code Granth
    </h1>

    <div class="mt-10 flex flex-col items-center">
      <input
        type="text"
        placeholder="email"
        v-model="email"
        class="w-90vw h-14 mb-8 p-4 bg-blue-200 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-600"
      />
      <input
        type="pass"
        placeholder="password"
        v-model="password"
        class="w-90vw h-14 mb-6 p-4 bg-blue-200 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-700"
      />
      <div
        class="w-60 h-14 flex flex-col items-center justify-center bg-blue-500 mt-6 rounded-xl button-shadow text-white text-2xl font-bold font-inter"
      >
        Login
      </div>
      <span class="absolute bottom-10 text-lg font-cursive font-inter"
        >Don't have an account?
        <strong class="text-2xl font-inter" @click="redirect">Signup</strong>
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import BookJSON from '../assets/lottie/book.json'
import { useRouter } from 'vue-router'
export default {
  components: { Vue3Lottie },
  setup() {
    const Book = ref(BookJSON)
    const email = ref('')
    const password = ref('')

    const submit = () => {}
    const router = useRouter()
    const redirect = () => {
      router.push({ name: 'signup' })
    }
    return {
      Book,
      email,
      password,
      submit,
      redirect
    }
  }
}
</script>

<style scoped>
/* For webkit (Safari, Chrome, etc.) */
@-webkit-keyframes color-change {
  0% {
    color: #0075c9;
  }
  50% {
    color: #a00505;
  }
  100% {
    color: #0075c9;
  }
}

/* For Mozilla Firefox */
@-moz-keyframes color-change {
  0% {
    color: #0075c9;
  }
  50% {
    color: #a00505;
  }
  100% {
    color: #0075c9;
  }
}

/* For Opera */
@-o-keyframes color-change {
  0% {
    color: #0075c9;
  }
  50% {
    color: #a00505;
  }
  100% {
    color: #0075c9;
  }
}

/* Standard syntax */
@keyframes color-change {
  0% {
    color: #0075c9;
  }
  50% {
    color: #a00505;
  }
  100% {
    color: #0075c9;
  }
}

/* Apply the animation to the text */
.text-color-change {
  -webkit-animation: color-change 5s linear infinite;
  -moz-animation: color-change 5s linear infinite;
  -o-animation: color-change 5s linear infinite;
  animation: color-change 5s linear infinite;
}
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
