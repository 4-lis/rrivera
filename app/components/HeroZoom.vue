<template>
  <section ref="pinWrapper" class="hero-pin-wrapper relative w-full bg-[#0a0a0a]" style="height: 380vh;">
    <div class="hero-sticky-container sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#0a0a0a]">

      <!-- ── Title layer — ABOVE the scale-wrapper ─────────────────── -->
      <div
        ref="heroTitle"
        class="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 pointer-events-none select-none"
      >
        <p class="text-xs tracking-[0.25em] uppercase text-white/40 mb-6 font-medium">Banking for startups</p>
        <h1 class="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-serif text-white leading-[0.9] tracking-tight mb-8">
          Radically<br />different<br />banking
        </h1>
        <p class="text-base md:text-xl text-white/40 max-w-xl font-light leading-relaxed">
          The financial stack built for<br />high-growth companies.
        </p>
        <!-- Scroll cue -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span class="text-[10px] tracking-widest uppercase text-white/40">Scroll</span>
          <div class="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
      </div>

      <!-- ── Scale wrapper — z-index BELOW the title ───────────────── -->
      <div ref="scaleWrapper" class="scale-wrapper absolute inset-0 z-10" style="will-change: transform; backface-visibility: hidden;">

        <!-- Background image -->
        <img
          src="~/public/mercury_hero.png"
          alt=""
          aria-hidden="true"
          class="landscape-img absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        />

        <!-- Black veil — fades in mid-scroll to transition landscape → dashboard -->
        <div
          ref="landscapeOverlay"
          class="landscape-overlay absolute inset-0 bg-[#0a0a0a] pointer-events-none"
          style="opacity: 0;"
        ></div>

        <!-- Laptop screen portal -->
        <div
          class="laptop-screen-portal absolute overflow-hidden bg-[#0d0d0d]"
          style="
            width: 33.8%;
            aspect-ratio: 16 / 10;
            top: 28.5%;
            left: 33.1%;
            border-radius: 4px;
            box-shadow: 
              0 0 0 3px #000, 
              0 0 0 5px #4a4a4a, 
              0 40px 80px rgba(0,0,0,0.9);
          "
        >
          <!-- Top bezel / camera bar -->
          <div class="absolute top-0 inset-x-0 z-10 flex items-center justify-center bg-[#000]" style="height: 5%;">
            <div class="w-1.5 h-1.5 rounded-full bg-[#222] border border-[#111]"></div>
          </div>
          <!-- Dashboard fills below bezel -->
          <div class="absolute inset-0" style="padding-top: 5%;">
            <DashboardMockup />
          </div>
        </div>

      </div><!-- /scale-wrapper -->

    </div><!-- /sticky -->
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const pinWrapper       = ref(null)
const heroTitle        = ref(null)
const scaleWrapper     = ref(null)
const landscapeOverlay = ref(null)

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {

    // Set transform-origin to center of laptop screen BEFORE animation
    // X: left (33.1%) + half of width (33.8%) = 50%
    // Y: top  (28.5%) + half of height (33.8/16*10 ≈ 21.1%) = 39%
    gsap.set(scaleWrapper.value, {
      transformOrigin: '50% 39%',
    })

    // ── Master timeline — total duration is 10 units (maps to 380vh scroll)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinWrapper.value,
        start:   'top top',
        end:     'bottom bottom',
        scrub:   1.5,
      },
    })

    // [0 → 1.5]  Title fades out fast
    tl.to(heroTitle.value, {
      opacity: 0,
      y: -70,
      duration: 1.5,
      ease: 'none',
    }, 0)

    // [0 → 10]  Zoom scales the wrapper (ease:none = perfect scrub linearity)
    tl.to(scaleWrapper.value, {
      scale: 22,
      duration: 10,
      ease: 'none',
    }, 0)

    // [3 → 6.5]  Veil fades IN — landscape disappears
    tl.to(landscapeOverlay.value, {
      opacity: 1,
      duration: 3.5,
      ease: 'none',
    }, 3)

    // [6 → 7.5]  Veil fades slightly BACK to reveal dashboard (punchy reveal)
    tl.to(landscapeOverlay.value, {
      opacity: 0.3,
      duration: 1.5,
      ease: 'none',
    }, 6)

  }, pinWrapper.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
