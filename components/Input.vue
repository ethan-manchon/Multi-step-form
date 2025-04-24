<template>
  <div>
    <input
      :type="type"
      v-model="inputValue"
      :placeholder="placeholder"
      :class="'border-2 rounded-lg p-2 w-full focus:outline-none'"
    />
  </div>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'
import { computed } from 'vue'

const form = useFormStore()

const props = defineProps<{
  name: string
  placeholder: string
  type: string
}>()


const inputValue = computed({
  get: () => (form.$state as any)[props.name],
  set: (value) => ((form.$state as any)[props.name] = value)
})

</script>

<style scoped>
</style>