<template>
  <section ref="scannerContainer" class="relative w-full bg-neutral-950" style="height: 400vh;">
    <div class="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">

      <!-- 1. The Bank Statement & Scanner Phase -->
      <div 
        ref="statementPhase"
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div class="relative w-[90%] max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
          
          <!-- Mock Statement Data (Faded/Generic) -->
          <div class="space-y-4 opacity-30 blur-[2px]">
            <div class="h-4 bg-neutral-700 rounded w-1/3 mb-8"></div>
            <div class="flex justify-between border-b border-neutral-800 pb-2">
              <span class="bg-neutral-700 h-3 w-1/4 rounded"></span>
              <span class="bg-neutral-700 h-3 w-1/4 rounded"></span>
            </div>
            <div class="flex justify-between border-b border-neutral-800 pb-2">
              <span class="bg-neutral-700 h-3 w-1/3 rounded"></span>
              <span class="bg-neutral-700 h-3 w-1/5 rounded"></span>
            </div>
            <div class="flex justify-between border-b border-neutral-800 pb-2">
              <span class="bg-neutral-700 h-3 w-1/2 rounded"></span>
              <span class="bg-neutral-700 h-3 w-1/4 rounded"></span>
            </div>
            <div class="flex justify-between border-b border-neutral-800 pb-2">
              <span class="bg-neutral-700 h-3 w-1/4 rounded"></span>
              <span class="bg-neutral-700 h-3 w-1/3 rounded"></span>
            </div>
          </div>

          <!-- Hidden Text that gets revealed by the scanner -->
          <div class="absolute inset-0 flex flex-col items-center justify-center px-8 text-center mix-blend-color-dodge">
            <div ref="revealTextWrapper" class="relative" style="clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);">
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">¿Tu deuda en UVR sube aunque pagues puntualmente?</h2>
              <p class="text-lg text-emerald-400 font-medium drop-shadow-md">
                Muchos colombianos ven con frustración cómo su saldo en pesos aumenta cada mes, alimentando al banco.
              </p>
            </div>
          </div>

          <!-- The Scanner Line -->
          <div 
            ref="scannerLine" 
            class="absolute top-0 left-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_20px_4px_rgba(52,211,153,0.8)] -translate-y-full"
          >
            <!-- Scanner gradient fade -->
            <div class="absolute bottom-full left-0 w-full h-32 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
          </div>

        </div>
      </div>

      <!-- 2. The Cross Point Phase (Appears after scanner) -->
      <div 
        ref="crossPointPhase"
        class="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none"
      >
        <!-- Alert Card -->
        <div class="glass-card mb-12 p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative max-w-3xl w-[90%] flex gap-4">
          <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400"></div>
          <span class="text-3xl">💡</span>
          <div>
            <h3 class="text-xl font-bold text-white mb-2">El Secreto que el Banco no te cuenta</h3>
            <p class="text-neutral-300 font-light text-sm md:text-base leading-relaxed">
              Los sistemas de amortización maximizan su rentabilidad sobre la inflación. Reestructurando inteligentemente tu deuda, forzamos un abono a capital puro.
            </p>
          </div>
        </div>

        <!-- Dynamic Graph -->
        <div class="relative w-[90%] max-w-4xl h-[300px] border-b border-l border-neutral-800 flex items-center justify-center">
          <svg class="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <!-- Red Line (Inflation) -->
            <path 
              ref="redPath"
              d="M 0,450 C 300,450 600,200 1000,100" 
              fill="none" 
              stroke="#ef4444" 
              stroke-width="6" 
              stroke-linecap="round"
              class="drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]"
              stroke-dasharray="2000"
              stroke-dashoffset="2000"
            />
            <!-- Blue Line (Intervention) -->
            <path 
              ref="bluePath"
              d="M 0,500 C 400,500 500,100 1000,450" 
              fill="none" 
              stroke="#3b82f6" 
              stroke-width="8" 
              stroke-linecap="round"
              class="drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
              stroke-dasharray="2000"
              stroke-dashoffset="2000"
            />
          </svg>
          
          <!-- Crossing Text -->
          <div 
            ref="crossText"
            class="absolute top-[30%] left-[60%] -translate-x-1/2 -translate-y-1/2 text-center opacity-0"
          >
            <div class="w-4 h-4 bg-white rounded-full mx-auto mb-2 shadow-[0_0_20px_rgba(255,255,255,1)]"></div>
            <p class="text-white font-bold text-lg tracking-wide drop-shadow-md">Yo te ayudo a encontrar<br/>el punto de cruce.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const scannerContainer = ref(null)

const statementPhase = ref(null)
const scannerLine = ref(null)
const revealTextWrapper = ref(null)

const crossPointPhase = ref(null)
const redPath = ref(null)
const bluePath = ref(null)
const crossText = ref(null)

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scannerContainer.value,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    })

    // Phase 1: Scanner moves down [0 to 3]
    tl.to(scannerLine.value, {
      top: '100%',
      ease: 'none',
      duration: 3
    }, 0)
    
    // Reveal text in sync with scanner [0 to 3]
    tl.to(revealTextWrapper.value, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      ease: 'none',
      duration: 3
    }, 0)

    // Fade out statement phase [3.5 to 4.5]
    tl.to(statementPhase.value, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: 'power2.inOut'
    }, 3.5)

    // Phase 2: Fade in cross point phase [4.5 to 5.5]
    tl.to(crossPointPhase.value, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }, 4.5)

    // Draw Red Line (Bank/Inflation) [5.5 to 7.5]
    tl.to(redPath.value, {
      strokeDashoffset: 0,
      ease: 'power1.inOut',
      duration: 2
    }, 5.5)

    // Draw Blue Line (Intervention) aggressively [6.5 to 8.5]
    tl.to(bluePath.value, {
      strokeDashoffset: 0,
      ease: 'power3.inOut',
      duration: 2
    }, 6.5)

    // Show Crossing text exactly when blue crosses red [7.5 to 8]
    tl.to(crossText.value, {
      opacity: 1,
      y: -10,
      duration: 0.5,
      ease: 'power2.out'
    }, 7.5)

    // Hold at the end [8.5 to 10] (done implicitly by timeline duration)
    tl.to({}, { duration: 1.5 })

  }, scannerContainer.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
