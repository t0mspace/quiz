<script setup lang="ts">
import { computed, ref } from 'vue'
import Progress from '@/components/Progress.vue'
import Question from '@/components/Question.vue'

const props = defineProps({
  quiz: Object,
})

const step = ref(0);
const question = computed(() => props.quiz.questions[step.value]);
</script>

<template>
  <div class="container">
    <h1>{{ quiz.title }} </h1>
    <Progress :step="step" :max="quiz.questions.length - 1" />
    <Question :question="question" />
  </div>
</template>

<style scoped></style>
