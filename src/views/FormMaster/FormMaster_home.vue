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
      <div class="line-content marBot20">
        <input type="text" placeholder="Вопрос" />
        <div style="margin-left: 10px;">
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
    <div class="line-content">
      <button class="form_btn" @click="">Сохранить форму в файл</button>
      <button class="form_btn" @click="startForm">Перейти к опросу</button>
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

.wrapper-work {
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  min-height: 100vh;
}

.bg-work {
  position: absolute;
  top: -800px;
  left: 50%;
  transform: translate(-50%);
  width: 1284px;
  height: 1752px;
  background-image: url("@/assets/img/ellipse.png");
  background-size: cover;
  background-position: center;
}

.title-work {
  font-family: $titleFont;
  color: #48b322;
  font-size: 60px;
  font-weight: 300;
  line-height: 60px;
  text-transform: uppercase;
  padding: 130px 0 60px;

  @media (max-width: 680px) {
    font-size: 40px;
    line-height: 44px;
    padding: 40px 0;
  }
}


#file_input {
  width: 500px;
}




</style>
