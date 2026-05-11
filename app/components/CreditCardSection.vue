<template>
  <section ref="sectionRef" class="bg-white py-16 lg:py-24">
    <div class="container-main">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Image -->
        <div ref="imageRef" class="order-2 lg:order-1">
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1000"
              alt="Mercury Credit Card"
              class="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0"
            />
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>

        <!-- Text -->
        <div ref="textRef" class="order-1 lg:order-2">
          <h2 class="font-serif text-4xl sm:text-5xl text-mercury-text mb-6">
            Explore credit cards
          </h2>
          <p class="text-mercury-muted text-lg leading-relaxed mb-6">
            Earn 1.5% cashback on every purchase with the Mercury IO Card. No annual fees, no hidden charges—just straightforward rewards for your business spending.
          </p>
          <a
            href="#"
            class="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Learn more
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const sectionRef = ref(null)
const imageRef = ref(null)
const textRef = ref(null)

onMounted(() => {
  if (process.server) return

  const { gsap } = useGsap()
  const { ScrollTrigger } = useGsap()

  gsap.fromTo(imageRef.value,
    { opacity: 0, x: -30 },
    {
      opacity: 1, x: 0, duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        once: true
      }
    }
  )

  gsap.fromTo(textRef.value,
    { opacity: 0, x: 30 },
    {
      opacity: 1, x: 0, duration: 0.8, delay: 0.2,
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
