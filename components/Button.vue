<template>
  <button v-if="type === 'next'" @click="handleClick"
    class="bg-indigo-900 text-white font-medium px-6 py-2 rounded hover:bg-indigo-800 transition-colors duration-200 cursor-pointer">
    Next Step
  </button>

  <NuxtLink v-else-if="type === 'back'" :to="link"
    class="text-gray-700 font-medium px-6 py-2 rounded hover:underline transition-colors duration-200 cursor-pointer">
  Back
  </NuxtLink>

  <NuxtLink v-else-if="type === 'confirm'" :to="link"
    class="bg-indigo-900 text-white font-medium px-6 py-2 rounded hover:bg-indigo-800 transition-colors duration-200 cursor-pointer">
    Confirm
  </NuxtLink>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'
import { useRouter } from 'vue-router'

interface Props {
  type: 'back' | 'next' | 'confirm';
  link: string;
  step?: number;
}

const props = defineProps<Props>()
const router = useRouter()
const form = useFormStore()

function handleClick() {
  let isValid = true

  if (props.step === 1) {
    isValid = form.validateStep1()
  } else if (props.step === 2) {
    isValid = form.validateStep2?.() ?? true
  }

  if (isValid) {
    router.push(props.link)
  } else {
    alert('Please fill all required fields correctly before continuing.')
  }
}
</script>
