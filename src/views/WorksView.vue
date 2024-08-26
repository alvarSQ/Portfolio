<template>
    <div class="wrapper-work">
        <div class="bg-work"></div>
        <div style="padding-top: 170px;"></div>
        <div style="margin-top: 20px; position: relative; height: auto;"></div>
        <div class="container-work">
            <RouterView v-slot="{ Component }">
                <component :is="Component"></component>
            </RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "@/assets/scss/utils/vars.scss";

.wrapper-work {
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    min-height: 100vh;
}

.bg-work {
    position: absolute;
    top: -800px;
    left: 50%;
    transform: translate(-50%);
    width: 1284px;
    height: 1752px;
    background-image: url("@/assets/img/ellipse.png");
    background-size: cover;
    background-position: center;
}

.container-work {
    position: relative;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding-bottom: 130px;
    z-index: 1;

    @media (max-width: 1240px) {
        max-width: 940px;
    }

    @media (max-width: 980px) {
        max-width: 620px;
    }

    @media (max-width: 680px) {
        max-width: 460px;
    }

    @media (max-width: 520px) {
        max-width: 300px;
    }
}


</style>
