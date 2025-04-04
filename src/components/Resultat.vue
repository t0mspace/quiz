<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  quiz: Object,
  answers: Array,
})

const results = computed(() => {
  return props.quiz.questions.reduce((sum, question, k) => {
    if (question.correct_answer === props.answers[k]) {
      sum += 1
    }
    return sum
  }, 0)
})
</script>

<template>
  <h3>Resultat</h3>
  <p>Votre score</p>

  <p> {{ results }} / {{ props.quiz.questions.length }}</p>
</template>

<style scoped></style>
