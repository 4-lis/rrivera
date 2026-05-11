<template>
  <footer class="bg-mercury-dark text-white">
    <!-- Main Footer Content -->
    <div class="container-main pt-20 pb-12">
      <!-- Logo -->
      <div class="mb-12">
        <NuxtLink to="/" class="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="13" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <circle cx="14" cy="14" r="5" fill="currentColor"/>
            <circle cx="14" cy="5" r="1.5" fill="currentColor"/>
            <circle cx="22" cy="18" r="1.5" fill="currentColor"/>
            <circle cx="6" cy="18" r="1.5" fill="currentColor"/>
          </svg>
          <span class="text-sm font-semibold tracking-[0.15em] uppercase">MERCURY</span>
        </NuxtLink>
      </div>

      <!-- Links Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
        <!-- Banking -->
        <div>
          <h4 class="text-sm font-medium mb-4">Banking</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Business Checking & Savings</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Treasury</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Business Credit Cards</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Working Capital Loans</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Venture Debt</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Personal Banking</a></li>
          </ul>
        </div>

        <!-- Platform -->
        <div>
          <h4 class="text-sm font-medium mb-4">Platform</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Switch to Mercury</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Security</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">API</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Perks</a></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="text-sm font-medium mb-4">Resources</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Meridian</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Tools</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Events</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Business Formation Resources</a></li>
          </ul>
        </div>

        <!-- Solutions -->
        <div>
          <h4 class="text-sm font-medium mb-4">Solutions</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Ecommerce</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Agencies, Consultants & Firms</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">SaaS</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">VC Funds</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Crypto</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">LLCs</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Life Science</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Accounting Firms</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Climate</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Real Estate & Construction</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Healthcare Services</a></li>
          </ul>
        </div>

        <!-- Account & About -->
        <div>
          <h4 class="text-sm font-medium mb-4">Account</h4>
          <ul class="space-y-2.5 mb-8">
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Open Account</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Log In</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">iOS</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Android</a></li>
          </ul>

          <h4 class="text-sm font-medium mb-4">About</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">How Mercury Works</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Partnerships</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Legal</a></li>
            <li><a href="#" class="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-white/10 pt-8">
        <!-- Social Links -->
        <div class="flex items-center gap-6 mb-8">
          <span class="text-sm text-white/40">Follow Us</span>
          <div class="flex items-center gap-4">
            <a href="#" class="text-white/40 hover:text-white transition-colors">
              <span class="text-sm">X</span>
            </a>
            <a href="#" class="text-white/40 hover:text-white transition-colors">
              <span class="text-sm">LinkedIn</span>
            </a>
            <a href="#" class="text-white/40 hover:text-white transition-colors">
              <span class="text-sm">YouTube</span>
            </a>
            <a href="#" class="text-white/40 hover:text-white transition-colors">
              <span class="text-sm">Instagram</span>
            </a>
            <a href="#" class="text-white/40 hover:text-white transition-colors">
              <span class="text-sm">TikTok</span>
            </a>
          </div>
        </div>

        <!-- Disclaimers -->
        <div class="space-y-4 text-[11px] text-white/40 leading-relaxed">
          <p>
            Mercury is a fintech company, not an FDIC-insured bank. Banking services provided through
            <a href="#" class="underline hover:text-white/60">Choice Financial Group</a> and
            <a href="#" class="underline hover:text-white/60">Column N.A.</a>, Members FDIC.
          </p>
          <p>
            Mercury Treasury is designed to earn yield on idle cash up to 3.66% annually. This yield is based on the 30-day SEC Yield for MULSX as of 04/30/2026, and assumes total Mercury deposits of $20M+. Treasury accounts are subject to a monthly fee of 0.15%-0.60%, based on total Mercury balances.
          </p>
          <p>
            The IO Card is issued by Patriot Bank, N.A., Member FDIC, pursuant to a license from Mastercard International Incorporated.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
