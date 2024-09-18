<template>
  <div class="title-work">{{ defTitle }}</div>
  <div class="form_wrapper">
    <div class="form_container" v-if="isValidId">
      <div class="line-content marBot10">
        <h2>{{ question?.title }}</h2>
      </div>
      <div class="line marBot20" />

      <ulQuestions :question="question" v-if="question" />

      <div class="answer_string">
        <b>Ваш ответ:</b> {{ question?.resultSurvey.join(', ') }}
      </div>

      <button class="form_btn marBot10" style="width: 100%;" :disabled="question?.isAnswer"
        @click="toАnswer">Ответить</button>
      <div class="line-content">
        <button class="form_btn w40" :disabled="isMinPage" @click="toBack">
          Назад
        </button>

        <p class="form_counter">{{ id }} из {{ queSt.getQuestions.length }}</p>

        <button class="form_btn w40" v-if="isMaxPage" @click="finish" :disabled="!isAnswerLength" >
            Конец
          </button>
          <button class=" form_btn w40" v-else @click="toForward">
          Вперед
        </button>

      </div>
    </div>
    <notFound v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import notFound from '@/views/notFound.vue'
import ulQuestions from '@/components/FormMaster/ulQuestion.vue'
import { useQuestionsStore } from '@/stores/formMasterStore.ts'

const queSt = useQuestionsStore()
const router = useRouter()
const route = useRoute()

const toАnswer = () => {
  if (question.value) {
    const newAnswer = {
      title: question.value?.title,
      answer: question.value?.resultSurvey
    }
    if (question.value?.resultSurvey[0]) {
      queSt.jsonAnswer.push(newAnswer)

      question.value.isAnswer = true
    }
  }
}

const defTitle = computed(() => queSt.getFirstPage.title ? queSt.getFirstPage.title : 'Без названия')

const toForward = () => {
  if (question.value)
    router.push({ name: 'question', params: { id: question.value.id + 1 } })
}
const toBack = () => {
  if (question.value)
    router.push({ name: 'question', params: { id: question.value.id - 1 } })
}

const isAnswerLength = computed(() => queSt.jsonAnswer.length >= queSt.getQuestions.length)

const finish = () => {
  if (isAnswerLength) {
    queSt.json = JSON.stringify(queSt.jsonAnswer, null, "\t");
    router.push({ name: 'json' })
  }
}


const id = computed(() => parseInt(route.params.id as string))

const isValidId = computed(() => RegExp(`^[1-${queSt.getQuestions.length}]+d*$`).test(id.value.toString()))

const question = computed(() => queSt.getQuestionById(id.value))

const isMaxPage = computed(() => id.value >= queSt.getQuestions.length)
const isMinPage = computed(() => id.value <= 1)

</script>

<style scoped lang="scss">
.answer_string {
  margin-top: 10px;
  padding: 10px;
  min-height: 43px;
}

.w40 {
  @media (max-width: 680px) {
    width: 35%;
  }
}
</style>
