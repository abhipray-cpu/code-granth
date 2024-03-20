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
      <h2 class="font-primary text-2xl font-medium text-gray-700 tracking-wide mt-2">
        {{ code.toUpperCase() }}
      </h2>
    </div>
    <div class="w-screen flex flex-col items-center justify-center mt-8">
      <code-card :codes="codes"></code-card>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import CodeCard from '../components/Code-Card.vue'
export default {
  components: {
    CodeCard
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const codes = ref([
      `let numbers = [1, 2, 3, 4, 5];
console.log(numbers);`,
      `// Creating an array in TypeScript
let fruits: string[] = ['apple', 'banana', 'orange'];
console.log(fruits);
`,
      `# Creating an array in Python
numbers = [1, 2, 3, 4, 5]
print(numbers)
`,
      `package main

import "fmt"

func main() {
    // Creating an array in Go
    numbers := [5]int{1, 2, 3, 4, 5}
    fmt.Println(numbers)
}
`,
      `void main() {
  // Creating an array in Dart
  List<int> numbers = [1, 2, 3, 4, 5];
  print(numbers);
}
`
    ])
    const code = ref('')
    const back = () => {
      router.push({ name: 'home' })
    }
    onMounted(() => {
      code.value = route.params.code
    })
    return {
      back,
      code,
      codes
    }
  }
}
</script>
