<template>
  <div class="wrapper-home-work">
    <div class="bg"></div>
    <div class="container">
      <p class="title-work">Менеджер Задач</p>
      <div class="desciption-work">
        <p style="font-weight: 700">
          Тестовая задача на Vue3 Composition API + Pinia
        </p>
        <p>
          Данный проект реализует веб-приложение на Vue3, использующее Composition API
          (setup), Pinia.
        </p>
        <p>
          Основная цель — разработать таск-трекер, в котором можно создавать задачи, отмечать их выполнение,
          выставлять приоритет и дедлайн.
        </p>
        <p>
          Есть возможность фильтрации задач по дате, по выполнению, по приоритету. Реализована возможность изменнеия
          порядка элементов перетаскиванием
          мышкой задач в списке.
        </p>
        <a class="spaseBetween translate-arrow" target="_blank" href="https://task-tracker.argovera.ru/">
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

<style scoped lang="scss">

</style>
