<template>
  <section ref="sectionRef" class="bg-white py-24 lg:py-32">
    <div class="container-main">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-16">
        <h2 class="font-serif text-4xl sm:text-5xl text-mercury-text max-w-2xl mx-auto">
          Run your business like a seasoned pro
        </h2>
      </div>

      <!-- Features Grid -->
      <div ref="gridRef" class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-mercury-cream rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
        >
          <div class="w-10 h-10 mb-5 text-primary">
            <component :is="feature.icon" class="w-10 h-10" />
          </div>
          <h3 class="font-sans font-medium text-xl text-mercury-text mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-mercury-muted leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- See all features link -->
      <div class="text-center">
        <a
          href="#"
          class="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          See all features
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Eye, Settings2, Users, MessageCircle, ArrowRight } from 'lucide-vue-next'

const sectionRef = ref(null)
const headerRef = ref(null)
const gridRef = ref(null)

const features = [
  {
    icon: Eye,
    title: 'Total visibility',
    description: 'Get a clear view of all available funds and money in and out, in one snapshot.',
  },
  {
    icon: Settings2,
    title: 'Automations',
    description: 'Reduce busywork with automated transfers, approval flows, and AI-powered transaction categorization.',
  },
  {
    icon: Users,
    title: 'Team management',
    description: 'Curb team spend with card limits, spend controls, and granular user permissions.',
  },
  {
    icon: MessageCircle,
    title: 'Guidance',
    description: 'Chat support for all customers, plus dedicated account management for those who qualify.',
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

  const cards = gridRef.value?.children
  if (cards) {
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.value,
          start: 'top 80%',
          once: true
        }
      }
    )
  }
})
</script>
