<script setup lang="ts">
defineProps({
  question: Object,
})
</script>

<template>
  <div class="question">
    <h3>{{question.question}}</h3>
    <div v-for="answer in question.choices">
      <p>{{answer}}</p>
    </div>
  </div>

</template>

<style scoped>

</style>
