<template>
  <label class="oneLine" v-for="item in question.answer" :key="question.id">
    <input class="form_radio" :disabled="(item.name === '') || question.isAnswer || route.name === 'form-master'" :type="question.typeCheck"
      :value="item.name" @click="getAnswer($event.target as HTMLInputElement)" :name="question.title" />
    <template v-if="!item.isFree">{{ item.name }}</template>
    <input type="text" placeholder="Свой вариант" v-model="item.name" :disabled="route.name === 'form-master'" v-else />
  </label>
</template>

<script setup lang="ts">
import { IQuestion } from "@/modules/interfaces/interfaces";
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps<{
  question: IQuestion
}>()

const getAnswer = (e: HTMLInputElement) => {
  let cv = props.question.resultSurvey
  if (e.checked && e.value) {
    props.question.resultSurvey.push(e.value)
  }
  if (
    props.question.typeCheck === 'radio' &&
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
