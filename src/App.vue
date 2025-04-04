<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Quiz from './components/Quiz.vue'

const quiz = ref(null)
const state = ref('loading')

onMounted(() => {
  fetch('/quiz.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to load quiz')
      }
      return res.json()
    })
    .then((data) => {
      quiz.value = data
      state.value = 'ok'
    })
    .catch((err) => {
      state.value = 'error'
    })
})
</script>

<template>
  <div v-if="state === 'error'">
    <p>Impossible de charge le quizz</p>
  </div>
  <div v-if="state === 'ok'" v-show="quiz !== null">
    <Quiz :quiz="quiz" />
  </div>
</template>

<style scoped></style>
