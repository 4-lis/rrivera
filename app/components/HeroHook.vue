<template>
  <section ref="heroContainer" class="relative w-full bg-neutral-950" style="height: 300vh;">
    <!-- Sticky Container -->
    <div class="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

      <!-- 1. The Red Number Hook (Z-index high, scales massively) -->
      <div 
        ref="redNumberWrapper" 
        class="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
      >
        <div 
          ref="redNumber" 
          class="text-6xl md:text-8xl lg:text-[8rem] font-bold text-red-500 drop-shadow-[0_0_40px_rgba(239,68,68,0.8)] tracking-tighter"
          style="transform-origin: center center;"
        >
          $ <span ref="counterText">150,000,000</span>
        </div>
        
        <!-- Instruction to scroll -->
        <div ref="scrollHint" class="absolute bottom-12 left-1/2 -translate-x-1/2 text-red-500/50 text-sm uppercase tracking-widest flex flex-col items-center gap-2">
          <span>El costo real de tu crédito</span>
          <div class="w-px h-8 bg-gradient-to-b from-red-500/50 to-transparent"></div>
        </div>
      </div>

      <!-- 2. The Actual Hero Content (Revealed after zoom) -->
      <div 
        ref="realHeroContent"
        class="absolute inset-0 z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-7xl mx-auto px-6 lg:px-12 opacity-0"
      >
        
        <!-- Text Column -->
        <div class="w-full lg:w-1/2 flex flex-col items-start z-20">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            <div class="overflow-hidden pb-2"><div class="hero-line translate-y-full">No dejes que tu casa</div></div>
            <div class="overflow-hidden pb-2"><div class="hero-line translate-y-full text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">sea del banco</div></div>
            <div class="overflow-hidden pb-2"><div class="hero-line translate-y-full">por 30 años.</div></div>
          </h1>
          
          <p class="hero-sub text-lg md:text-xl text-neutral-400 max-w-lg mb-10 font-light leading-relaxed opacity-0 translate-y-4">
            Soy <strong class="text-white font-medium">El Arquitecto Financiero</strong>. Aplico inteligencia de datos y rigor matemático para optimizar tu hipoteca y devolverte décadas de libertad financiera.
          </p>
          
          <a 
            href="#diagnostico" 
            class="hero-cta opacity-0 translate-y-4 inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] active:scale-95"
          >
            <span>👉</span> Quiero mi diagnóstico de ahorro gratuito
          </a>
        </div>

        <!-- Visual Element Column -->
        <div class="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 z-20">
          <div 
            ref="floatingVideo"
            class="relative w-full max-w-[325px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center opacity-0 translate-y-8"
          >
            <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@rafaelmrivera/video/7568528939937713429" data-video-id="7568528939937713429" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@rafaelmrivera" href="https://www.tiktok.com/@rafaelmrivera?refer=embed">@rafaelmrivera</a> Respuesta a @janethgarca37 <a title="tiktokviral" target="_blank" href="https://www.tiktok.com/tag/tiktokviral?refer=embed">#tiktokviral</a> <a title="tiktoklive" target="_blank" href="https://www.tiktok.com/tag/tiktoklive?refer=embed">#tiktoklive</a> #<a title="livehighlights" target="_blank" href="https://www.tiktok.com/tag/livehighlights?refer=embed">#livehighlights</a> <a title="paidpartnership" target="_blank" href="https://www.tiktok.com/tag/paidpartnership?refer=embed">#PaidPartnership</a> <a title="liveincentiveprogram" target="_blank" href="https://www.tiktok.com/tag/liveincentiveprogram?refer=embed">#LIVEIncentiveProgram</a> <a target="_blank" title="♬ Classic Rock N Roll Vibe - FiniteMusicForge" href="https://www.tiktok.com/music/Classic-Rock-N-Roll-Vibe-7376311406062520370?refer=embed">♬ Classic Rock N Roll Vibe - FiniteMusicForge</a> </section> </blockquote>
          </div>
        </div>

      </div>

      <!-- Background glow that fades in -->
      <div ref="bgGlow" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none opacity-0"></div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useHead } from '#imports'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const heroContainer = ref(null)
const redNumberWrapper = ref(null)
const redNumber = ref(null)
const scrollHint = ref(null)
const realHeroContent = ref(null)
const floatingVideo = ref(null)
const bgGlow = ref(null)

// For the counting effect
const counterText = ref(null)

let ctx

useHead({
  script: [
    { src: 'https://www.tiktok.com/embed.js', async: true }
  ]
})

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {

    // 1. Initial fast counting effect (before scroll)
    const obj = { val: 50000000 }
    gsap.to(obj, {
      val: 150000000,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        if (counterText.value) {
          counterText.value.innerText = Math.floor(obj.val).toLocaleString('en-US')
        }
      }
    })

    // 2. The Master Scroll Timeline (Zoom-in Hook)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainer.value,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrub
      }
    })

    // Zoom the red number MASSIVELY so it breaks/fades past the camera
    tl.to(redNumber.value, {
      scale: 50,
      opacity: 0,
      duration: 3,
      ease: 'power3.in'
    }, 0)
    
    tl.to(scrollHint.value, {
      opacity: 0,
      duration: 0.5
    }, 0)

    // Fade in the actual Hero Content
    tl.to([realHeroContent.value, bgGlow.value], {
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
    tl.to(floatingVideo.value, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, 2.5)

    // 3. Independent continuous yoyo animation for the floating video
    gsap.to(floatingVideo.value, {
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
