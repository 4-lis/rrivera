<template>
  <!--
    StickyFeatures — "Everything you do with money" section.

    Fix: The outer container is flex with align-items:start so the LEFT column
    can be sticky. Previously it was missing `items-start` which caused
    `position: sticky` to have no effect inside a flex parent.

    Fix: gsap.utils.toArray uses the scoped ref wrapper as the scope
    argument to prevent selector leakage into HeroZoom.

    Fix: scan-line uses `transform: translateY()` instead of animating `top`
    so the animation runs on the GPU compositor thread.
  -->
  <section ref="wrapper" class="sf-wrapper bg-[#0a0a0a] text-white relative" style="min-height: 320vh;">
    <div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-start">

      <!-- ── Left column (sticky) ───────────────────────────────────── -->
      <div class="md:w-[38%] sticky top-0 pt-32 pb-16 self-start min-h-screen flex flex-col justify-center z-20 shrink-0">
        <!-- Overline -->
        <p class="text-xs tracking-[0.2em] uppercase text-mercury-muted mb-6 font-medium">Platform</p>
        <h2 class="text-4xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.05] mb-12">
          Everything<br />you do<br />with money.
        </h2>

        <!-- Scroll-spy nav — desktop only -->
        <nav class="hidden md:flex flex-col gap-5" aria-label="Feature navigation">
          <button
            v-for="(item, i) in navItems" :key="i"
            class="sf-nav-btn text-left transition-all duration-500 ease-out group flex items-center gap-4"
            :class="activeIndex === i ? 'text-white' : 'text-mercury-dim hover:text-mercury-muted'"
            @click="scrollToPanel(i)"
          >
            <!-- Active indicator bar -->
            <span
              class="block h-px shrink-0 transition-all duration-500 ease-out rounded-full"
              :class="activeIndex === i ? 'w-10 bg-white' : 'w-4 bg-mercury-dim'"
            ></span>
            <span class="text-xl md:text-2xl font-medium">{{ item.title }}</span>
          </button>
        </nav>
      </div>

      <!-- ── Right column (scrolls naturally) ──────────────────────── -->
      <div class="flex-1 flex flex-col gap-[30vh] md:gap-[40vh] pt-[20vh] pb-[30vh]">

        <!-- Panel 0 — Corporate Cards ──────────────────────────────── -->
        <article
          class="feature-panel sf-panel relative rounded-3xl border border-[#1f1f1f] overflow-hidden bg-[#111]"
          style="min-height: 65vh;"
          data-sf-index="0"
        >
          <!-- Gradient bg -->
          <div class="absolute inset-0 bg-gradient-to-br from-[#1a1040]/80 via-[#111] to-[#0d1a33]/60 pointer-events-none"></div>
          <!-- Glow blobs -->
          <div class="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-700/10 blur-[80px] pointer-events-none"></div>
          <div class="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-purple-700/10 blur-[60px] pointer-events-none"></div>

          <div class="relative z-10 h-full flex flex-col items-center justify-center p-10 md:p-16 gap-10">
            <p class="text-[10px] tracking-[0.2em] uppercase text-mercury-muted font-medium">Corporate Cards</p>
            <h3 class="text-2xl md:text-3xl font-serif text-center">Spend with precision</h3>
            <p class="text-mercury-muted text-sm md:text-base text-center max-w-sm leading-relaxed">
              Issue unlimited virtual and physical cards. Set real-time limits per team, per vendor.
            </p>

            <!-- Card stack -->
            <div class="cards-stack relative" style="width: 300px; height: 188px;">
              <!-- Card 1 — base (gray) -->
              <div
                class="card-1 absolute inset-0 rounded-2xl gpu-layer flex flex-col justify-between p-6"
                style="background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%); box-shadow: 0 24px 60px rgba(0,0,0,0.6); z-index: 10;"
              >
                <div class="flex justify-between items-start">
                  <div class="card-chip"></div>
                  <span class="text-[9px] tracking-widest uppercase text-white/40">Mercury</span>
                </div>
                <div>
                  <span class="text-base font-mono tracking-[0.18em] text-white/50">•••• •••• •••• 1234</span>
                </div>
              </div>

              <!-- Card 2 — mid (blue) -->
              <div
                class="card-2 absolute inset-0 rounded-2xl gpu-layer flex flex-col justify-between p-6"
                style="background: linear-gradient(135deg, #1e3a8a 0%, #312e81 100%); box-shadow: 0 24px 60px rgba(0,0,0,0.6); z-index: 20;"
              >
                <div class="flex justify-between items-start">
                  <div class="card-chip"></div>
                  <span class="text-[9px] tracking-widest uppercase text-blue-200/60">Mercury</span>
                </div>
                <div>
                  <span class="text-base font-mono tracking-[0.18em] text-blue-100/70">•••• •••• •••• 5678</span>
                </div>
              </div>

              <!-- Card 3 — top (white/cream) -->
              <div
                class="card-3 absolute inset-0 rounded-2xl gpu-layer flex flex-col justify-between p-6"
                style="background: linear-gradient(135deg, #f8f7f4 0%, #e8e6e1 100%); box-shadow: 0 30px 70px rgba(0,0,0,0.7); z-index: 30;"
              >
                <div class="flex justify-between items-start">
                  <div class="card-chip"></div>
                  <span class="text-[9px] tracking-widest uppercase text-gray-500 font-bold">Mercury</span>
                </div>
                <div>
                  <span class="text-base font-mono tracking-[0.18em] text-gray-700">•••• •••• •••• 9012</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Panel 1 — Invoicing ─────────────────────────────────────── -->
        <article
          class="feature-panel sf-panel relative rounded-3xl border border-[#1f1f1f] overflow-hidden bg-[#111]"
          style="min-height: 65vh;"
          data-sf-index="1"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-[#0d2618]/80 via-[#111] to-[#111] pointer-events-none"></div>
          <div class="absolute -top-20 right-0 w-64 h-64 rounded-full bg-emerald-600/10 blur-[70px] pointer-events-none"></div>

          <div class="relative z-10 h-full flex flex-col items-center justify-center p-10 md:p-16 gap-10">
            <p class="text-[10px] tracking-[0.2em] uppercase text-mercury-muted font-medium">Invoicing</p>
            <h3 class="text-2xl md:text-3xl font-serif text-center">Get paid, automatically</h3>
            <p class="text-mercury-muted text-sm md:text-base text-center max-w-sm leading-relaxed">
              Create professional invoices in seconds. Auto-reconcile payments. Know exactly who owes what.
            </p>

            <!-- Invoice mockup with scan line -->
            <div
              class="invoice-container relative overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d]"
              style="width: 240px; height: 300px;"
            >
              <!-- Scan line — uses transform so animation is GPU-composited -->
              <div
                class="scan-line absolute left-0 w-full h-[3px] pointer-events-none z-20"
                style="
                  background: linear-gradient(90deg, transparent 0%, #4ade80 30%, #86efac 50%, #4ade80 70%, transparent 100%);
                  box-shadow: 0 0 16px 4px rgba(74,222,128,0.35);
                  top: 0;
                  transform: translateY(0);
                "
              ></div>

              <div class="p-5 space-y-4 relative z-10">
                <!-- Invoice header -->
                <div class="flex justify-between items-start">
                  <div>
                    <div class="w-8 h-8 rounded-md bg-[#1f1f1f] mb-2"></div>
                    <div class="w-20 h-2 bg-[#1f1f1f] rounded"></div>
                  </div>
                  <div class="text-right space-y-1">
                    <div class="w-16 h-2 bg-[#1f1f1f] rounded ml-auto"></div>
                    <div class="w-10 h-2 bg-[#1f1f1f] rounded ml-auto"></div>
                    <div class="w-14 h-2 bg-[#1f1f1f] rounded ml-auto"></div>
                  </div>
                </div>
                <!-- Line items -->
                <div class="border-t border-[#1f1f1f] pt-3 space-y-2.5">
                  <div v-for="w in [60, 80, 50]" :key="w" class="flex justify-between items-center">
                    <div class="h-2 bg-[#1f1f1f] rounded" :style="{ width: w + '%' }"></div>
                    <div class="w-10 h-2 bg-[#1f1f1f] rounded"></div>
                  </div>
                </div>
                <!-- Total -->
                <div class="border-t border-[#2a2a2a] pt-3 flex justify-between items-center">
                  <div class="w-10 h-2 bg-[#1f1f1f] rounded"></div>
                  <div class="px-2 py-1 rounded-md bg-emerald-900/50 border border-emerald-700/30">
                    <div class="text-[10px] text-emerald-400 font-medium">$4,200.00</div>
                  </div>
                </div>
                <!-- Status badge -->
                <div class="flex justify-end">
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-900/30 border border-emerald-700/20 text-emerald-400 text-[9px] font-medium">
                    <span class="w-1 h-1 rounded-full bg-emerald-400 inline-block"></span> Paid
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Panel 2 — Treasury ──────────────────────────────────────── -->
        <article
          class="feature-panel sf-panel relative rounded-3xl border border-[#1f1f1f] overflow-hidden bg-[#111]"
          style="min-height: 65vh;"
          data-sf-index="2"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-[#1a0d0a]/80 via-[#111] to-[#0a0a1a]/60 pointer-events-none"></div>
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-orange-600/8 blur-[80px] pointer-events-none"></div>

          <div class="relative z-10 h-full flex flex-col items-center justify-center p-10 md:p-16 gap-10 text-center">
            <p class="text-[10px] tracking-[0.2em] uppercase text-mercury-muted font-medium">Treasury</p>
            <h3 class="text-2xl md:text-3xl font-serif">Put idle cash to work</h3>
            <p class="text-mercury-muted text-sm md:text-base max-w-sm leading-relaxed">
              Earn a competitive yield on your operating capital with Mercury Treasury, automatically.
            </p>

            <!-- Yield display card -->
            <div class="treasury-card rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-8 md:p-10 w-full max-w-[280px]">
              <div class="text-[9px] tracking-[0.2em] uppercase text-mercury-muted mb-3 font-medium">Current APY</div>
              <div class="treasury-amount text-6xl md:text-7xl font-light text-white tracking-tight leading-none mb-1">
                5.42%
              </div>
              <div class="text-[10px] text-mercury-muted mt-3">Annual Percentage Yield · Updated daily</div>
              <!-- Progress bar -->
              <div class="mt-5 h-px w-full bg-[#1f1f1f] rounded-full overflow-hidden">
                <div class="treasury-bar h-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" style="width: 0%"></div>
              </div>
            </div>
          </div>
        </article>

      </div><!-- /right column -->
    </div><!-- /grid -->
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const navItems = [
  { title: 'Corporate Cards' },
  { title: 'Invoicing' },
  { title: 'Treasury' },
]

const activeIndex = ref(0)
const wrapper     = ref(null)

// Store refs to panel elements to allow click-scroll
const panelRefs   = ref([])

function scrollToPanel(i) {
  const panels = wrapper.value?.querySelectorAll('.sf-panel')
  if (panels?.[i]) {
    panels[i].scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    // ── Scroll spy: scope selector to this component's wrapper ───────
    const panels = gsap.utils.toArray('.sf-panel', wrapper.value)

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start:   'top 55%',
        end:     'bottom 55%',
        onToggle: self => { if (self.isActive) activeIndex.value = i },
      })
    })

    // ── Panel reveal (fade + lift) ────────────────────────────────────
    panels.forEach(panel => {
      gsap.fromTo(panel,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            start:   'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })

    // ── Card stack: parallax scrub ────────────────────────────────────
    const cardPanel = wrapper.value?.querySelector('.sf-panel[data-sf-index="0"]')
    if (cardPanel) {
      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: cardPanel,
          start: 'top 80%',
          end:   'bottom 20%',
          scrub: 1.5,
        },
      })
      cardTl
        .to('.card-1', { y: -30, x: -25, rotationZ: -6,  ease: 'none' }, 0)
        .to('.card-2', { y:  10, x:  10, rotationZ:  3,  ease: 'none' }, 0)
        .to('.card-3', { y:  50, x:  50, rotationZ:  12, ease: 'none' }, 0)
    }

    // ── Invoice scan line: GPU-composited translateY animation ────────
    const invoicePanel = wrapper.value?.querySelector('.sf-panel[data-sf-index="1"]')
    if (invoicePanel) {
      const scanLine = invoicePanel.querySelector('.scan-line')
      if (scanLine) {
        gsap.fromTo(scanLine,
          { y: 0 },
          {
            y: 300,           // height of the invoice container
            duration: 2.2,
            repeat: -1,
            ease: 'none',
            scrollTrigger: {
              trigger: invoicePanel,
              start:   'top 90%',
              end:     'bottom 10%',
              toggleActions: 'play pause resume pause',
            },
          },
        )
      }
    }

    // ── Treasury: number pop + progress bar fill ──────────────────────
    const treasuryPanel = wrapper.value?.querySelector('.sf-panel[data-sf-index="2"]')
    if (treasuryPanel) {
      const tTl = gsap.timeline({
        scrollTrigger: {
          trigger: treasuryPanel,
          start:   'top 60%',
          toggleActions: 'play none none reverse',
        },
      })
      tTl
        .from(treasuryPanel.querySelector('.treasury-amount'), {
          scale: 0.75,
          opacity: 0,
          duration: 0.9,
          ease: 'back.out(1.5)',
        }, 0)
        .to(treasuryPanel.querySelector('.treasury-bar'), {
          width: '68%',
          duration: 1.4,
          ease: 'power3.out',
        }, 0.15)
    }

  }, wrapper.value) // ← scoped to this component
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
