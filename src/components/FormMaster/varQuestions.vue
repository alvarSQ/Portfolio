<template>
  <ul>
    <li class="line-content" v-for="(item, index) in props.question.answer" :key="index">
      <input :type="props.question.typeCheck" :disabled="route.name === 'form-master'" name="question" />
      <input type="text" class="marBot10" :placeholder="`Вариант ${index + 1}`" v-model="item.name"
        v-if="!item.isFree" />
      <input type="text" placeholder="Свой вариант" :disabled="route.name === 'form-master'" v-if="item.isFree" />
      <p class="q_del" @click="delAnswer(index)">&#10060;</p>
    </li>
  </ul>
  <div class="line-content flex">
    <button class="form_btn" @click="addAnswer">Добавить вариант&nbsp;ответа</button>
    <button class="form_btn" :disabled="isFreeAnswer" @click="addFree">
      Добавить свободный ответ
    </button>
    <button class="form_btn" :disabled="queSt.validAnswer" @click="addQuestion">Добавить еще&nbsp;вопрос</button>
  </div>

</template>

<script setup lang="ts">
import { computed } from "vue";
import { useQuestionsStore } from "@/stores/formMasterStore.ts";
import { IQuestion } from "@/modules/interfaces/interfaces";
import { useRoute } from 'vue-router'

const queSt = useQuestionsStore();
const route = useRoute()

const props = defineProps<{
  question: IQuestion
}>()

const delAnswer = (index: number) => props.question.answer.splice(index, 1);

const addAnswer = () => {
  if (isFreeAnswer.value) {
    const i = props.question.answer.length - 1
    props.question.answer.splice(i, 0, { name: '', isFree: false })
  } else {
    props.question.answer.push({ name: '', isFree: false })
  }
};

const addFree = () => {
  if (!isFreeAnswer.value) {
    props.question.answer.push({ name: '', isFree: true })
  }
}

const addQuestion = () => {
  const newQ: IQuestion = {
    id: queSt.getQuestions.reduce((max: number, el: IQuestion) => (el.id > max ? el.id : max), 0) + 1,
    title: "",
    answer: [],
    resultSurvey: [],
    typeCheck: "radio",
    isActiv: true,
    isAnswer: false,
  };
  queSt.getQuestions.push(newQ);
  queSt.triggerActiv(newQ.id);

};

const isFreeAnswer = computed(() => props.question.answer.some(el => el.isFree === true))
</script>