<template>
  <!--
    DashboardMockup — rendered inside the laptop-screen-portal.
    All sizes are intentionally small (text-[10px], etc.) because
    the portal itself is tiny; GSAP zoom makes it fill the viewport.
    Breakpoints DON'T help here — the container is always ~400px wide
    at most, so we use container-relative sizing only.
  -->
  <div class="dashboard-root w-full h-full bg-[#0a0a0a] text-white flex overflow-hidden select-none" style="font-size: 11px; font-family: 'Inter', sans-serif;">

    <!-- ── Sidebar ──────────────────────────────────────────────────── -->
    <aside class="db-elem w-[22%] bg-[#0d0d0d] flex flex-col justify-between border-r border-[#1f1f1f] p-3 shrink-0">
      <!-- Logo -->
      <div>
        <div class="flex items-center gap-1.5 mb-5">
          <div class="w-5 h-5 rounded bg-white text-black flex items-center justify-center font-bold text-[10px]">M</div>
          <span class="font-semibold text-[11px] text-white">Mercury</span>
        </div>
        <!-- Nav -->
        <nav class="space-y-0.5">
          <a href="#" class="flex items-center gap-1.5 px-2 py-1.5 rounded-[4px] bg-[#1a1a1a] border border-[#2a2a2a] text-white font-medium shadow-sm">
            <span class="w-2 h-2 rounded-full bg-white shrink-0"></span> Home
          </a>
          <a href="#" class="flex items-center gap-1.5 px-2 py-1.5 rounded-[4px] text-white/50 hover:text-white/80 transition-colors">
            <span class="w-2 h-2 rounded-full bg-white/20 shrink-0"></span> Transactions
          </a>
          <a href="#" class="flex items-center gap-1.5 px-2 py-1.5 rounded-[4px] text-white/50 hover:text-white/80 transition-colors">
            <span class="w-2 h-2 rounded-full bg-white/20 shrink-0"></span> Payments
          </a>
          <a href="#" class="flex items-center gap-1.5 px-2 py-1.5 rounded-[4px] text-white/50 hover:text-white/80 transition-colors">
            <span class="w-2 h-2 rounded-full bg-white/20 shrink-0"></span> Cards
          </a>
          <a href="#" class="flex items-center gap-1.5 px-2 py-1.5 rounded-[4px] text-white/50 hover:text-white/80 transition-colors">
            <span class="w-2 h-2 rounded-full bg-white/20 shrink-0"></span> Team
          </a>
        </nav>
      </div>
      <!-- User -->
      <div class="flex items-center gap-1.5">
        <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.3)]"></div>
        <div>
          <div class="text-[10px] font-medium leading-none text-white/90">Jane D.</div>
          <div class="text-[9px] text-white/40 mt-0.5">jane@startup.inc</div>
        </div>
      </div>
    </aside>

    <!-- ── Main area ─────────────────────────────────────────────────── -->
    <main class="flex-1 flex flex-col overflow-hidden bg-[#0a0a0a]">

      <!-- Top bar -->
      <div class="db-elem flex items-center justify-between px-4 py-2.5 border-b border-[#1f1f1f] shrink-0 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div>
          <div class="text-[13px] font-semibold text-white leading-none">Welcome back, Jane</div>
          <div class="text-[9px] text-white/40 mt-0.5">Friday, May 10 · Operations account</div>
        </div>
        <div class="flex items-center gap-2">
          <button class="px-2 py-1 rounded-[4px] bg-white text-black text-[9px] font-medium shadow-sm hover:bg-gray-200 transition-colors">+ Send</button>
          <div class="w-6 h-6 rounded-full bg-[#161616] flex items-center justify-center border border-[#2a2a2a] text-white/60 hover:text-white transition-colors cursor-pointer">
             <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="flex-1 overflow-y-auto p-3 space-y-2.5">

        <!-- Balance hero card -->
        <div class="db-elem relative rounded-xl bg-[#111] border border-[#222] shadow-[0_4px_20px_rgba(0,0,0,0.5)] p-3 overflow-hidden">
          <!-- Gradient accent -->
          <div class="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-500/10 blur-2xl pointer-events-none"></div>
          <div class="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-violet-500/10 blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10">
            <div class="text-[9px] text-white/50 mb-1 font-semibold tracking-wide uppercase">Total Balance</div>
            <div class="text-[22px] font-light text-white leading-none mb-3 tracking-tight">$5,216,471.50</div>

            <!-- Mini bar chart -->
            <div class="flex items-end gap-[3px] h-10 w-full">
              <div v-for="(h, i) in chartBars" :key="i"
                   class="flex-1 rounded-t-[2px] relative transition-all duration-300"
                   :style="{ height: h + '%', background: i === chartBars.length-1 ? '#3b82f6' : '#222' }">
              </div>
            </div>
            <!-- X-axis labels -->
            <div class="flex justify-between mt-1">
              <span v-for="m in ['Nov','Dec','Jan','Feb','Mar','Apr','May']" :key="m" class="text-[7px] text-white/30 font-medium">{{ m }}</span>
            </div>
          </div>
        </div>

        <!-- Two-col grid -->
        <div class="grid grid-cols-2 gap-2">

          <!-- Received card -->
          <div class="db-elem rounded-xl bg-[#111] border border-[#222] shadow-[0_4px_15px_rgba(0,0,0,0.3)] p-3 relative overflow-hidden">
             <div class="absolute top-0 left-0 w-1 h-full bg-emerald-500/50"></div>
            <div class="text-[9px] text-white/50 mb-1.5 font-semibold uppercase tracking-wide">Received</div>
            <div class="text-[15px] font-semibold text-emerald-400 leading-none">+$124,800</div>
            <div class="text-[8px] text-white/40 mt-1 flex items-center gap-1">
               <span class="text-emerald-400/80 font-bold">↑ 12%</span> vs last month
            </div>
          </div>

          <!-- Sent card -->
          <div class="db-elem rounded-xl bg-[#111] border border-[#222] shadow-[0_4px_15px_rgba(0,0,0,0.3)] p-3 relative overflow-hidden">
             <div class="absolute top-0 left-0 w-1 h-full bg-white/10"></div>
            <div class="text-[9px] text-white/50 mb-1.5 font-semibold uppercase tracking-wide">Sent</div>
            <div class="text-[15px] font-semibold text-white/80 leading-none">-$38,240</div>
            <div class="text-[8px] text-white/40 mt-1 flex items-center gap-1">
               <span class="text-white/60 font-bold">↓ 4%</span> vs last month
            </div>
          </div>
        </div>

        <!-- Recent transactions -->
        <div class="db-elem rounded-xl bg-[#111] border border-[#222] shadow-[0_4px_15px_rgba(0,0,0,0.3)] p-3">
          <div class="text-[9px] text-white/70 mb-2 uppercase tracking-wide font-semibold border-b border-[#222] pb-2">Recent Transactions</div>
          <div class="space-y-2 mt-2">
            <div v-for="tx in transactions" :key="tx.name" class="flex items-center justify-between group cursor-pointer hover:bg-[#1a1a1a] -mx-1 px-1 py-0.5 rounded transition-colors">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold border border-white/5"
                     :style="{ background: tx.color + '25', color: tx.color }">
                  {{ tx.name[0] }}
                </div>
                <div>
                  <div class="text-[10px] font-semibold text-white/90 leading-none group-hover:text-white transition-colors">{{ tx.name }}</div>
                  <div class="text-[8px] text-white/40 mt-0.5 font-medium">{{ tx.category }}</div>
                </div>
              </div>
              <div class="text-[10px] font-bold" :class="tx.positive ? 'text-emerald-400' : 'text-white/70'">
                {{ tx.positive ? '+' : '' }}{{ tx.amount }}
              </div>
            </div>
          </div>
        </div>

      </div><!-- /body -->
    </main><!-- /main -->

  </div>
</template>

<script setup>
// All data is static — this component is purely presentational.
const chartBars = [28, 45, 35, 62, 55, 80, 72]

const transactions = [
  { name: 'Stripe',  category: 'Payout',   amount: '$24,500', positive: true,  color: '#818cf8' },
  { name: 'AWS',     category: 'Cloud',     amount: '-$1,240', positive: false, color: '#fbbf24' },
  { name: 'Notion',  category: 'SaaS',      amount: '-$320',   positive: false, color: '#a78bfa' },
  { name: 'Vercel',  category: 'Hosting',   amount: '-$180',   positive: false, color: '#94a3b8' },
]
</script>
