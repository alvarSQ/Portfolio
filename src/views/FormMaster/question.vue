<template>
  <div class="title-work">{{ queSt.getOnePage.title }}</div>
    <div class="form_wrapper">
      <div class="form_container" v-if="hasQuestion">
        <div class="line-content marBot10">
          <h2>{{ question.title }}</h2>
          <p class="form_counter ">{{ id }} из {{ queSt.getQuestions.length }}</p>
        </div>
        <div class="line marBot20" />

        <ulQuestions :question="question" />

        <div class="answer_string">
          <b>Ваш ответ:</b> {{ question.resultSurvey.join(', ') }}
        </div>

        <button class="form_btn marBot10" style="width: 100%;" :disabled="question.isAnswer"
          @click="toАnswer">Ответить</button>
        <div class="line-content">
          <button class="form_btn" :disabled="isMinPage" @click="toBack">
            Назад
          </button>
          <button class="form_btn" v-if="isMaxPage" @click="toEnd">
            Закончить
          </button>
          <button class="form_btn" v-else @click="toForward">
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
  const newAnswer = {
    title: question.value.title,
    answer: question.value.resultSurvey
  }
  if (question.value.resultSurvey[0]) {
    queSt.jsonAnswer.push(newAnswer)
  }
  question.value.isAnswer = true
  isMaxPage.value ? toEnd() : toForward()
}

const toForward = () => {
  router.push({ name: 'question', params: { id: question.value.id + 1 } })
}
const toBack = () => {
  router.push({ name: 'question', params: { id: question.value.id - 1 } })
}
const toEnd = () => {
  queSt.json = JSON.stringify(queSt.jsonAnswer, null, "\t");
  queSt.isJson = false
  router.push({ name: 'json' })
}

const id = computed(() => parseInt(route.params.id))
const validId = computed(() => /^[1-9]+\d*$/.test(id.value))
const question = computed(() => queSt.getQuestionById(id.value))
const hasQuestion = computed(
  () => validId.value && question.value !== undefined
)

const isMaxPage = computed(() => id.value >= queSt.getQuestions.length)
const isMinPage = computed(() => id.value <= 1)

</script>

<style scoped lang="scss">
@import "@/assets/scss/utils/vars.scss";

.answer_string {
  margin-top: 10px;
  padding: 10px;
  min-height: 43px;
}
</style>
