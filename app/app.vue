<template>
  <div class="bg-neutral-950 min-h-screen font-sans text-neutral-50 antialiased selection:bg-blue-500/30 selection:text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lenis
let ctx

onMounted(() => {
  if (!process.client) return

  gsap.registerPlugin(ScrollTrigger)

  // ── Lenis smooth scroll ─────────────────────────────────────────────
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  })

  // Integrate with GSAP ticker
  function rafLoop(time) {
    lenis.raf(time * 1000)
    ScrollTrigger.update()
  }

  gsap.ticker.add(rafLoop)
  gsap.ticker.lagSmoothing(0)

  // Store loop ref for cleanup
  lenis._gsapRaf = rafLoop
  
  // Context to easily clear animations in the global scope if needed
  ctx = gsap.context(() => {})
})

onUnmounted(() => {
  if (!process.client) return
  if (lenis) {
    gsap.ticker.remove(lenis._gsapRaf)
    lenis.destroy()
  }
  if (ctx) ctx.revert()
})
</script>
