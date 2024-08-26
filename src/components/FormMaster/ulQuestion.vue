<template>
  <ul>
    <li class="marBot10" v-for="(item, index) in props.question.answer" :key="index">
      <label class="oneLine" v-if="item">
        <input class="form_radio" :disabled="question.isAnswer" :type="props.question.typeCheck" :value="item"
          @click="getAnswer" name="question" />
        {{ item }}
      </label>
    </li>
    <li v-if="props.question.isTextArea">
      <label class="line-content">
        <input class="form_radio" :type="defineTypeCheck" :value="props.question.freeAnswer" @click="getAnswer"
          :disabled="!props.question.freeAnswer || question.isAnswer" name="question" />
        <input type="text" placeholder="Свой вариант" v-model="props.question.freeAnswer" />
      </label>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
// @ts-ignore
import { useQuestionsStore } from '@/stores/formMasterStore.ts'
const queSt = useQuestionsStore()

const inCheck = ref(null)

const props = defineProps({
  question: { type: Object, required: true }
})

const defineTypeCheck = computed(() => {
  if (props.question.typeCheck === 'checkbox') {
    return 'checkbox'
  }
  if (props.question.typeCheck === 'radio' || props.question.typeCheck === 'free') {
    return 'radio'
  }
})

const getAnswer = e => {
  let cv = props.question.resultSurvey
  if (e.target.checked && e.target._value) {
    props.question.resultSurvey.push(e.target._value)
  }
  if (
    (props.question.typeCheck === 'radio' ||
      props.question.typeCheck === 'free') &&
    props.question.resultSurvey.length >= 2
  ) {
    cv.shift()
  }
  if (!e.target.checked) {
    cv = props.question.resultSurvey.filter(el => el !== e.target._value)
  }
  props.question.resultSurvey = cv
}

</script>
