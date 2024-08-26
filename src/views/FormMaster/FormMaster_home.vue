<template>
  <div class="title-work">Форм-мастер</div>
  <div>
    <div class="form_container">
      <div class="line-content marBot20">
        <input type="text" placeholder="Название опроса" />
        <input type="file" id="file_input" accept=".json" @change="" />
      </div>
      <textarea placeholder="Описание"></textarea>
    </div>
    <div class="form_container" v-for="item in queSt.getByActiv" :key="item.id">
      <div class="line-content disp-block marBot20">
        <input type="text" placeholder="Вопрос" />
        <div class="marLeft10">
          <CustomSelect :options="['Один из списка', 'Несколько из списка']" :default="'Один из списка'"
            @selectSort="" />
        </div>
      </div>
      <MakeQuestions :question="item" />
    </div>

    <div class="form_container" v-for="item in queSt.getByNoActiv" :key="item.id">
      <div class="line-content marBot20">
        <h2 @click="queSt.triggerActiv(item.id)" style="cursor: pointer" title="Нажмите для редактирования">{{
          item.title }}</h2>
        <p class="q_del" style="margin-top: 8px" title="Удалить вопрос" @click="delQuestion(item.id)">
          &#10060;
        </p>
      </div>
      <ListQuestions :question="item" />
    </div>
    <div class="line-content disp-block">
      <button class="form_btn" @click="">Сохранить форму&nbsp;в&nbsp;файл</button>
      <button class="form_btn" @click="">Пример заполненной&nbsp;формы</button>
      <button class="form_btn" @click="startForm">Перейти к&nbsp;опросу</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { computed } from "vue"
import CustomSelect from '@/components/UI/custom-select.vue'
import MakeQuestions from '@/components/FormMaster/varQuestions.vue'
import ListQuestions from '@/components/FormMaster/ulQuestion.vue'
import { useRouter } from "vue-router"

import { useQuestionsStore } from '@/stores/formMasterStore.ts'

const router = useRouter()
const queSt = useQuestionsStore()

const startForm = () => {
  const maxid = Math.max(...queSt.getQuestions.map(el => el.id))
  if (maxid > queSt.getQuestions.length) {
    queSt.validId()
  }
  if (queSt.validQuestions) {
    return alert('Заполни все поля')
  }
  router.push({ path: '/form-master/question' })
  // router.push('question-start')
}

// const saveForm = computed(() => {
//   const blob = new Blob([JSON.stringify(queSt.getQuestions, null, '\t')], {
//     type: 'application/json'
//   })
//   return URL.createObjectURL(blob)
// })

const delQuestion = (id: number) => queSt.questions.splice(id - 1, 1)

// const selected = computed(() => {
//   if (route.query.sort === 'price|asc') {
//     return 'Сначала дешевые'
//   } if (route.query.sort === 'price|desc') {
//     return 'Сначала дорогие'
//   } if (route.query.sort === 'new') {
//     return 'Новые'
//   }
//   return 'Порядок: по умолчанию'
// })
</script>



<style scoped lang="scss">
@import "@/assets/scss/utils/vars.scss";

#file_input {
  width: 500px;

  @media (max-width: 980px) {
    width: 85%;
  }

  @media (max-width: 680px) {
    width: 70%;
  }

  @media (max-width: 520px) {
    width: 57%;
  }
}

.marLeft10 {
  margin-left: 10px;

  @media (max-width: 680px) {
    margin-top: 20px;
    margin-left: 0;
  }
}
</style>
