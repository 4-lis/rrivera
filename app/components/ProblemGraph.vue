<template>
  <section class="relative pt-32 pb-24 px-6 lg:px-12 bg-[#0a0a0a] -mt-20 z-20">
    
    <!-- Seamless Gradient Overlay to blend with Hero Dashboard -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a] pointer-events-none z-0"></div>

    <div class="max-w-5xl mx-auto w-full relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16 relative z-10">
        <h2 class="section-title text-3xl md:text-5xl font-bold text-slate-50 mb-6 opacity-0 translate-y-8">
          ¿Tu deuda en UVR sube aunque pagues puntualmente?
        </h2>
        <p class="section-subtitle text-slate-400 max-w-2xl mx-auto text-lg opacity-0 translate-y-4">
          La matemática del banco está diseñada a su favor. Veamos la realidad de los créditos a 30 años.
        </p>
      </div>

      <!-- The Graph Area -->
      <div ref="graphContainer" class="relative w-full h-[400px] md:h-[500px] bg-slate-900/50 rounded-3xl border border-slate-800 p-6 md:p-10 mb-16 shadow-2xl overflow-hidden flex flex-col justify-end">
        
        <!-- Grid lines -->
        <div class="absolute inset-0 pointer-events-none opacity-20" style="background-image: linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px); background-size: 40px 40px;"></div>

        <!-- Axis labels -->
        <div class="absolute bottom-4 left-6 md:left-10 text-xs text-slate-500 uppercase tracking-widest font-medium">Años (Tiempo)</div>
        <div class="absolute top-10 left-6 md:left-10 text-xs text-slate-500 uppercase tracking-widest font-medium -rotate-90 origin-left">Deuda Total</div>

        <!-- SVG Graph Lines -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <!-- Red Line (UVR/Bank) -->
          <path 
            ref="redLine"
            class="red-line"
            d="M 50,450 C 300,450 500,100 1000,50" 
            fill="none" 
            stroke="#ef4444" 
            stroke-width="4" 
            stroke-linecap="round"
            stroke-dasharray="2000"
            stroke-dashoffset="2000"
          />
          <!-- Green Line (Intervention) -->
          <path 
            ref="greenLine"
            class="green-line"
            d="M 50,450 C 300,450 500,300 1000,400" 
            fill="none" 
            stroke="#10b981" 
            stroke-width="4" 
            stroke-linecap="round"
            stroke-dasharray="2000"
            stroke-dashoffset="2000"
          />
        </svg>

        <!-- Labels for lines (Fading in at the end of the line) -->
        <div ref="redLabel" class="absolute top-[10%] right-[10%] bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold opacity-0 translate-x-4">
          Trayectoria UVR (Banco)
        </div>
        <div ref="greenLabel" class="absolute bottom-[15%] right-[10%] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold opacity-0 translate-x-4">
          Con El Arquitecto Financiero
        </div>

      </div>

      <!-- Glassmorphism Alert/Quote -->
      <div class="glass-card max-w-3xl mx-auto p-8 md:p-10 rounded-2xl bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden opacity-0 translate-y-8">
        <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400"></div>
        <div class="flex items-start gap-4">
          <div class="text-3xl">💡</div>
          <div>
            <h3 class="text-xl font-bold text-white mb-2">El Secreto que el Banco no te cuenta</h3>
            <p class="text-slate-300 leading-relaxed font-light">
              Los sistemas de amortización están diseñados para maximizar la rentabilidad del banco, cobrando intereses sobre inflación proyectada. Al inyectar inteligencia y reestructurar el perfil de deuda, forzamos al sistema a aplicar abonos a capital puro, reduciendo el tiempo hasta en un <strong class="text-white font-semibold">60%</strong>.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'

const graphContainer = ref(null)
const redLine = ref(null)
const greenLine = ref(null)
const redLabel = ref(null)
const greenLabel = ref(null)

let ctx

onMounted(() => {
  if (!process.client) return

  ctx = gsap.context(() => {
    
    // Animate section headers
    gsap.to(['.section-title', '.section-subtitle'], {
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 85%',
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    })

    // Scrub animation for the graph lines
    const tlGraph = gsap.timeline({
      scrollTrigger: {
        trigger: graphContainer.value,
        start: 'top 70%',
        end: 'bottom 40%',
        scrub: 1, // Smooth scrub
      }
    })

    // Draw the red line up (UVR)
    tlGraph.to(redLine.value, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0)
    
    // Draw the green line down (Rafael)
    tlGraph.to(greenLine.value, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0)

    // Show labels as the lines finish drawing
    tlGraph.to(redLabel.value, { opacity: 1, x: 0, duration: 0.2 }, 0.8)
    tlGraph.to(greenLabel.value, { opacity: 1, x: 0, duration: 0.2 }, 0.8)

    // Glass card fade up
    gsap.to('.glass-card', {
      scrollTrigger: {
        trigger: '.glass-card',
        start: 'top 90%',
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    })

  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
