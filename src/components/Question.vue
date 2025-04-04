<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  question: Object,
})
const answer = ref(null);
const emit = defineEmits(['answer']);
const hasAnswer = computed(() => answer.value !== null);
</script>

<template>
  <div class="question">
    <h3>{{question.question}}</h3>
    <ul>
        <li v-for="(choice, index) in question.choices" :key="choice">
          <label :for="`choice-${index}`">
            <input type="radio" :id="`choice-${index}`" name="answer" v-model="answer" :value="choice">
          {{choice}}
          </label>
        </li>
    </ul>
    <button :disabled="!hasAnswer" type="button" id="next-question" @click="emit('answer', answer)">Go to next question</button>
  </div>



</template>

<style scoped>

#next-question {
  margin-left: auto;
  display: block;
}

</style>
