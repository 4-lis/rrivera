<template>
  <main class="w-full relative">
    <HeroHook />
    <UVRScanner />
    <ArchitectProfile />
    <BentoServices />
    <ConversionWall />
    <FooterBase />
  </main>
</template>

<script setup>
import HeroHook from '~/components/HeroHook.vue'
import UVRScanner from '~/components/UVRScanner.vue'
import ArchitectProfile from '~/components/ArchitectProfile.vue'
import BentoServices from '~/components/BentoServices.vue'
import ConversionWall from '~/components/ConversionWall.vue'
import FooterBase from '~/components/FooterBase.vue'

useHead({
  title: 'El Arquitecto Financiero — Construye tu libertad',
  meta: [
    { name: 'description', content: 'No dejes que tu casa sea del banco por 30 años. Inteligencia financiera para la construcción de tu libertad.' }
  ]
})
</script>
