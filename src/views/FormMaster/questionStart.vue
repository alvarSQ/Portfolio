<template>
    <div class="title-work"></div>
    <div class="form_wrapper">
        <div class="form_container">
            <div class="line-content marBot10">
                <h2>{{ queSt.getOnePage.title }}</h2>
            </div>
            <div class="line marBot20" />
            <p class="marBot20">
                {{ queSt.getOnePage.description }}
            </p>
            <button class="form_btn" style="width: 100%;"
                @click="$router.push({ name: 'question', params: { id: queSt.getQuestions[0].id } })">
                Начать опрос
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
// @ts-ignore
import { useQuestionsStore } from '@/stores/formMasterStore.ts';
const queSt = useQuestionsStore();

</script>