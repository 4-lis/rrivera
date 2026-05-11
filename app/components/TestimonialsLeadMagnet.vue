<template>
  <section class="relative py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1f1f1f]">
    <div class="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      <!-- Left: Giant Testimonial Quote -->
      <div class="relative testimonial-content">
        <!-- Giant background quotes -->
        <div class="absolute -top-12 -left-8 text-[12rem] text-slate-800/50 font-serif leading-none pointer-events-none select-none">"</div>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight relative z-10">
          De una condena de <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 line-through decoration-red-500/50">20 años</span> a la libertad en <span class="text-emerald-400">12</span>.
        </h2>
        
        <div class="flex items-center gap-4 relative z-10">
          <div class="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-slate-500"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div>
            <p class="text-white font-medium">Carlos M.</p>
            <p class="text-slate-400 text-sm">Cliente de Estrategia Hipotecaria</p>
          </div>
        </div>
      </div>

      <!-- Right: Lead Magnet Form -->
      <div id="diagnostico" class="bg-[#0a0a0a] border border-blue-500/30 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
        
        <!-- Glow top -->
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none"></div>

        <div class="text-center mb-8 relative z-10">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">Solicita tu Diagnóstico</h3>
          <p class="text-slate-400 text-sm">Descubre matemáticamente cuánto tiempo e intereses puedes ahorrarle al banco.</p>
        </div>

        <form class="space-y-5 relative z-10" @submit.prevent>
          
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-slate-300 uppercase tracking-wide">Nombre Completo</label>
            <input 
              type="text" 
              placeholder="Ej. Andrés Rodríguez"
              class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-slate-300 uppercase tracking-wide">WhatsApp</label>
            <div class="flex">
              <span class="inline-flex items-center px-4 py-3 rounded-l-xl border border-r-0 border-slate-700 bg-slate-800 text-slate-400 sm:text-sm">
                +57
              </span>
              <input 
                type="tel" 
                placeholder="300 000 0000"
                class="flex-1 bg-slate-900 border border-slate-700 rounded-none rounded-r-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-slate-300 uppercase tracking-wide">Tipo de Crédito</label>
            <div class="relative">
              <select class="w-full appearance-none bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
                <option value="" disabled selected>Selecciona una opción</option>
                <option value="uvr">Hipotecario UVR</option>
                <option value="pesos">Hipotecario Pesos</option>
                <option value="leasing">Leasing Habitacional</option>
                <option value="nuevo">Aún no tengo crédito</option>
              </select>
              <!-- Custom select arrow -->
              <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform active:scale-[0.98] animate-glow-pulse flex justify-center items-center gap-2"
          >
            OBTENER MI DIAGNÓSTICO
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          
        </form>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

let ctx

onMounted(() => {
  if (!process.client) return

  ctx = gsap.context(() => {
    
    // Testimonial Fade Up
    gsap.from('.testimonial-content', {
      scrollTrigger: {
        trigger: '.testimonial-content',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    // Form Container Scale & Fade
    gsap.from('#diagnostico', {
      scrollTrigger: {
        trigger: '#diagnostico',
        start: 'top 85%',
      },
      scale: 0.95,
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<style scoped>
@keyframes glow-pulse {
  0% { box-shadow: 0 0 10px rgba(37, 99, 235, 0.5); }
  50% { box-shadow: 0 0 30px rgba(37, 99, 235, 0.8), 0 0 10px rgba(34, 211, 238, 0.6) inset; }
  100% { box-shadow: 0 0 10px rgba(37, 99, 235, 0.5); }
}

.animate-glow-pulse {
  animation: glow-pulse 2s infinite ease-in-out;
}
</style>
