<template>
  <section class="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a]">
    <div class="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      
      <!-- Left: Photo with Parallax -->
      <div class="lg:col-span-5 relative">
        <div 
          ref="photoWrapper" 
          class="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-slate-800 border border-slate-700/50"
        >
          <!-- Parallax Image -->
          <img 
            ref="parallaxImg"
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
            alt="Rafael Rivera - El Arquitecto Financiero" 
            class="absolute top-[-10%] left-0 w-full h-[120%] object-cover object-center"
          />
          
          <!-- Elegant dark gradient overlay to ensure it blends well -->
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          <!-- Badge overlay -->
          <div class="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/10 rounded-xl p-4">
            <p class="text-white text-sm font-medium tracking-wide">Rafael Rivera</p>
            <p class="text-blue-400 text-xs mt-1 uppercase tracking-widest font-bold">El Arquitecto Financiero</p>
          </div>
        </div>
      </div>

      <!-- Right: Biographical Text (Staggered Fade Up) -->
      <div class="lg:col-span-7" ref="bioTextContainer">
        <h2 class="bio-line text-3xl md:text-5xl font-bold text-slate-50 mb-8 opacity-0 translate-y-6">
          Tu aliado en la construcción de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">libertad financiera</span>
        </h2>
        
        <p class="bio-line text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-6 opacity-0 translate-y-6">
          Durante años observé cómo el sistema hipotecario tradicional atrapaba a las familias en décadas de deudas interminables, pagando hasta tres veces el valor de su vivienda debido a las dinámicas ocultas de la UVR y la amortización.
        </p>

        <p class="bio-line text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-6 opacity-0 translate-y-6">
          Decidí aplicar la ingeniería de datos y el modelado matemático estricto para hackear este modelo. No se trata de magia ni de "tips de ahorro". Se trata de aplicar las mismas reglas financieras que usan los bancos, pero a tu favor.
        </p>

        <p class="bio-line text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-8 opacity-0 translate-y-6">
          Mi misión es simple: reducir drásticamente el tiempo de tu crédito hipotecario, proteger tu liquidez y acelerar tu camino hacia la verdadera libertad.
        </p>

        <div class="bio-line opacity-0 translate-y-6 flex items-center gap-6">
          <div class="flex flex-col">
            <span class="text-3xl font-bold text-white">+12</span>
            <span class="text-xs text-slate-400 uppercase tracking-widest mt-1">Años recortados en promedio</span>
          </div>
          <div class="w-px h-12 bg-slate-800"></div>
          <div class="flex flex-col">
            <span class="text-3xl font-bold text-white">100%</span>
            <span class="text-xs text-slate-400 uppercase tracking-widest mt-1">Optimización Matemática</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'

const photoWrapper = ref(null)
const parallaxImg = ref(null)
const bioTextContainer = ref(null)

let ctx

onMounted(() => {
  if (!process.client) return

  ctx = gsap.context(() => {
    
    // Image Parallax (moves the image slightly vertically relative to scroll)
    gsap.to(parallaxImg.value, {
      scrollTrigger: {
        trigger: photoWrapper.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: '20%', // Moves from top:-10% downwards to create the parallax window effect
      ease: 'none'
    })

    // Staggered Fade-Up for Biographical Text
    gsap.to('.bio-line', {
      scrollTrigger: {
        trigger: bioTextContainer.value,
        start: 'top 80%',
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    })

  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
