<template>
  <div class="wrapper4">
    <div class="bg4"></div>
    <div class="content4">
      <p class="ptitle text-align-center">Специальные предложения</p>
      <div class="products">
        <template v-if="hasPromo">
          <ProductCard v-for=" product in prodStore.getProductsPromo.items" :key="product.id"
            :productSlug="product.slug">
            <template v-slot:title>
              {{ product.name }}
            </template>
            <template v-slot:price>
              {{ product.offers ? `${product.offers[0].price_value.toLocaleString('ru-RU')} р.` : 'нет в наличии' }}
            </template>
          </ProductCard>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import ProductCard from '@/components/UI/productCard.vue'
import { useProductsStore } from '@/stores/products.js'
const prodStore = useProductsStore()

const hasPromo = ref(false)

prodStore.loadProducts(new URLSearchParams('promo=osobye-predlozheniya'))
watch(
  () => prodStore.getProductsPromo,
  () => {
    hasPromo.value = true
  },
  { deep: true }
)


</script>

<style lang="scss">
.wrapper4 {
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 10px;
  background-color: black;
}

.bg4 {
  position: absolute;
  top: -900px;
  left: -40px;
  transform: translate(-50%);
  transform: rotate(45deg);
  width: 1284px;
  height: 1752px;
  background-image: url("@/assets/img/ellipse.png");
  background-size: cover;
  background-position: center;
}

.content4 {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 170px;

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

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 70px;
  min-height: 538px;
  gap: 40px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}
</style>