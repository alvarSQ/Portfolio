<template>
  <div class="container mH100vh">
    <main class="main_content">
      <div class="text_block">
        <p class="grin">Серверное оборудование</p>
        <div class="ellips" />
        <div class="line" />
        <p>
          Наша компания поможет вам определиться с выбором необходимого оборудования — мы
          подготовим коммерческое предложение, оформим необходимые документы, упакуем
          товар, организуем доставку в любую точку России в кратчайшие сроки.
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
          <p>Более 5000 позиций на&nbsp;складе</p>
          <div class="line" />
        </div>
      </div>
      <div class="advantage">
        <img src="@/assets/img/sphere2.png" class="w44" />
        <img src="@/assets/img/sphere2(2).png" class="absL20 w44" />
        <div class="text-block">
          <p>Бесплатная доставка в&nbsp;города России</p>
          <div class="line" />
        </div>
      </div>
      <div class="advantage">
        <img src="@/assets/img/sphere3.png" class="w44" />
        <img src="@/assets/img/sphere3(2).png" class="absL20 w44" />
        <img src="@/assets/img/sphere3(3).png" class="absL40 w44" />
        <div class="text-block">
          <p>Гарантия на все оборудование 1&nbsp;год</p>
          <div class="line" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BlockSocialIcon from '@/components/UI/blockSocialIcon.vue'
</script>

<style lang="scss">
.title_block {
  position: relative;
}
</style>>
