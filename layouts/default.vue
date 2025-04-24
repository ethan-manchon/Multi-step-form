<template>
  <div class="w-full h-screen flex flex-col md:flex-row bg-white">
    <main class="flex-1 flex flex-col md:flex-row justify-center items-center gap-8 px-6 py-10 mx-auto">
      <SideBar :step="step" />
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import SideBar from '../components/SideBar.vue'

const route = useRoute()

const routeStepMap = {
  '/step1': 1,
  '/step2': 2,
  '/step3': 3,
  '/step4': 4,
  '/step5': 4,
}

const currentPath = computed(() => route.path.toLowerCase())
const step = computed(() => routeStepMap[currentPath.value] ?? 0)
</script>

<style scoped>
</style>
