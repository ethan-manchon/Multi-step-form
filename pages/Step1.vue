<template>
  <div class="w-full md:h-screen md:flex md:items-center md:justify-center bg-white">
    <div class="w-full max-w-md bg-white p-6 md:p-10 rounded-xl shadow-md">
      <h1 class="text-2xl md:text-3xl font-bold text-marine-blue mb-2">Personal info</h1>
      <p class="text-cool-gray text-sm md:text-base mb-6">
        Please provide your name, email address, and phone number.
      </p>

      <div class="flex flex-col gap-4">

        <div class="flex flex-row justify-between">
          <p class="mb-1 text-sm font-medium text-gray-700">Name</p>
          <p v-if="form.errors.name" class="text-red-500">{{ form.errors.name }}</p>
        </div>
        <Input name="name" label="Name" placeholder="e.g. Stephen King" type="text" @input="form.validateStep1" />

        <div class="flex flex-row justify-between">
          <p class="mb-1 text-sm font-medium text-gray-700">Email</p>
          <p v-if="form.errors.email" class="text-red-500">{{ form.errors.email }}</p>
        </div>

        <Input name="email" label="Email Address" placeholder="e.g. stephenking@lorem.com" type="email"
          @input="form.validateStep1" />

        <div class="flex flex-row justify-between">
          <p class="mb-1 text-sm font-medium text-gray-700">Phone</p>
          <p v-if="form.errors.phone" class="text-red-500">{{ form.errors.phone }}</p>
        </div>

        <Input name="phone" label="Phone Number" placeholder="e.g. +1 234 567 890" type="tel"
          @input="form.validateStep1" />
      </div>

      <div class="flex justify-end mt-8">
        <Button type="next" link="/step2" :step="1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from '@/stores/formStore'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

const form = useFormStore()

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.text-marine-blue {
  color: #02295a;
}

.text-cool-gray {
  color: #9699ab;
}
</style>
