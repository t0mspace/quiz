<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Progress from '@/components/Progress.vue'
import Question from '@/components/Question.vue'
import Resultat from '@/components/Resultat.vue'

const props = defineProps({
  quiz: Object,
})
const quizzFinished = ref(false)
const step = ref(0)
const question = computed(() => props.quiz.questions[step.value])
const answers = ref(Array(props.quiz.questions.length))
const addAnswer = (answer: number) => {
  answers.value[step.value] = answer
  if (step.value === props.quiz.questions.length-1) {
    quizzFinished.value = true
  } else {
    step.value += 1
  }
}


</script>

<template>
  <div class="container">
    <h1>{{ quiz.title }}</h1>
    <Progress :step="step" :max="quiz.questions.length - 1" />
    <Question :question="question" :answers="answers" v-if="!quizzFinished" @answer="addAnswer" />
    <Resultat :quiz="quiz" :answers="answers" v-if="quizzFinished" />
  </div>
</template>

<style scoped></style>
