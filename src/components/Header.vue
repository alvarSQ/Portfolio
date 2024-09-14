<template>
  <header v-if="isHeader">
    <div class="navbar">
      <div class="black_nav">
        <div class="container padd30">
          <div class="navbar-content">
            <div class="oneLine">
              <a href="#" @click="goHome">
                <p class="logo">ЯРО<span class="grin">СЛАВ</span></p>
              </a>
              <p class="text_logo">
                Фронтэнд<br>Верстка и програмирование
              </p>
            </div>
            <p class="logo" @click="mainStore.trigerModal">Меню</p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <header v-else>
    <div class="header">
      <div class="container">
        <MenuTable />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import MenuTable from './UI/menuTable.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMainStore } from "@/stores/mainStore.ts";
const mainStore = useMainStore();

const router = useRouter()

const goHome = () => router.push({ name: 'home' })

const isHeader = ref(false)

window.addEventListener('scroll', function () {
  if (window.scrollY > 176) {
    isHeader.value = true
  }
  else {
    isHeader.value = false
  }

});
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}

.black_nav {
  background-color: #000000e6;
  width: 100%;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.oneLine {
  display: flex;
  align-items: center;
  gap: 25px;
}

.logo {
  font-size: 26px;
  font-family: JetBrainsMono, monospace;
  color: #fff;
  cursor: pointer;
}

.text_logo {
  font-size: 14px;
  line-height: normal;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 46px;
  width: 100%;
  z-index: 2;
}

</style>