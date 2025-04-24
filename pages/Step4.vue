<template>
  <div class="w-full md:h-screen flex flex-col md:items-center md:justify-center bg-white">
    <div class="w-full max-w-xl bg-white p-6 md:p-10 rounded-xl shadow-md">
        <h1 class="text-2xl font-bold text-marine-blue mb-1">Finishing up</h1>
        <p class="text-gray-500 mb-6">
          Double-check everything looks OK before confirming.
        </p>

        <div class="bg-sky-100 rounded-lg p-4 mb-6">
          <div class="flex justify-between items-center border-b pb-4 mb-4">
            <div>
              <h2 class="font-bold text-marine-blue">
                {{ selectedPlanData?.name }} ({{ form.billingType }})
              </h2>
              <NuxtLink to="/step2" class="text-gray-500 underline text-sm">Change</NuxtLink>
            </div>
            <span class="font-bold text-marine-blue">
              {{ form.billingType === 'monthly' ? selectedPlanData?.monthly : selectedPlanData?.yearly }}
            </span>
          </div>

          <div
            v-for="addon in selectedAddonDetails"
            :key="addon.id"
            class="flex justify-between mb-2"
          >
            <p class="text-gray-500 text-sm">{{ addon.name }}</p>
            <p class="text-marine-blue text-sm">
              {{ form.billingType === 'monthly' ? addon.monthly : addon.yearly }}
            </p>
          </div>
        </div>

        <div class="flex justify-between px-4">
          <p class="text-gray-500 text-sm">Total (per {{ form.billingType }})</p>
          <p class="text-purple-700 font-bold text-lg">
            {{ total }}
          </p>
        </div>

        <div class="flex justify-between mt-8">
          <Button type="back" link="/step3" />
          <Button type="confirm" link="/step5" />
        </div>
      </div>
  </div>
</template>

<script setup>
import { useFormStore } from '~/stores/formStore'
import Button from '../components/Button.vue'

const form = useFormStore()

const plans = useFormStore().plans
const addons = useFormStore().addons

const selectedPlanData = computed(() => plans.find(p => p.id === form.selectedPlan))

const selectedAddonDetails = computed(() =>
  addons.filter(a => form.selectedAddons.includes(a.id))
)

const total = computed(() => {
  const base = selectedPlanData.value
  const addonTotal = selectedAddonDetails.value.reduce((acc, addon) => {
    return acc + (form.billingType === 'monthly' ? addon.monthlyValue : addon.yearlyValue)
  }, 0)
  const planValue = form.billingType === 'monthly' ? base?.monthlyValue || 0 : base?.yearlyValue || 0
  const totalValue = planValue + addonTotal

  return form.billingType === 'monthly' ? `$${totalValue}/mo` : `$${totalValue}/yr`
})

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.text-marine-blue {
  color: #02295a;
}
</style>
