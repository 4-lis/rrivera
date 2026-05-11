<template>
  <section ref="sectionRef" class="bg-gradient-primary py-20 lg:py-24">
    <div ref="contentRef" class="container-main max-w-2xl mx-auto text-center">
      <h2 class="font-serif text-4xl sm:text-5xl text-white mb-4">
        Ready to get started?
      </h2>
      <p class="text-white/90 text-lg mb-10">
        Apply in 10 minutes.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink
          to="/signup"
          class="inline-flex items-center px-8 py-3.5 bg-white text-primary font-medium rounded-pill hover:bg-white/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Open account
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center px-8 py-3.5 text-white font-medium hover:underline"
        >
          Contact sales
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const contentRef = ref(null)

onMounted(() => {
  if (process.server) return

  const { gsap } = useGsap()
  const { ScrollTrigger } = useGsap()

  gsap.fromTo(contentRef.value,
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
})
</script>
