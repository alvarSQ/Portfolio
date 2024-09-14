<template>
  <div class="wrapper">
    <Header  />
    <RouterView />
    <Footer />
    <ModalMenu v-if="mainStore.isModal" />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ModalMenu from '@/components/UI/modalMenu.vue'
import { useMainStore } from "@/stores/mainStore.ts";
const mainStore = useMainStore();

</script>
