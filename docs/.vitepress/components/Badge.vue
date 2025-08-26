<script lang='ts' setup>
defineProps<{
  text: string
}>()
</script>

<template>
  <span class="bg-green-500 rounded px-2 text-sm align-top font-normal text-white">{{ text }}</span>
</template>
