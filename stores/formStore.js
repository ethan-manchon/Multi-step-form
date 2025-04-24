import { defineStore } from 'pinia'
const plans = [

  {
    id: 'arcade',
    name: 'Arcade',
    icon: '/images/icon-arcade.svg',
    monthly: '$9/mo',
    yearly: '$90/yr',
    monthlyValue: 9,
    yearlyValue: 90
  },
  {
    id: 'advanced',
    name: 'Advanced',
    icon: '/images/icon-advanced.svg',
    monthly: '$12/mo',
    yearly: '$120/yr',
    monthlyValue: 12,
    yearlyValue: 120
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: '/images/icon-pro.svg',
    monthly: '$15/mo',
    yearly: '$150/yr',
    monthlyValue: 15,
    yearlyValue: 150
  }
]

const addons = [
  {
    id: 'online-service',
    name: 'Online Service',
    description: 'Access to multiplayer games',
    monthly: '+$1/mo',
    yearly: '+$10/yr',
    monthlyValue: 1,
    yearlyValue: 10
  },
  {
    id: 'larger-storage',
    name: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    monthly: '+$2/mo',
    yearly: '+$20/yr',
    monthlyValue: 2,
    yearlyValue: 20
  },
  {
    id: 'custom-profile',
    name: 'Customizable Profile',
    description: 'Custom theme on your profile',
    monthly: '+$2/mo',
    yearly: '+$20/yr',
    monthlyValue: 2,
    yearlyValue: 20
  }
]
export const useFormStore = defineStore('form', {
  state: () => ({
    name: '',
    email: '',
    phone: '',
    errors: {
      name: '',
      email: '',
      phone: ''
    },
    selectedPlan: '',
    billingType: 'monthly',
    selectedAddons: [],
    plans,
    addons
  }),

  getters: {
    selectedPlanDetails(state) {
      return state.plans.find(p => p.id === state.selectedPlan)
    },

    selectedAddonsDetails(state) {
      return state.addons.filter(a => state.selectedAddons.includes(a.id))
    },

    totalPrice(state) {
      const plan = state.plans.find(p => p.id === state.selectedPlan)
      const addonTotal = state.addons
        .filter(a => state.selectedAddons.includes(a.id))
        .reduce((acc, a) => {
          return acc + (state.billingType === 'monthly' ? a.monthlyValue : a.yearlyValue)
        }, 0)

      const basePrice = state.billingType === 'monthly'
        ? plan?.monthlyValue || 0
        : plan?.yearlyValue || 0

      const total = basePrice + addonTotal
      return state.billingType === 'monthly' ? `$${total}/mo` : `$${total}/yr`
    }
  },
  actions: {
    validateStep1() {
      const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/
      const phoneRegex = /^\+?\d{1,3}[\s.-]?\d{1,4}[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/
  
      let isValid = true
  
      if (this.name.trim() === '') {
        this.errors.name = 'Le nom est requis'
        isValid = false
      } else {
        this.errors.name = ''
      }
  
      if (!emailRegex.test(this.email)) {
        this.errors.email = 'Adresse e-mail invalide'
        isValid = false
      } else {
        this.errors.email = ''
      }
  
      if (!phoneRegex.test(this.phone)) {
        this.errors.phone = 'Numéro de téléphone invalide'
        isValid = false
      } else {
        this.errors.phone = ''
      }
  
      return isValid
    },
  
    validateStep2() {
      return this.selectedPlan !== ''
    }
  },
})
