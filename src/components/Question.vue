<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from 'vue'
import { shuffleArray } from '../tools/tools.js'
import Tools from '../tools/Tools.js'

const props = defineProps({
  question: Object,
})

const answer = ref(null)
const emit = defineEmits(['answer'])
const hasAnswer = computed(() => answer.value !== null)

watch(
  () => props.question,
  () => {
    answer.value = null
  },
)

const randomizedChoices = computed(() => {
  try {
    return Tools.shuffleArray(props.question.choices)
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  <div class="question">
    <h3>{{ question.question }}</h3>
    <ul>
      <li v-for="(choice, index) in randomizedChoices" :key="choice">
        <label :for="`choice-${index}`">
          <input
            type="radio"
            :id="`choice-${index}`"
            name="answer"
            v-model="answer"
            :value="choice"
          />
          {{ choice }}
        </label>
      </li>
    </ul>
    <button :disabled="!hasAnswer" type="button" id="next-question" @click="emit('answer', answer)">
      Go to next question
    </button>
  </div>
</template>

<style scoped>
#next-question {
  margin-left: auto;
  display: block;
}
</style>
