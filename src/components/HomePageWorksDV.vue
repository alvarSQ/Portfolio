<template>
  <div class="wrapper-home-work">
    <div class="bg"></div>
    <div class="container">
      <p class="title-work">Discovod</p>
      <div class="desciption-work">
        <p style="font-weight: 700">
          Тестовая задача на Vue3 Composition API + Pinia + SCSS
        </p>
        <p>
          Основная цель — сделать копию существующего сайта (страницы необходимые для
          решения поставленных задач) и реализовать на ней вывод, сортировку и фильтрацию
          товаров.
        </p>
        <p>
          Верстка делалась с нуля, дизайн брался с уже готового сайта;<br />
          Адаптивная верстка + Мобильная версия;<br />
          Вывод категорий и списка товаров, полученных через API…<br />
          Сортировка и фильтация товаров внутри категорий.
        </p>
        <a class="spaseBetween translate-arrow" target="_blank" href="https://diskovod.argovera.ru/">
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
