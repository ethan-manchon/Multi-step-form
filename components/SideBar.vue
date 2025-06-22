<template>
  <aside class="w-full md:w-[600px] h-40 md:h-screen bg-[url('/images/bg-sidebar-mobile.svg')] md:bg-[url('/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover bg-center text-white flex md:flex-col items-center md:items-start justify-center md:justify-start p-6 md:py-12 md:px-8 shadow-lg transition-all duration-300">
    <div class="flex md:flex-col gap-8 align-center mx-auto">
      <Number :value="1" :active="step == 1" label="Your Info" />
      <Number :value="2" :active="step == 2" label="Select Plan" />
      <Number :value="3" :active="step == 3" label="Add-Ons" />
      <Number :value="4" :active="step == 4" label="Summary" />
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  step: number | string
}>()
</script>


<style scoped>
</style>
