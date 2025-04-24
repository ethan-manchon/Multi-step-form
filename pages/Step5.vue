<template>
  <div class="w-full md:h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
    <img src="/images/icon-thank-you.svg" alt="Thank You" class="w-16 h-16 md:w-20 md:h-20 mb-6" />
    <h1 class="text-2xl md:text-3xl font-bold text-marine-blue mb-4">Thank you!</h1>
    <p class="text-cool-gray text-base md:text-lg max-w-md">
      Thanks for confirming your subscription! We hope you have fun using our platform.
      If you ever need support, please feel free to email us at
      <span class="text-marine-blue font-medium">support@loremgaming.com</span>.
    </p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
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
