<template>
  <section ref="sectionRef" class="bg-mercury-cream py-24 lg:py-32">
    <div class="container-main">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-12">
        <h2 class="font-serif text-4xl sm:text-5xl lg:text-[56px] text-mercury-text leading-tight mb-4">
          Everything you do with money.
        </h2>
        <p class="font-serif text-4xl sm:text-5xl lg:text-[56px] text-mercury-text leading-tight">
          All in one place.
        </p>
      </div>

      <!-- Tabs -->
      <div ref="tabsRef" class="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-200 pb-4">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
            activeTab === tab.id
              ? 'bg-white text-mercury-text shadow-sm border border-gray-200'
              : 'text-mercury-muted hover:text-mercury-text hover:bg-white/50'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab Content -->
      <div ref="contentRef" class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <!-- Text Content -->
        <div class="order-2 lg:order-1">
          <transition
            mode="out-in"
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 translate-x-4"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-4"
          >
            <div :key="activeTab">
              <h3 class="font-sans font-medium text-2xl text-mercury-text mb-4">
                {{ activeTabContent.title }}
              </h3>
              <p class="text-mercury-muted leading-relaxed mb-6">
                {{ activeTabContent.description }}
              </p>
              <div class="flex flex-wrap gap-4">
                <a
                  v-for="link in activeTabContent.links"
                  :key="link.label"
                  :href="link.href"
                  class="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                >
                  {{ link.label }}
                  <ArrowRight class="w-4 h-4" />
                </a>
              </div>
            </div>
          </transition>
        </div>

        <!-- Image -->
        <div class="order-1 lg:order-2">
          <transition
            mode="out-in"
            enter-active-class="transition-all duration-500 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              :key="activeTab"
              class="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
            >
              <img
                :src="activeTabContent.image"
                :alt="activeTabContent.title"
                class="w-full h-auto"
              />
            </div>
          </transition>
        </div>
      </div>

      <!-- Launch Demo Link -->
      <div class="text-center mt-12">
        <a
          href="https://demo.mercury.com/dashboard"
          target="_blank"
          class="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
        >
          Launch demo
n          <ArrowRight class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const sectionRef = ref(null)
const headerRef = ref(null)
const tabsRef = ref(null)
const contentRef = ref(null)
const activeTab = ref('banking')

const tabs = [
  { id: 'banking', label: 'Business banking & more' },
  { id: 'cards', label: 'Cards & expense management' },
  { id: 'payments', label: 'Payments & invoicing' },
  { id: 'accounting', label: 'Accounting' },
]

const tabContent = {
  banking: {
    title: 'Business banking & more',
    description: 'Apply for free checking and savings accounts with zero minimums, earn up to 3.66% yield with Treasury by Mercury Advisory, and access loans to help you grow.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    links: [
      { label: 'Explore checking', href: '#' },
      { label: 'Explore savings', href: '#' },
    ]
  },
  cards: {
    title: 'Cards & expense management',
    description: 'Earn 1.5% cashback on credit card spend, and control team expenses with cards, reimbursements, limits, and approvals all in one place.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600',
    links: [
      { label: 'Explore cards', href: '#' },
    ]
  },
  payments: {
    title: 'Payments & invoicing',
    description: 'Send money around the world and pay bills with no fees on USD payments, create free invoices, and get paid directly into your Mercury account.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1600',
    links: [
      { label: 'Explore payments', href: '#' },
    ]
  },
  accounting: {
    title: 'Accounting',
    description: 'Sync with Quickbooks, Xero or NetSuite, and save hours with AI-powered automations to close your books faster.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    links: [
      { label: 'Explore accounting', href: '#' },
    ]
  },
}

const activeTabContent = computed(() => tabContent[activeTab.value])

onMounted(() => {
  if (process.server) return

  const { gsap } = useGsap()
  const { ScrollTrigger } = useGsap()

  // Section reveal animations
  gsap.fromTo(headerRef.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        once: true
      }
    }
  )

  gsap.fromTo(tabsRef.value,
    { opacity: 0, y: 20 },
    {
      opacity: 1, y: 0, duration: 0.5, delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        once: true
      }
    }
  )

  gsap.fromTo(contentRef.value,
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 0.6, delay: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        once: true
      }
    }
  )
})
</script>
