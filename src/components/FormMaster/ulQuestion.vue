<template>
  <ul>
    <li class="marBot10" v-for="item in props.question.answer" :key="item">
      <label class="oneLine">
        <input class="form_radio" :disabled="question.isAnswer" :type="defineTypeCheck" :value="item"
          @click="getAnswer($event.target as HTMLInputElement)" :name="question.title" />
        {{ item }}
      </label>
    </li>
    <li v-if="props.question.isTextArea">
      <label class="oneLine">
        <input class="form_radio" :type="defineTypeCheck" :value="props.question.freeAnswer"
          @click="getAnswer($event.target as HTMLInputElement)"
          :disabled="!props.question.freeAnswer || question.isAnswer" :name="question.title" />
        <input type="text" placeholder="Свой вариант" v-model="props.question.freeAnswer" />
      </label>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {IQuestion} from "@/modules/interfaces/interfaces";

const props = defineProps<{
  question: IQuestion
}>()

const defineTypeCheck = computed(() => {
  if (props.question.typeCheck === 'checkbox') {
    return 'checkbox'
  }
  if (props.question.typeCheck === 'radio' || props.question.typeCheck === 'free') {
    return 'radio'
  }
})


const getAnswer = (e: HTMLInputElement) => {
  let cv = props.question.resultSurvey
  if (e.checked && e.value) {
    props.question.resultSurvey.push(e.value)
  }
  if (
    (props.question.typeCheck === 'radio' ||
      props.question.typeCheck === 'free') &&
    props.question.resultSurvey.length >= 2
  ) {
    cv.shift()
  }
  if (!e.checked) {
    cv = props.question.resultSurvey.filter(el => el !== e.value)
  }
  props.question.resultSurvey = cv
}

</script>
