<template>
  <section ref="sectionRef" class="bg-mercury-dark py-16">
    <div class="container-main">
      <div ref="logosRef" class="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
        <!-- Fortune -->
        <a href="#" class="group">
          <div class="text-white/40 group-hover:text-white/80 transition-colors duration-300">
            <svg class="h-8 w-auto" viewBox="0 0 200 32" fill="currentColor">
              <text x="0" y="24" font-family="Georgia, serif" font-size="26" font-weight="bold">FORTUNE</text>
            </svg>
          </div>
        </a>

        <!-- Wall Street Journal -->
        <a href="#" class="group">
          <div class="text-white/40 group-hover:text-white/80 transition-colors duration-300">
            <svg class="h-7 w-auto" viewBox="0 0 280 28" fill="currentColor">
              <text x="0" y="22" font-family="Georgia, serif" font-size="20" font-style="italic">The Wall Street Journal</text>
            </svg>
          </div>
        </a>

        <!-- Fast Company -->
        <a href="#" class="group">
          <div class="text-white/40 group-hover:text-white/80 transition-colors duration-300">
            <svg class="h-7 w-auto" viewBox="0 0 220 28" fill="currentColor">
              <text x="0" y="22" font-family="system-ui, sans-serif" font-size="20" font-weight="bold">FAST COMPANY</text>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const logosRef = ref(null)

onMounted(() => {
  if (process.server) return

  const { gsap } = useGsap()
  const { ScrollTrigger } = useGsap()

  const logos = logosRef.value?.children
  if (logos) {
    gsap.fromTo(logos,
      { opacity: 0 },
      {
        opacity: 1, duration: 0.6, stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 85%',
          once: true
        }
      }
    )
  }
})
</script>
