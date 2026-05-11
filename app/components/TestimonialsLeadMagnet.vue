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

  <!-- Footer -->
  <footer class="bg-[#0a0a0a] py-12 border-t border-[#1f1f1f]">
    <div class="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center">
      
      <!-- Socials -->
      <div class="flex items-center gap-6 mb-8">
        <a href="#" class="text-slate-400 hover:text-white transition-colors">
          <span class="sr-only">TikTok</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.41-5.46.03-1.07.28-2.13.76-3.09 1.05-2.07 3.09-3.49 5.37-3.7 1.09-.1 2.2.04 3.23.41v4.06c-.84-.5-1.92-.61-2.85-.35-.91.24-1.63.88-2.03 1.73-.39.81-.46 1.77-.18 2.62.28.84.88 1.52 1.66 1.91.81.4 1.76.47 2.62.19.85-.28 1.53-.88 1.93-1.69.4-.81.47-1.76.19-2.61l.01-15.34z"/></svg>
        </a>
        <a href="#" class="text-slate-400 hover:text-white transition-colors">
          <span class="sr-only">LinkedIn</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="https://wa.me/573115998747" target="_blank" class="text-slate-400 hover:text-emerald-400 transition-colors">
          <span class="sr-only">WhatsApp</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        </a>
      </div>

      <p class="text-xl md:text-2xl text-white font-medium mb-10 text-center tracking-wide">
        Si no está funcionando, hay que reinventarlo.
      </p>

      <p class="text-xs text-slate-600 text-center uppercase tracking-widest">
        © 2026 El Arquitecto Financiero. Cumplimiento con Ley de Vivienda 546/99.
      </p>
    </div>
  </footer>
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
