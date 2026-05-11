<template>
  <section ref="heroContainer" class="relative w-full bg-neutral-950" style="height: 300vh;">
    <!-- Sticky Container -->
    <div class="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

      <!-- 1. The Red Number Hook (Atomized Molecule) -->
      <HeroHookCounter ref="hookCounter" />

      <!-- 2. The Actual Hero Content (Atomized Molecule) -->
      <HeroContent ref="heroContent" />

      <!-- Background glow that fades in -->
      <div ref="bgGlow" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none opacity-0"></div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroHookCounter from './molecules/HeroHookCounter.vue'
import HeroContent from './molecules/HeroContent.vue'

const heroContainer = ref(null)
const hookCounter = ref(null)
const heroContent = ref(null)
const bgGlow = ref(null)

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    // 1. The Master Scroll Timeline (Zoom-in Hook)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainer.value,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrub
      }
    })

    // Zoom the red number MASSIVELY so it breaks/fades past the camera
    // We target classes within the components for GSAP simplicity in this architecture
    tl.to('.counter-number', {
      scale: 50,
      opacity: 0,
      duration: 3,
      ease: 'power3.in'
    }, 0)
    
    tl.to('.scroll-hint', {
      opacity: 0,
      duration: 0.5
    }, 0)

    // Fade in the actual Hero Content
    tl.to([heroContent.value?.$el, bgGlow.value], {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }, 1.5) // Starts mid-zoom

    // Animate Hero text lines (Masking)
    tl.to('.hero-line', {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out'
    }, 2)

    // Subtitle & CTA
    tl.to(['.hero-sub', '.hero-cta'], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    }, 2.3)

    // Floating Video Slide up
    tl.to('.floating-video', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, 2.5)

    // 2. Independent continuous yoyo animation for the floating video
    gsap.to('.floating-video', {
      y: -15,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 1 // Start a bit after it comes in
    })

  }, heroContainer.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

