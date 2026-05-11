<template>
  <div 
    class="relative w-full max-w-[325px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center"
  >
    <blockquote 
      class="tiktok-embed" 
      :cite="videoUrl" 
      :data-video-id="videoId" 
      style="max-width: 605px; min-width: 325px;"
    > 
      <section> 
        <slot />
      </section> 
    </blockquote>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

const props = defineProps({
  videoUrl: String,
  videoId: String
})

useHead({
  script: [
    { src: 'https://www.tiktok.com/embed.js', async: true }
  ]
})
</script>
