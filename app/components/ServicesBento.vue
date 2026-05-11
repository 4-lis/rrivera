<template>
  <section class="py-24 px-6 lg:px-12 bg-[#0a0a0a]">
    <div class="max-w-6xl mx-auto w-full">
      
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-slate-50 mb-4">Servicios Integrales</h2>
        <p class="text-slate-400 max-w-xl mx-auto text-lg">Soluciones de alto nivel estructuradas con ingeniería de datos y rigor matemático.</p>
      </div>

      <!-- Bento Grid Container -->
      <div class="bento-container grid grid-cols-1 md:grid-cols-3 gap-6 group">
        
        <!-- Main Highlight Card -->
        <div class="bento-card md:col-span-2 md:row-span-2 relative rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-12 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] cursor-pointer group-hover:opacity-50 hover:!opacity-100">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 transition-opacity duration-500 hover-target:opacity-100"></div>
          <div class="relative z-10 flex flex-col h-full justify-end">
            <div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-blue-400"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">Estrategia Hipotecaria</h3>
            <p class="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Rediseñamos la estructura de tu deuda con el banco. Aplicamos abonos inteligentes y reestructuración de UVR/Pesos para que liquides tu crédito en una fracción del tiempo estipulado.
            </p>
          </div>
          <!-- Tech glow effect -->
          <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/30 blur-[80px] rounded-full pointer-events-none"></div>
        </div>

        <!-- Secondary Card 1 -->
        <div class="bento-card relative rounded-3xl bg-slate-900 border border-slate-800 p-8 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] cursor-pointer group-hover:opacity-50 hover:!opacity-100">
          <div class="relative z-10">
            <div class="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-cyan-400"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Optimización de Liquidez</h3>
            <p class="text-slate-400 font-light text-sm leading-relaxed">
              Gestión matemática de tu flujo de caja para liberar capital mensual atrapado en intereses y gastos invisibles.
            </p>
          </div>
        </div>

        <!-- Secondary Card 2 -->
        <div class="bento-card relative rounded-3xl bg-slate-900 border border-slate-800 p-8 overflow-hidden transition-all duration-500 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] cursor-pointer group-hover:opacity-50 hover:!opacity-100">
          <div class="relative z-10">
            <div class="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 border border-violet-500/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-violet-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Inteligencia de Negocios</h3>
            <p class="text-slate-400 font-light text-sm leading-relaxed">
              Modelos predictivos y análisis de datos aplicados a las finanzas de tu emprendimiento o consultoría.
            </p>
          </div>
        </div>

        <!-- Secondary Card 3 -->
        <div class="bento-card md:col-span-3 relative rounded-3xl bg-slate-900 border border-slate-800 p-8 overflow-hidden transition-all duration-500 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] cursor-pointer group-hover:opacity-50 hover:!opacity-100 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div class="w-14 h-14 shrink-0 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-emerald-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Mentoría para Profesionales (+40)</h3>
            <p class="text-slate-400 font-light text-base leading-relaxed max-w-3xl">
              Diseñado exclusivamente para profesionales que buscan solidificar su patrimonio en su etapa de mayor generación de ingresos, mitigando riesgos de mercado y estructurando un retiro anticipado sólido.
            </p>
          </div>
          <div class="shrink-0 mt-4 md:mt-0">
             <button class="px-6 py-2.5 rounded-full bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors">
               Agendar sesión
             </button>
          </div>
        </div>

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
    // Fade up animation for the bento cards
    gsap.from('.bento-card', {
      scrollTrigger: {
        trigger: '.bento-container',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
