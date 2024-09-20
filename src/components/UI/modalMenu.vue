<template>
  <div class="modal-wrapper modal-overlay">
    <div class="modal">
      <div class="modal-container">
        <div class="title-modal">
          <p>Меню</p>
          <CloseSvg class="cross" @click="mainStore.trigerModal" />
        </div>
        <div>
          <div class="cell-modal first-modal">Примеры работ</div>
          <div class="content-modal">
            <a class="cell-modal" @click="goWorks('form-master')">
              <p>Форм-Мастер</p>
            </a>
            <a class="cell-modal" target="_blank" href="https://task-tracker.argovera.ru">
              <p>Менеджер Задач</p>
            </a>
            <a class="cell-modal" target="_blank" href="https://diskovod.argovera.ru/">
              <p>diskovod</p>
            </a>
            <a class="cell-modal" target="_blank" href="https://github.com/alvarSQ">
              <p>Остальные на Github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseSvg from '@/components/svg/close.vue'
import { useRouter } from 'vue-router'
import { useMainStore } from "@/stores/mainStore.ts";
import { useQuestionsStore } from "@/stores/formMasterStore.ts"

const queSt = useQuestionsStore();
const mainStore = useMainStore();

const router = useRouter()

const goWorks = (slug: string) => {
  if (slug === 'form-master') queSt.defaultQeuestions();
  mainStore.trigerModal()
  router.push({ name: slug })
}
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars.scss";

.first-modal {
  color: #48b322;
  font-family: $titleFont
}

.modal {
  min-width: auto;
  width: 100%;
  min-height: auto;
  height: 100vh;
  background-color: rgb(255, 255, 255);
}

.modal-container {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100%;
  padding: 130px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1240px) {
    max-width: 940px;
  }

  @media (max-width: 980px) {
    max-width: 620px;
  }

  @media (max-width: 680px) {
    max-width: 460px;
    padding: 60px 0;
  }

  @media (max-width: 520px) {
    max-width: 300px;
  }
}

.title-modal {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: $titleFont;
    font-size: 61px;
    font-weight: 300;
    line-height: 60px;
    text-transform: uppercase;
    color: #48b322;
  }
}

.cross {
  width: 30px;
  height: 30px;
  color: #B3B3B3;
  cursor: pointer;

  &:hover {
    color: #202020;
  }
}

.content-modal {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
}

.cell-modal {
  border: 2px solid black;
  margin: 0 -2px -2px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  cursor: pointer;

  &:hover p {
    color: #48b322;
  }

  p {
    font-family: $titleFont;
    color: black;
    font-size: 14px;
  }

  @media (max-width: 680px) {
    padding: 30px 0;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0006;
  z-index: 99;
}

// ::-webkit-scrollbar {
//   width: 0;
// }</style>