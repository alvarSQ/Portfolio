<template>
  <div class="menu_table">
    <div class="first_column cell_menu" @click="goHome">
      <a>
        <p class="logo">SERVE<span class="grin">RAM</span>RU</p>
      </a>
      <p class="text_logo">
        Оригинальные серверные<br>комплектующие
      </p>
    </div>
    <div class="second_column fS14">
      <div class="first_row">
        <a v-for="category in catStore.getCategories" :key="category.id" class="cell_menu"
          @click="goCategory(category.slug)">
          <p>{{ category.name }}</p>
        </a>
      </div>
      <div class="second_row">
        <a class="cell_menu" href="#">
          <p>О нас</p>
        </a>
        <a class="cell_menu" href="#">
          <p>FAQ</p>
        </a>
        <a class="cell_menu" href="#">
          <p>Доставка</p>
        </a>
        <a class="cell_menu" href="#">
          <p>Реквизиты</p>
        </a>
        <a class="cell_menu" href="#">
          <p>Контакты</p>
        </a>
      </div>
    </div>
    <div class="menu_column cell_menu" @click="varStore.menuHead">
      <p>Меню</p>
    </div>
  </div>
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router'
import { useVarStore } from '@/stores/vars.js'
import { useCategoriesStore } from '@/stores/categories.js'
import { useProductsStore } from '@/stores/products.js'
const varStore = useVarStore()
const catStore = useCategoriesStore()
const prodStore = useProductsStore()

const router = useRouter()
const route = useRoute()

const goCategory = (slug) => {
  router.push({ name: 'category', params: { slug: slug } })
  prodStore.loadProducts(new URLSearchParams(`category=${slug}`))
  varStore.isError = false
}

const goHome = () => router.push({ name: 'home' })
</script>


<style lang="scss">
@import "@/assets/scss/utils/vars.scss";

.menu_table {
  display: grid;
  grid-template-columns: 1fr 1.8fr auto;
  grid-template-rows: auto;
  width: 1200px;

  @media (max-width: 1240px) {
    width: 940px;
    grid-template-columns: 4fr 1.03fr;
  }

  @media (max-width: 980px) {
    width: 620px;
    grid-template-columns: 3fr auto auto;
  }

  @media (max-width: 680px) {
    width: 460px;
    grid-template-columns: 2fr auto auto;
  }

  @media (max-width: 520px) {
    width: 300px;
  }
}

.second_column {
  @media (max-width: 1240px) {
    display: none;
  }
}

.first_row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 65px;
}

.second_row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 65px;
}

.cell_menu {
  border: 2px solid white;
  margin: 0 -2px -2px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $titleFont;
  font-size: 14px;
  color: white;
  cursor: pointer;

  @media (max-width: 1240px) {
    padding: 50px 0;
  }

  @media (max-width: 680px) {
    padding: 30px 0;
  }
}

.menu_column {
  display: none;
  font-size: 26px;
  cursor: pointer;

  @media (max-width: 1240px) {
    display: flex;
  }

  @media (max-width: 1240px) {
    padding: 0 40px;

  }

  @media (max-width: 520px) {
    padding: 0 20px;
  }

  &:hover {
    color: #48b322;
  }
}

.text_logo {
  font-size: 14px;
  line-height: normal;


  @media (max-width: 520px) {
    display: none;
  }
}

.first_column {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
  gap: 25px;

  @media (max-width: 1240px) {
    grid-column: auto;
    grid-row: auto;
    grid-template-rows: 65px;
    justify-content: flex-start;
    padding-left: 30px;
  }

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 10px;
    align-items: start;
  }

  @media (max-width: 520px) {
    padding-left: 0;
    align-items: center;
  }
}

.logo {
  font-size: 26px;
  font-family: $titleFont;
  color: white;
  cursor: pointer;

  &:hover {
    color: #48b322;
  }
}

.dispNone {
  display: none;
}
</style>