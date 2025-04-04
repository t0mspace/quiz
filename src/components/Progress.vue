<script setup lang="ts">
    defineProps({
      step: Number,
      max: Number,
    })
</script>

<template>
  <p>Etape {{step+1}} / {{max+1}}</p>
  <progress :max="max+1" :value="step+1">70%</progress>
</template>

<style scoped>

</style>
