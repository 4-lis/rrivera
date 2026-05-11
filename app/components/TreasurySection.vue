<template>
  <section ref="sectionRef" class="bg-mercury-cream py-24 lg:py-32">
    <div class="container-main max-w-3xl mx-auto text-center">
      <div ref="contentRef">
        <p class="text-mercury-muted text-lg mb-2">Earn up to</p>

        <div class="font-serif text-7xl sm:text-8xl lg:text-[96px] text-mercury-text leading-none mb-4">
          3.66%
        </div>

        <h2 class="font-serif text-3xl sm:text-4xl text-mercury-text mb-6">
          yield with Mercury Treasury
        </h2>

        <p class="text-mercury-muted text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Access high-liquidity, lower-risk portfolios powered by J.P. Morgan Asset Management and Morgan Stanley.
        </p>

        <a
          href="#"
          class="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-mercury-text font-medium text-sm hover:bg-white transition-colors"
        >
          Explore Treasury
          <ArrowRight class="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const sectionRef = ref(null)
const contentRef = ref(null)

onMounted(() => {
  if (process.server) return

  const { gsap } = useGsap()
  const { ScrollTrigger } = useGsap()

  const elements = contentRef.value?.children
  if (elements) {
    gsap.fromTo(elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 80%',
          once: true
        }
      }
    )
  }
})
</script>
