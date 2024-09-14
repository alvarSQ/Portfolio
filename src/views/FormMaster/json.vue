<template>
    <div class="title-work">{{ queSt.getFirstPage.title }}</div>
    <pre>
       {{ queSt.getJson }}
    </pre>
    <button class="form_btn" @click="closeJson">
        Закрыть
    </button>
</template>

<script setup>
import { useQuestionsStore } from '@/stores/formMasterStore.ts'
import { useRouter } from "vue-router";

const router = useRouter();
const queSt = useQuestionsStore()

const closeJson = () => {
    queSt.defaultQeuestions()
    router.push({ name: 'form-master' })
}

</script>