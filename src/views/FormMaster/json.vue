<template>    
    <pre>
       {{ queSt.getJson }}
    </pre>
</template>

<script setup>
import { useQuestionsStore } from '@/store/index.js'
const queSt = useQuestionsStore()

</script>