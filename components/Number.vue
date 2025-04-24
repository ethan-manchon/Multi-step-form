<template>
    <div class="flex items-center gap-4">
        <div :class="[
            'w-8 h-8 rounded-full flex items-center justify-center border text-sm font-bold',
            active ? 'bg-white text-blue-800' : 'border-white text-white'
        ]">
            {{ value }}
        </div>
        <div class="hidden md:block">
            <p class="text-sm uppercase text-gray-300">Step {{ value }}</p>
            <p class="font-bold tracking-wide">{{ label }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    value: number
    label: string
    active: boolean
}>()
</script>

<style scoped></style>

<!-- 
    vbase → Composant de base Vue 3 (Composition API)
    
    vfor, vmodel, vif → directives
    
    vimport → importations rapides 
    -->