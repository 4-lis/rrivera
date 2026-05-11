<template>
  <section class="relative py-24 md:py-32 bg-neutral-950 overflow-hidden">
    
    <!-- Abstract animated background for the glassmorphism -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-40">
      <div class="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full animate-pulse" style="animation-duration: 8s;"></div>
      <div class="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-emerald-500/20 blur-[150px] rounded-full animate-pulse" style="animation-duration: 10s; animation-delay: 2s;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
      
      <!-- Left: Giant Testimonial -->
      <div ref="testimonyCol" class="lg:col-span-7 relative">
        <div class="absolute -top-16 -left-8 text-[15rem] text-neutral-800/40 font-serif leading-none pointer-events-none select-none">"</div>
        
        <h2 class="testimony-text text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white mb-10 leading-[1.1] relative z-10 opacity-0 translate-y-8">
          De una condena de <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 line-through decoration-red-500/50">20 años</span> a la libertad en <span class="text-emerald-400">12</span>.
        </h2>
        
        <div class="testimony-author flex items-center gap-5 relative z-10 opacity-0 translate-y-8">
          <div class="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-700 overflow-hidden flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-neutral-500"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div>
            <p class="text-white font-medium text-lg">Caso de Éxito Real</p>
            <p class="text-neutral-400">Cliente de Estrategia Hipotecaria</p>
          </div>
        </div>
      </div>

      <!-- Right: Glassmorphism Form Wall -->
      <div ref="formCol" class="lg:col-span-5 opacity-0 translate-y-12">
        <div class="p-8 md:p-10 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
          
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-white mb-2">📈 ¿Listo para ver cuánto puedes ahorrar?</h3>
            <p class="text-neutral-300 text-sm font-light">Solicita tu diagnóstico financiero gratuito.</p>
          </div>

          <form class="space-y-6" @submit.prevent>
            
            <div class="space-y-1 relative group">
              <input 
                type="text" 
                required
                placeholder=" "
                class="peer w-full bg-transparent border-0 border-b-2 border-neutral-600 px-0 py-3 text-white placeholder-transparent focus:ring-0 focus:border-blue-500 transition-colors"
              />
              <label class="absolute left-0 top-3 text-neutral-400 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-3.5 peer-valid:text-xs">
                Nombre Completo
              </label>
            </div>

            <div class="space-y-1 relative group">
              <div class="flex items-end">
                <span class="pb-3 text-neutral-500 mr-2 text-sm">+57</span>
                <input 
                  type="tel" 
                  required
                  placeholder=" "
                  class="peer w-full bg-transparent border-0 border-b-2 border-neutral-600 px-0 py-3 text-white placeholder-transparent focus:ring-0 focus:border-blue-500 transition-colors"
                />
                <label class="absolute left-8 top-3 text-neutral-400 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-3.5 peer-valid:text-xs">
                  WhatsApp
                </label>
              </div>
            </div>

            <div class="space-y-1 relative pt-4">
              <label class="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Tipo de Crédito</label>
              <select class="w-full bg-transparent border-0 border-b-2 border-neutral-600 px-0 py-3 text-white focus:ring-0 focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                <option value="uvr" class="bg-neutral-900">Hipotecario UVR</option>
                <option value="pesos" class="bg-neutral-900">Hipotecario Pesos</option>
                <option value="leasing" class="bg-neutral-900">Leasing Habitacional</option>
              </select>
            </div>

            <button 
              type="submit"
              class="w-full mt-8 bg-blue-600 text-white font-bold tracking-wide py-4 px-6 rounded-xl transition-all duration-300 transform active:scale-95 animate-pulse-glow flex justify-center items-center gap-2"
            >
              OBTENER MI DIAGNÓSTICO
            </button>
            
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const testimonyCol = ref(null)
const formCol = ref(null)

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    
    // Testimony Entrance
    gsap.to(['.testimony-text', '.testimony-author'], {
      scrollTrigger: {
        trigger: testimonyCol.value,
        start: 'top 80%',
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    })

    // Form Entrance
    gsap.to(formCol.value, {
      scrollTrigger: {
        trigger: formCol.value,
        start: 'top 85%',
      },
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    })

  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<style scoped>
@keyframes pulse-glow {
  0% { box-shadow: 0 0 15px rgba(37, 99, 235, 0.4); }
  50% { box-shadow: 0 0 35px rgba(37, 99, 235, 0.9), inset 0 0 10px rgba(255,255,255,0.2); }
  100% { box-shadow: 0 0 15px rgba(37, 99, 235, 0.4); }
}

.animate-pulse-glow {
  animation: pulse-glow 2s infinite ease-in-out;
}
</style>
