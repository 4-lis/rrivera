import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let gsapInitialized = false

export function useGsap() {
  if (!gsapInitialized && process.client) {
    gsap.registerPlugin(ScrollTrigger)
    gsapInitialized = true
  }
  return { gsap, ScrollTrigger }
}
