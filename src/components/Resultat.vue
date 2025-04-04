<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  quiz: Object,
  answers: Array,
})

const results = computed(() => {
  return props.quiz.questions.reduce((sum, question, k) => {
    if (question.correct_answer === props.answers[k]) {
      return sum += 1
    }
    return sum
  }, 0)
})

const comment = computed(() => {
  console.log(results)
  if (Number(results.value) >= Number(props.quiz.minimum_score)) {
    return props.quiz.success_message
  }
  return props.quiz.failure_message
})
</script>

<template>
  <h3>Resultat</h3>
  <p>Votre score</p>

  <p>{{ results }} / {{ props.quiz.questions.length }}</p>
  {{ comment }}
</template>

<style scoped></style>
