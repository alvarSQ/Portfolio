<template>
  <div class="container mH100">
    <main class="main_content">
      <div class="text_block">
        <p class="green">Портфолио</p>
        <div class="ellips" />
        <div class="line" />
        <p>
          Высокая степень работоспособности и обучаемости, аналитический склад ума, упорство, ответственность,
          целеустремленность, стрессоустойчивость. Люблю сложные задачи, самостоятельно изучаю новые технологии.
        </p>
      </div>
      <BlockSocialIcon class="vertical" />
    </main>
  </div>
  <div class="advantages">
    <div class="adv_cont">
      <div class="advantage">
        <img src="@/assets/img/sphere1.png" class="w44" />
        <div class="text-block">
          <p>PhotoSHOP, CorelDRAW...</p>
          <div class="line" />
        </div>
      </div>
      <div class="advantage">
        <img src="@/assets/img/sphere2.png" class="w44" />
        <img src="@/assets/img/sphere2(2).png" class="absL20 w44" />
        <div class="text-block">
          <p>HTML, SCSS, JavaSCRIPT, TypeSCRIPT</p>
          <div class="line" />
        </div>
      </div>
      <div class="advantage">
        <img src="@/assets/img/sphere3.png" class="w44" />
        <img src="@/assets/img/sphere3(2).png" class="absL20 w44" />
        <img src="@/assets/img/sphere3(3).png" class="absL40 w44" />
        <div class="text-block">
          <p>VUE.JS (Composition API: setup()), PINIA</p>
          <div class="line" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockSocialIcon from "@/components/UI/blockSocialIcon.vue";
</script>

<style scoped lang="scss">
@import "@/assets/scss/utils/vars.scss";

.main_content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 30px;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: normal;
    gap: 60px;
    max-width: 620px;
  }
}

.mH100 {
  min-height: 100vh;
}

.text_block {
  max-width: 460px;
  padding-top: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p:first-child {
    font-family: $titleFont;
    font-size: 60px;
    line-height: 60px;
    text-transform: uppercase;
    z-index: 1;

    @media (max-width: 980px) {
      font-size: 2.5em;
      line-height: 44px;
    }

    @media (max-width: 680px) {
      font-size: 32px;
    }
  }

  p:last-child {
    font-family: $mainFont;
    font-size: 15px;
    line-height: 25px;
    z-index: 1;
  }

  @media (max-width: 680px) {
    padding-top: 300px;
  }

  @media (max-width: 520px) {
    padding-top: 280px;
  }
}

.title_block {
  position: relative;
}

.advantages {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: black;
  z-index: 2;

  @media (max-width: 980px) {
    position: static;
  }
}

.advantage {
  display: flex;
  flex-direction: column;
  gap: 27px;
  width: 100%;
  position: relative;
}

.adv_cont {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 1240px) {
    max-width: 940px;
  }

  @media (max-width: 980px) {
    max-width: 620px;
    grid-template-columns: repeat(1, 1fr);
    padding: 0 0 40px;
  }

  @media (max-width: 680px) {
    width: 460px;
  }

  @media (max-width: 520px) {
    max-width: 300px;
  }
}

.w44 {
  width: 44px;
  height: 44px;
}

.absL20 {
  position: absolute;
  left: 20px;
}

.absL40 {
  position: absolute;
  left: 40px;
}
</style>
>
