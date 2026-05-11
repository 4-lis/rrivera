<template>
  <section class="relative min-h-[100dvh] overflow-hidden">
    <!-- Background Image with Parallax -->
    <div
      ref="bgRef"
      class="absolute inset-0 w-full h-[120%] -top-[10%]"
    >
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
        alt="Mountain office"
        class="w-full h-full object-cover"
      />
      <!-- Gradient overlay for text readability -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
    </div>

    <!-- Content -->
    <div ref="contentRef" class="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-6 pt-[72px]">
      <!-- Hero Text -->
      <div class="text-center max-w-3xl mx-auto">
        <h1
          ref="headingRef"
          class="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6"
          style="text-shadow: 0 2px 20px rgba(0,0,0,0.3)"
        >
          Radically different banking
        </h1>

        <p
          ref="subheadingRef"
          class="text-lg sm:text-xl text-white/90 max-w-xl mx-auto mb-10"
        >
          Apply online in 10 minutes to experience banking<sup class="text-white/70">1</sup> unlike anything that's come before.
        </p>

        <!-- Email CTA -->
        <div
          ref="ctaRef"
          class="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <div class="relative w-full sm:w-auto flex-1 max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full sm:w-72 px-5 py-3.5 bg-white/15 backdrop-blur-lg border border-white/20 rounded-pill text-white placeholder:text-white/60 focus:outline-none focus:border-white/50 transition-colors text-sm"
            />
          </div>
          <NuxtLink
            to="/signup"
            class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white font-medium text-sm rounded-pill hover:bg-primary-hover transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            Open account
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Bottom Disclaimer -->
    <div class="absolute bottom-0 left-0 right-0 z-20 p-4">
      <div
        ref="disclaimerRef"
        class="max-w-2xl mx-auto bg-black/60 backdrop-blur-lg rounded-lg px-6 py-3 text-center"
      >
        <p class="text-xs text-white/70 leading-relaxed">
          Mercury is a fintech company, not an FDIC-insured bank. Banking services provided through Choice Financial Group and Column N.A., Members FDIC.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const bgRef = ref(null)
const contentRef = ref(null)
const headingRef = ref(null)
const subheadingRef = ref(null)
const ctaRef = ref(null)
const disclaimerRef = ref(null)

onMounted(async () => {
  if (process.server) return

  const { gsap } = useGsap()

  // Hero entrance animation
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo(headingRef.value,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 0.3 }
  )
  .fromTo(subheadingRef.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8 },
    '-=0.5'
  )
  .fromTo(ctaRef.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8 },
    '-=0.4'
  )
  .fromTo(disclaimerRef.value,
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.6 },
    '-=0.3'
  )

  // Parallax effect on scroll
  const { ScrollTrigger } = useGsap()

  ScrollTrigger.create({
    trigger: bgRef.value,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      if (bgRef.value) {
        gsap.set(bgRef.value, {
          y: self.progress * 100
        })
      }
    }
  })

  // Content fades out on scroll
  ScrollTrigger.create({
    trigger: contentRef.value,
    start: 'top top',
    end: '50% top',
    scrub: true,
    onUpdate: (self) => {
      if (contentRef.value) {
        gsap.set(contentRef.value, {
          opacity: 1 - self.progress * 1.5,
          y: self.progress * -50
        })
      }
    }
  })
})
</script>
