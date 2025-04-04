<script setup lang="ts">
import { computed, ref } from 'vue'
import Progress from '@/components/Progress.vue'
import Question from '@/components/Question.vue'

const props = defineProps({
  quiz: Object,
})

const step = ref(0);
const question = computed(() => props.quiz.questions[step.value]);
const answers = ref(Array(props.quiz.questions.length));
const addAnswer = (answer: number) => {
  answers.value[step.value] = answer;
}
</script>

<template>
  <div class="container">
    <h1>{{ quiz.title }} </h1>
    <Progress :step="step" :max="quiz.questions.length - 1" />
    <Question :question="question" :answers="answers" @answer="addAnswer" />
    {{answers}}
  </div>
</template>

<style scoped></style>
