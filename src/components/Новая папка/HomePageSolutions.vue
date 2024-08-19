<template>
  <div class="wrapper2p">
    <div class="bg"></div>
    <div class="container2">
      <div class="text_block2">
        <p class="ptitle mW640">подбор оптимальных решений для бизнес-задач</p>
        <div class="desciption">
          <p class="text">
            В&nbsp;наличии серверные комплектующие и&nbsp;системы хранения данных. Перед
            продажей все оборудование проходит тщательную проверку.
          </p>
          <p class="text">
            Мы&nbsp;стремимся к&nbsp;долгосрочному сотрудничеству и&nbsp;ценим доверие
            наших клиентов, поэтому предоставляем полную информацию о&nbsp;продукции,
            услугах и&nbsp;ценах, а&nbsp;также всю необходимую документацию.
          </p>
        </div>
      </div>
      <div class="table">
        <div class="column">
          <div class="cell2">
            <img src="@/assets/img/cube1.png" class="w86" />
          </div>
          <div class="cell2">
            <p class="title2 mH90">Серверные SSD накопители</p>
            <p class="text">Надежное хранение и&nbsp;быстрый доступ к&nbsp;данным</p>
          </div>
          <a class="cell2 spaseBetween translate-arrow" href="./category/servernye-ssd-nakopiteli">
            <p class="title2">Перейти</p>
            <ArrowSvg class="sm grin" />
          </a>
        </div>
        <div class="column">
          <div class="cell2">
            <img src="@/assets/img/cube2.png" class="w86" />
          </div>
          <div class="cell2">
            <p class="title2 mH90">Оперативная память</p>
            <p class="text">Надежное хранение и&nbsp;быстрый доступ к&nbsp;данным</p>
          </div>
          <a class="cell2 spaseBetween translate-arrow" href="./category/operativnaya-pamyat">
            <p class="title2">Перейти</p>
            <ArrowSvg class="sm grin" />
          </a>
        </div>
        <div class="column">
          <div class="cell2">
            <img src="@/assets/img/cube3.png" class="w86" />
          </div>
          <div class="cell2">
            <p class="title2 mH90">Системы хранения данных</p>
            <p class="text">
              Надежное хранение и&nbsp;быстрый доступ к&nbsp;данным
            </p>
          </div>
          <a class="cell2 spaseBetween translate-arrow" href="./category/sistemy-hraneniya-dannyh">
            <p class="title2">Перейти</p>
            <ArrowSvg class="sm grin" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowSvg from '@/components/svg/arrow.vue'
</script>

<style lang="scss">
.text_block2 {
  display: flex;
    justify-content: space-between;
    @media screen and (max-width: 980px) {
        flex-direction: column;
          gap: 20px;
      }
}

.translate-arrow {
  .sm {
    padding-top: 4px;
    transition: transform 0.4s ease-in-out;
  }

  &:hover .sm {
    transform: translate(-40%);
  }
}
</style>