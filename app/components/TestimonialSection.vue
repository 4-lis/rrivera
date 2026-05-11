<template>
  <section ref="sectionRef" class="bg-mercury-dark py-24 lg:py-32">
    <div class="container-main max-w-3xl mx-auto text-center">
      <div ref="quoteRef">
        <blockquote class="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed mb-10">
          "Unlike most financial institutions, Mercury is built on software. Everything can be done within the app in 1-2 minutes."
        </blockquote>

        <div ref="attributionRef" class="flex flex-col items-center gap-2">
          <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
            <span class="text-white font-medium text-lg">K</span>
          </div>
          <cite class="not-italic text-white font-medium">Karri Saarinen</cite>
          <span class="text-white/60 text-sm">Founder, Linear</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const quoteRef = ref(null)
const attributionRef = ref(null)

onMounted(() => {
  if (process.server) return

  const { gsap } = useGsap()
  const { ScrollTrigger } = useGsap()

  gsap.fromTo(quoteRef.value,
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        once: true
      }
    }
  )

  gsap.fromTo(attributionRef.value,
    { opacity: 0 },
    {
      opacity: 1, duration: 0.6, delay: 0.3,
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
