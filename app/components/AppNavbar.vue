<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-neutral-950/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        : 'bg-transparent'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[80px]">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group z-50">
        <div class="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 22h20" />
            <path d="M12 2L2 12h3v8h4v-6h6v6h4v-8h3L12 2z" />
          </svg>
        </div>
        <div class="flex flex-col leading-none">
          <span class="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase">El Arquitecto</span>
          <span class="text-sm font-semibold tracking-widest text-white uppercase">Financiero</span>
        </div>
      </NuxtLink>

      <!-- Center Navigation (Desktop) -->
      <div class="hidden lg:flex items-center gap-2">
        <div
          v-for="item in navItems"
          :key="item.label"
          class="relative"
          @mouseenter="openDropdown = item.label"
          @mouseleave="openDropdown = null"
        >
          <button
            class="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-300 rounded-full hover:text-white hover:bg-white/5"
          >
            {{ item.label }}
            <ChevronDown
              v-if="item.children"
              :class="[
                'w-3.5 h-3.5 transition-transform duration-300',
                openDropdown === item.label ? 'rotate-180 text-blue-400' : 'text-neutral-500'
              ]"
            />
          </button>

          <!-- Glassmorphism Dropdown -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4 scale-95 pointer-events-none"
            enter-to-class="opacity-100 translate-y-0 scale-100 pointer-events-auto"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-2 scale-95"
          >
            <div
              v-if="item.children && openDropdown === item.label"
              class="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[320px] bg-neutral-900/90 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] p-3 border border-white/10"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.href"
                class="flex items-start gap-4 px-4 py-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 group/link"
                @click="openDropdown = null"
              >
                <div class="mt-0.5 p-2 rounded-lg bg-neutral-800 border border-neutral-700 group-hover/link:border-blue-500/50 group-hover/link:bg-blue-500/10 transition-colors">
                  <component :is="child.icon" v-if="child.icon" class="w-4 h-4 text-neutral-400 group-hover/link:text-blue-400 transition-colors" />
                </div>
                <div>
                  <div class="text-sm font-semibold text-neutral-200 group-hover/link:text-white transition-colors">{{ child.label }}</div>
                  <div v-if="child.description" class="text-xs text-neutral-500 mt-1 leading-relaxed">{{ child.description }}</div>
                </div>
              </NuxtLink>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-4 z-50">
        <a 
          href="https://wa.me/573115998747" 
          target="_blank"
          class="hidden sm:flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-emerald-400 transition-colors duration-300"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          <span class="hidden md:inline">Contacto</span>
        </a>
        <a
          href="#diagnostico"
          class="hidden sm:inline-flex items-center px-6 py-2.5 text-sm font-bold bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
        >
          Diagnóstico Gratuito
        </a>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors relative h-10 w-10"
        >
          <div class="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
            <span :class="['w-6 h-0.5 bg-current transition-all duration-300 origin-center', isMobileMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
            <span :class="['w-6 h-0.5 bg-current transition-all duration-300', isMobileMenuOpen ? 'opacity-0' : '']"></span>
            <span :class="['w-6 h-0.5 bg-current transition-all duration-300 origin-center', isMobileMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
          </div>
        </button>
      </div>

    </nav>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 backdrop-blur-0"
      enter-to-class="opacity-100 backdrop-blur-xl"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 backdrop-blur-xl"
      leave-to-class="opacity-0 backdrop-blur-0"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-40 lg:hidden bg-black/60 pt-[80px]">
        <div class="h-full overflow-y-auto px-6 py-8 flex flex-col gap-8">
          <div v-for="item in navItems" :key="item.label" class="flex flex-col gap-4">
            <div class="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">{{ item.label }}</div>
            <NuxtLink
              v-for="child in item.children"
              :key="child.label"
              :to="child.href"
              class="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
              @click="isMobileMenuOpen = false"
            >
              <div class="p-2 rounded-lg bg-neutral-800">
                <component :is="child.icon" class="w-5 h-5 text-blue-400" />
              </div>
              <div class="text-lg font-medium text-white">{{ child.label }}</div>
            </NuxtLink>
          </div>
          
          <a
            href="#diagnostico"
            class="mt-4 w-full py-4 bg-blue-600 text-white text-center font-bold rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            @click="isMobileMenuOpen = false"
          >
            Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { ChevronDown, TrendingDown, Target, Zap, ShieldCheck, PieChart, Activity } from 'lucide-vue-next'

const isScrolled = ref(false)
const openDropdown = ref(null)
const isMobileMenuOpen = ref(false)

const navItems = [
  {
    label: 'Servicios',
    children: [
      { label: 'Estrategia Hipotecaria', description: 'Liquida tu crédito bancario en una fracción del tiempo.', icon: TrendingDown, href: '#diagnostico' },
      { label: 'Optimización de Liquidez', description: 'Gestión matemática para liberar capital mensual.', icon: Target, href: '#diagnostico' },
      { label: 'Inteligencia de Negocios', description: 'Modelos de datos aplicados a tu emprendimiento.', icon: PieChart, href: '#diagnostico' },
    ]
  },
  {
    label: 'El Método',
    children: [
      { label: 'Algoritmo de Amortización', description: 'Cómo hackeamos la UVR usando inteligencia de datos.', icon: Activity, href: '#diagnostico' },
      { label: 'Blindaje Patrimonial', description: 'Mitiga riesgos y acelera tu retiro financiero.', icon: ShieldCheck, href: '#diagnostico' },
    ]
  },
  {
    label: 'Resultados',
    children: [
      { label: 'Casos de Éxito', description: 'Familias que han recuperado su libertad financiera.', icon: Zap, href: '#diagnostico' },
    ]
  }
]

// Lock scroll when mobile menu is open
watch(isMobileMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
