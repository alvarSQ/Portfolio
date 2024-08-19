<template>
  <div class="container3">
    <div class="content">
      <p class="ptitle">Широкий ассортимент продукции</p>
      <div class="grid-container">
        <div class="logo-company">
          <HPlogo class="logo-cont" />
        </div>
        <div class="logo-company">
          <Delllogo class="logo-cont" />
        </div>
        <div class="logo-company">
          <IBMlogo class="logo-cont" />
        </div>
        <div class="logo-company">
          <Intellogo class="logo-cont" />
        </div>
        <div class="logo-company">
          <Huaweilogo class="logo-cont" />
        </div>
        <div class="logo-company">
          <MicronTLogo class="logo-cont" />
        </div>
        <div class="logo-company">
          <Kingstonlogo class="logo-cont" />
        </div>
        <div class="logo-company">
          <SKHynixlogo class="logo-cont" />
        </div>
        <div class="logo-company">
          <Samsunglogo class="logo-cont" />
        </div>
        <p>
          Мы&nbsp;работаем с&nbsp;ведущими производителями, чтобы предложить нашим
          клиентам самые современные и&nbsp;надежные решения для их&nbsp;потребностей.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import HPlogo from '@/components/svg/assortment_logo/Hewlett_Packard_Enterprise_logo.vue'
import Delllogo from '@/components/svg/assortment_logo/Dell_Logo.vue'
import IBMlogo from '@/components/svg/assortment_logo/IBM_logo.vue'
import Intellogo from '@/components/svg/assortment_logo/Intel_logo.vue'
import Huaweilogo from '@/components/svg/assortment_logo/Huawei_logo.vue'
import MicronTLogo from '@/components/svg/assortment_logo/Micron_Technology_logo.vue'
import Kingstonlogo from '@/components/svg/assortment_logo/Kingston_logo.vue'
import SKHynixlogo from '@/components/svg/assortment_logo/SK_Hynix_logo.vue'
import Samsunglogo from '@/components/svg/assortment_logo/Samsung_Logo.vue'
</script>

<style lang="scss">
.container3 {
  width: 100%;
  background: black;
  opacity: 1;
  border-top: 2px solid #48b322;
  border-bottom: 2px solid #48b322;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 170px 0;

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

.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
  padding-top: 60px;

  p {
    font-size: 16px;
    grid-column: span 2;

    @media (max-width: 1240px) {
      grid-column: span 5;
    }

    @media (max-width: 980px) {
      grid-column: span 3;
    }

    @media (max-width: 520px) {
      grid-column: span 2;
    }
  }

  @media (max-width: 1240px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 520px) {
    gap: 20px;
    padding-top: 40px;
    grid-template-columns: repeat(2, 1fr);
  }
}

.logo-company {
  background-color: #202020;
  width: 100%;
  height: 111px;
  position: relative;
}

.logo-cont {
  width: 160px;
  height: 160px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 980px) {
    width: 130px;
    height: 130px;
  }
}
</style>
>
