<template>
  <section ref="sectionRef" class="bg-white py-24 lg:py-32">
    <div class="container-main">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-16">
        <h2 class="font-serif text-4xl sm:text-5xl text-mercury-text">
          Apply online in 10 minutes
        </h2>
      </div>

      <!-- Steps Grid -->
      <div ref="cardsRef" class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="bg-mercury-cream rounded-xl p-8 lg:p-10 text-center group hover:shadow-lg transition-shadow duration-300"
        >
          <div class="w-14 h-14 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <component :is="step.icon" class="w-7 h-7 text-primary" />
          </div>
          <h3 class="font-sans font-medium text-xl text-mercury-text mb-3">
            {{ step.title }}
          </h3>
          <p class="text-mercury-muted text-sm leading-relaxed">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { FileText, CreditCard, Zap } from 'lucide-vue-next'

const sectionRef = ref(null)
const headerRef = ref(null)
const cardsRef = ref(null)

const steps = [
  {
    icon: FileText,
    title: 'Apply online in 10 minutes',
    description: 'Fill out a quick application with your business details. No paperwork, no branch visits.',
  },
  {
    icon: CreditCard,
    title: 'Get a credit card instantly\u2074',
    description: 'Access your virtual card immediately and start spending right away.',
  },
  {
    icon: Zap,
    title: 'Tackle banking tasks in seconds',
    description: 'Send wires, pay bills, and manage expenses—all from one modern dashboard.',
  },
]

onMounted(() => {
  if (process.server) return

  const { gsap } = useGsap()
  const { ScrollTrigger } = useGsap()

  gsap.fromTo(headerRef.value,
    { opacity: 0, y: 30 },
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

  const cards = cardsRef.value?.children
  if (cards) {
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.value,
          start: 'top 80%',
          once: true
        }
      }
    )
  }
})
</script>
