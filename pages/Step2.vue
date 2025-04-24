<template>

  <div class="w-full md:h-screen flex flex-col md:items-center md:justify-center bg-white">
    <div class="w-full max-w-xl bg-white p-6 md:p-10 rounded-xl shadow-md">
      <h1 class="text-2xl font-bold text-marine-blue mb-2">Select your plan</h1>
      <p class="text-gray-500 mb-6">You have the option of monthly or yearly billing.</p>

      <div class="flex flex-wrap justify-center md:flex-row gap-2 mb-6">
        <label v-for="plan in plans" :key="plan.id" :class="[
          'flex flex-col items-start border rounded-lg p-3 cursor-pointer transition w-full md:w-36',
          form.selectedPlan === plan.id
            ? 'border-purple-500 bg-purple-50'
            : 'border-gray-300 hover:border-purple-400'
        ]">
          <input type="radio" class="sr-only" name="plan" :value="plan.id" v-model="form.selectedPlan" />
          <img :src="plan.icon" :alt="plan.name" class="w-10 h-10 mr-4" />
          <div>
            <h2 class="font-bold text-marine-blue">{{ plan.name }}</h2>
            <p class="text-purple-500 text-sm">
              {{ form.billingType === 'monthly' ? plan.monthly : plan.yearly }}
            </p>
            <p v-if="form.billingType === 'yearly'" class="text-gray-300 text-sm italic">2 months free</p>
            <p v-else class="text-gray-400 text-sm invisible">Monthly</p>
          </div>
        </label>
      </div>

      <div class="flex justify-center items-center bg-sky-100 p-4 rounded-lg mb-8 gap-6">
        <span :class="[
          'text-sm font-medium',
          form.billingType === 'monthly' ? 'text-blue-800 font-bold' : 'text-gray-500'
        ]">
          Monthly
        </span>

        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" class="sr-only peer" v-model="form.billingType" :true-value="'yearly'"
            :false-value="'monthly'" />
          <div
            class="w-12 h-6 bg-blue-800 rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all">
          </div>
        </label>

        <span :class="[
          'text-sm font-medium',
          form.billingType === 'yearly' ? 'text-blue-800 font-bold' : 'text-gray-500'
        ]">
          Yearly
        </span>
      </div>

      <div class="flex justify-between">
        <Button type="back" link="/step1" />
        <Button type="next" link="/step3" :step="2" />
      </div>
    </div>
    </div>

</template>

<script setup>
import { useFormStore } from '~/stores/formStore'
import Button from '../components/Button.vue'

const form = useFormStore()

const plans = form.plans

definePageMeta({
  layout: 'default'
})
</script>


<style scoped></style>
