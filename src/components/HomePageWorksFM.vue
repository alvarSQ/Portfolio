<template>
  <div class="wrapper-home-work">
    <div class="bg"></div>
    <div class="container">
      <p class="title-work">форм-мастер</p>
      <div class="desciption-work">
        <p style="font-weight: 700">
          Тестовая задача на Vue3 Composition API + Pinia + TypeScript
        </p>
        <p>
          Данный проект реализует веб-приложение на Vue3, использующее Composition API
          (setup), Pinia и TypeScript.
        </p>
        <p>
          Основная цель — разработка мастера подобного google forms для создания
          опросников и проверка работы самого опросника.
        </p>
        <p>
          Данные вводит пользователь в ручную или загружает из готового JSON файла. Каждый новый вопрос имеет свой url. <br />
        </p>
        <p>
          Вопросы могут быть: <br />
          с одним вариантом ответа, <br />
          с несколькими вариантами ответа, <br />
          открытый вопрос.<br />
          Результаты опроса открываются в JSON формате.
        </p>
        <a class="spaseBetween translate-arrow" href="./form-master">
          <p class="go">Перейти</p>
          <ArrowSvg class="sm grin" />
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import ArrowSvg from "@/components/svg/arrow.vue";
</script>

<style scoped lang="scss"></style>
