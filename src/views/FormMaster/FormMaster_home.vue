<template>
  <div class="title-work">Форм-мастер</div>
  <div>
    <div class="form_container">
      <input type="text" placeholder="Название опроса" v-model="queSt.getFirstPage.title" />
      <textarea style="height: 100px" placeholder="Описание" v-model="queSt.getFirstPage.description"></textarea>
    </div>
    <div class="form_container" v-for="item in queSt.getByActiv" :key="item.id">
      <div class="line-content disp-block">
        <input type="text" placeholder="Вопрос" v-model="item.title" />
        <div class="marLeft10">
          <CustomSelect :options="['Один из списка', 'Несколько из списка']" :default="'Один из списка'" :item="item" />
        </div>
      </div>
      <MakeQuestions :question="item" />
    </div>

    <div class="form_container" v-for="item in queSt.getByNoActiv" :key="item.id">
      <div class="line-content">
        <h2 @click="queSt.triggerActiv(item.id)" style="cursor: pointer" title="Нажмите для редактирования">
          {{ item.title }}
        </h2>
        <p class="q_del" style="margin-top: 8px" title="Удалить вопрос" @click="delQuestion(item.id)">
          &#10060;
        </p>
      </div>
      <ListQuestions :question="item" />
    </div>

    <div class="line-content flex">
      <a :download="`${queSt.getFirstPage.title}.json`" :href="saveForm">
        <p class="form_btn a-btn">Сохранить форму в&nbsp;файл</p>
      </a>
      <label for="upload-file">
        <input type="file" id="upload-file" hidden @change="queSt.handleFileUpload" />
        <p class="form_btn a-btn">Загрузить форму из&nbsp;файла</p>
      </label>
      <button class="form_btn" @click="trigerForms" v-if="formsTriger">
        Пример заполненной формы
      </button>
      <button class="form_btn" @click="trigerForms" v-else>
        Очистить&nbsp;форму
      </button>
      <button class="form_btn" :disabled="isStart" @click="startForm">Перейти к&nbsp;опросу</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CustomSelect from "@/components/UI/custom-select.vue";
import MakeQuestions from "@/components/FormMaster/varQuestions.vue";
import ListQuestions from "@/components/FormMaster/ulQuestion.vue";
import { useRouter } from "vue-router";
import { useQuestionsStore } from "@/stores/formMasterStore.ts";

const router = useRouter();
const queSt = useQuestionsStore();

const isStart = computed(() => {
  let res = true
  if (queSt.getQuestions.length > 1 && !queSt.validAnswer) {
    res = false
  }
  return res
});

const startForm = () => queSt.validFirstPage ? router.push({ path: "/form-master/question" }) : router.push({ path: "/form-master/question/1" })

const saveForm = computed(() => {
  const blob = new Blob([JSON.stringify(queSt.getQuestions, null, "\t")], {
    type: "application/json",
  });
    return URL.createObjectURL(blob);
});

const delQuestion = (id: number) => queSt.questions.splice(id - 1, 1);

const formsTriger = ref(true)
const trigerForms = () => {
  formsTriger.value = !formsTriger.value
  formsTriger.value ? queSt.defaultQeuestions() : queSt.testQeuestions()
}
</script>

<style scoped lang="scss">
.marLeft10 {
  margin-left: 10px;

  @media (max-width: 680px) {
    margin-top: 20px;
    margin-left: 0;
  }
}
</style>
