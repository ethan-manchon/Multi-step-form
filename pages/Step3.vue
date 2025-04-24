<template>
 
 <div class="w-full md:h-screen flex flex-col md:items-center md:justify-center bg-white">
  <div class="w-full max-w-xl bg-white p-6 md:p-10 rounded-xl shadow-md">  <h1 class="text-2xl font-bold text-marine-blue">Pick add-ons</h1>
        <p class="text-gray-500 mt-1 mb-6">Add-ons help enhance your gaming experience.</p>

        <div class="flex flex-col gap-4 mb-6">
          <label v-for="addon in addons" :key="addon.id" :class="[
            'border rounded-lg p-4 flex items-center justify-between cursor-pointer transition',
            form.selectedAddons.includes(addon.id)
              ? 'bg-purple-50 border-purple-500'
              : 'border-gray-300 hover:border-purple-400'
          ]">
            <div class="flex items-start gap-4">
              <input type="checkbox" class="mt-1 custom-checkbox" :value="addon.id" v-model="form.selectedAddons" />
              <div>
                <h2 class="font-bold text-marine-blue">{{ addon.name }}</h2>
                <p class="text-gray-500 text-sm">{{ addon.description }}</p>
              </div>
            </div>
            <p class="text-purple-700 font-medium">
              {{ form.billingType === 'monthly' ? addon.monthly : addon.yearly }}
            </p>
          </label>
        </div>

        <div class="flex justify-between">
          <Button type="back" link="/step2" />
          <Button type="next" link="/step4" />
        </div>
      </div>
      </div>

</template>

<script setup>
import { useFormStore } from '~/stores/formStore'
import Button from '../components/Button.vue'

const form = useFormStore()

const addons = form.addons;

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.custom-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #000; 
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  position: relative; 
  transition: background-color 0.3s;
}

.custom-checkbox:checked {
  background-color: #8B5CF6;
}

.custom-checkbox:checked::after {
  content: url('./images/icon-checkmark.svg');
  position: absolute;
  top: 75%;
  left: 70%;
  transform: translate(-50%, -50%);
  scale: 1.5;
}

</style>
