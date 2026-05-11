<template>
  <section ref="profileSection" class="relative py-32 px-6 lg:px-12 bg-neutral-950 text-neutral-900 transition-colors duration-1000 ease-in-out">
    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <!-- Left: Photo with Parallax -->
      <div class="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-neutral-200">
        <img 
          ref="parallaxImage"
          src="/public/rafael_rivera_profile.jpg" 
          alt="Rafael Rivera" 
          class="absolute inset-0 w-full h-[120%] -top-[10%] object-cover object-center"
        />
        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
      </div>

      <!-- Right: Biography -->
      <div ref="bioContainer" class="flex flex-col items-start">
        <div class="bio-element inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide mb-6 opacity-0 translate-y-6">
          El Arquitecto Financiero
        </div>
        
        <h2 class="bio-element text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8 opacity-0 translate-y-6 text-neutral-900">
          Tu aliado en la construcción de libertad financiera.
        </h2>

        <div class="space-y-6 text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
          <p class="bio-element opacity-0 translate-y-6">
            Soy Rafael Mauricio Rivera Alvarez. Tras años de analizar el sistema bancario, comprendí que los créditos hipotecarios a 30 años no son una condena inamovible, sino una fórmula matemática que puede ser reescrita.
          </p>
          <p class="bio-element opacity-0 translate-y-6">
            Con un enfoque estricto en la ingeniería de datos y la inteligencia financiera, desarrollo estrategias personalizadas para hackear el modelo de amortización. Forzamos a la matemática a jugar a tu favor, eliminando décadas de intereses innecesarios.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const profileSection = ref(null)
const parallaxImage = ref(null)
const bioContainer = ref(null)

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {

    // 1. Background Color Transition (Dark to Light)
    gsap.to(profileSection.value, {
      scrollTrigger: {
        trigger: profileSection.value,
        start: 'top 60%',
        end: 'top 20%',
        scrub: true,
      },
      backgroundColor: '#fafafa', // neutral-50
      ease: 'none'
    })

    // 2. Parallax Image
    gsap.to(parallaxImage.value, {
      scrollTrigger: {
        trigger: profileSection.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: '20%',
      ease: 'none'
    })

    // 3. Staggered Bio Fade-up
    gsap.to('.bio-element', {
      scrollTrigger: {
        trigger: bioContainer.value,
        start: 'top 75%',
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    })

  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
