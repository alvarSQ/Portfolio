<template>
  <header v-if="0">
    <div class="navbar">
      <div class="black_nav">
        <div class="container">
          <div class="navbar-content">
            <div class="oneLine">
              <!-- <a href="#" @click="goHome"> -->
              <p class="logo">ЯРОСЛАВ<span class="grin">RAM</span>RU</p>
              <!-- </a> -->
              <p class="text_logo">
                Оригинальные серверные<br>комплектующие
              </p>
            </div>
            <p class="logo" @click="">Меню</p>
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
// import { useRouter } from 'vue-router'

// const router = useRouter()

// const goHome = () => router.push({ name: 'home' })

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
.header {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 46px;
  width: 100%;
  z-index: 2;
}

.black_nav {
  background-color: #000000e6;
  width: 100%;
}
</style>@/stores/categories.js