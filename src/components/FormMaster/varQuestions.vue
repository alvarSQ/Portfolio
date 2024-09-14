<template>
  <ul>
    <template v-if="props.question?.typeCheck !== 'free'">
      <li class="line-content" v-for="(item, index) in props.question.answer" :key="index">
        <input :type="props.question.typeCheck" name="question" />
        <input type="text" class="marBot10" :placeholder="`Вариант ${index + 1}`"
          v-model="props.question.answer[index]" />
        <p class="q_del" @click="delAnswer(index)">&#10060;</p>
      </li>
    </template>
    <li v-if="question.isTextArea">
      <label class="line-content">
        <input class="form_radio" type="radio" name="question" v-if="props.question.typeCheck === 'free'" />
        <input class="form_radio" :type="props.question.typeCheck" name="question" v-else />
        <input type="text" placeholder="Свой вариант" />
        <p class="q_del" @click="question.isTextArea = false">&#10060;</p>
      </label>
    </li>
  </ul>
  <div class="line-content disp-block">
    <button class="form_btn" @click="addAnswer">Добавить вариант&nbsp;ответа</button>
    <button class="form_btn" :disabled="question.isTextArea" @click="question.isTextArea = true">
      Добавить свободный ответ
    </button>
    <button class="form_btn" @click="addQuestion">Добавить еще&nbsp;вопрос</button>
  </div>

</template>

<script setup lang="ts">
import { useQuestionsStore } from "@/stores/formMasterStore.ts";
import {IQuestion} from "@/modules/interfaces/interfaces";

const queSt = useQuestionsStore();

const props = defineProps<{
  question: IQuestion 
}>()

const delAnswer = (index: number) => props.question.answer.splice(index, 1);
const addAnswer = () => props.question.answer.push("");
const addQuestion = () => {
  const newQ: IQuestion = {
    id: queSt.getQuestions.reduce((max: number, el: IQuestion) => (el.id > max ? el.id : max), 0) + 1,
    title: "",
    answer: [],
    resultSurvey: [],
    typeCheck: "radio",
    isTextArea: false,
    isActiv: true,
    isAnswer: false,
  };
  queSt.getQuestions.push(newQ);
  queSt.triggerActiv(newQ.id);
};
</script>