<template>
  <div class="menu_table">
    <div class="first_column cell_menu" @click="goHome">
      <a>
        <p class="logo">ЯРОСЛАВ</p>
      </a>
      <p class="text_logo">
        <span class="green">Фронтэнд </span><br />Верстка и програмирование
      </p>
    </div>
    <div class="second_column fS14">
      <div class="first_row">
        <p class="cell_menu fScolorcurs">Примеры работ</p>
      </div>
      <div class="second_row">        
        <a class="cell_menu hover" @click="goWorks('form-master')"> Форм-Мастер </a>
        <a class="cell_menu hover" target="_blank" href="https://task-tracker.argovera.ru"> Менеджер Задач </a>
        <a class="cell_menu hover" target="_blank" href="https://diskovod.argovera.ru/"> diskovod </a>
      </div>
    </div>
    <div class="menu_column cell_menu" @click="mainStore.trigerModal">
      <p>Меню</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMainStore } from "@/stores/mainStore.ts";
const mainStore = useMainStore();

const router = useRouter()

const goHome = () => router.push({ name: 'home' })

const goWorks = (slug: string) => {  
  router.push({ name: slug })
}

</script>

<style scoped lang="scss">
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
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 65px;
}

.second_row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 65px;
}

.cell_menu {
  border: 2px solid white;
  margin: 0 -2px -2px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $titleFont;
  cursor: pointer;
  font-size: 14px;
  color: white;

  @media (max-width: 1240px) {
    padding: 50px 0;
  }

  @media (max-width: 680px) {
    padding: 30px 0;
  }
}

.hover {
  &:hover {
    color: #48b322;
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
  font-size: 16px;
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
  font-size: 28px;
  font-family: $titleFont;
  color: white;
  cursor: pointer;

  &:hover {
    color: #48b322;
  }
}

.fS14 {
  font-size: 14px;
  line-height: normal;
}

.fScolorcurs {
  font-size: 16px;
  line-height: normal;
  color: #48b322;
  cursor: auto;
}

.dispNone {
  display: none;
}
</style>
