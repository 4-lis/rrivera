<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5'
        : 'bg-transparent'
    ]"
  >
    <nav class="container-main flex items-center justify-between h-[72px]">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="13" stroke="currentColor" stroke-width="1.5" fill="none"/>
          <circle cx="14" cy="14" r="5" fill="currentColor"/>
          <circle cx="14" cy="5" r="1.5" fill="currentColor"/>
          <circle cx="22" cy="18" r="1.5" fill="currentColor"/>
          <circle cx="6" cy="18" r="1.5" fill="currentColor"/>
        </svg>
        <span :class="['text-sm font-semibold tracking-[0.15em] uppercase', textColor]">MERCURY</span>
      </NuxtLink>

      <!-- Center Navigation -->
      <div class="hidden lg:flex items-center gap-1">
        <div
          v-for="item in navItems"
          :key="item.label"
          class="relative"
          @mouseenter="openDropdown = item.label"
          @mouseleave="openDropdown = null"
        >
          <button
            :class="[
              'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-opacity duration-200 rounded-lg hover:bg-black/5',
              textColor
            ]"
          >
            {{ item.label }}
            <ChevronDown
              v-if="item.children"
              :class="[
                'w-4 h-4 transition-transform duration-200',
                openDropdown === item.label ? 'rotate-180' : ''
              ]"
            />
          </button>

          <!-- Dropdown -->
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2 pointer-events-none"
            enter-to-class="opacity-100 translate-y-0 pointer-events-auto"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div
              v-if="item.children && openDropdown === item.label"
              class="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-2 border border-gray-100"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.href || '#'")
                class="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <component :is="child.icon" v-if="child.icon" class="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div class="text-sm font-medium text-mercury-text">{{ child.label }}</div>
                  <div v-if="child.description" class="text-xs text-mercury-muted mt-0.5">{{ child.description }}</div>
                </div>
              </NuxtLink>
            </div>
          </Transition>
        </div>

        <NuxtLink
          to="/pricing"
          :class="['px-3 py-2 text-sm font-medium transition-opacity duration-200 hover:opacity-70', textColor]"
        >
          Pricing
        </NuxtLink>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/login"
          :class="['hidden sm:inline-flex text-sm font-medium transition-opacity duration-200 hover:opacity-70', textColor]"
        >
          Log in
        </NuxtLink>
        <NuxtLink
          to="/signup"
          class="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-primary text-white rounded-pill hover:bg-primary-hover transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Open account
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ChevronDown, Building2, CreditCard, Receipt, Calculator, Rocket, Users, BookOpen } from 'lucide-vue-next'

const isScrolled = ref(false)
const openDropdown = ref(null)

const textColor = computed(() => 'text-white')

const navItems = [
  {
    label: 'Products',
    children: [
      { label: 'Business Banking', description: 'Checking & savings accounts', icon: Building2, href: '#' },
      { label: 'Cards', description: 'Credit cards & expense management', icon: CreditCard, href: '#' },
      { label: 'Payments', description: 'Send money globally', icon: Receipt, href: '#' },
      { label: 'Accounting', description: 'Automated bookkeeping', icon: Calculator, href: '#' },
    ]
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Startups', description: 'Built for fast-moving companies', icon: Rocket, href: '#' },
      { label: 'Enterprise', description: 'For scaling organizations', icon: Building2, href: '#' },
      { label: 'Accountants', description: 'Tools for your clients', icon: Users, href: '#' },
    ]
  },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', description: 'News and insights', icon: BookOpen, href: '#' },
      { label: 'Help Center', description: 'Get support', icon: Users, href: '#' },
    ]
  },
  {
    label: 'About',
    children: [
      { label: 'Our Story', description: 'Why we built Mercury', icon: Rocket, href: '#' },
      { label: 'Careers', description: 'Join our team', icon: Users, href: '#' },
    ]
  },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
