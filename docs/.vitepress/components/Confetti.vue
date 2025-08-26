<script setup lang="ts">
import confetti from 'canvas-confetti'
import { watch } from 'vue'

const props = defineProps<{
  passed: boolean
}>()
function congrats() {
  const defaults = {
    /* color from cnblog :) */
    colors: [
      '#A3DE45',
      '#FFD942',
      '#EC9281',
      '#28B5FF',
      '#2E7ACC',
    ],
    shapes: ['square'],
    ticks: 500,
  } as confetti.Options
  confetti({
    ...defaults,
    particleCount: 80,
    spread: 100,
    origin: { y: 0 },
  })
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 50,
      angle: 60,
      spread: 80,
      origin: { x: 0 },
    })
  }, 250)
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 50,
      angle: 120,
      spread: 80,
      origin: { x: 1 },
    })
  }, 400)
  // let duration = 30 * 1000;
  // let end = Date.now() + duration;
  // (function frame() {
  //     // launch a few confetti from the left edge
  //     confetti({
  //         particleCount: 7,
  //         angle: 60,
  //         spread: 55,
  //         origin: { x: 0 }
  //     });
  //     // and launch a few from the right edge
  //     confetti({
  //         particleCount: 7,
  //         angle: 120,
  //         spread: 55,
  //         origin: { x: 1 }
  //     });

  //     // keep going until we are out of time
  //     if (Date.now() < end) {
  //         requestAnimationFrame(frame);
  //     }
  // }());
}
watch(
  () => props.passed,
  (v) => {
    if (v)
      setTimeout(congrats, 300)
  },
  { flush: 'post' },
)
</script>

<template>
  <div />
</template>
