<template>
  <template v-if="!varStore.isError">
    <div class="product-container">
      <div class="product" v-if="hasProduct">
        <div class=" product-image"></div>

        <div class="grids">
          <div class="grid">
            <div class="product-cell order">
              <p class="product-title"> {{ product.name }} </p>
              <p class="product-subtitle">Samsung</p>
            </div>

            <div class="product-cell order moorButton">
              <p class="text4">В корзину</p>
              <PlusSvg class="sm grin opacity" />
            </div>

            <div class="product-cell order">
              <p class="price">
                {{ product.offers ? `${product.offers[0].price_value.toLocaleString('ru-RU')} р.` : 'нет в наличии' }}
              </p>
            </div>
          </div>

          <div class="grid">
            <div class="product-cell gridSpan2">
              <p>{{ product.description }}</p>
            </div>
            <template v-for="item in product.properties" :key="item.id">
              <div class="product-cell">
                <p>{{ item.name}}</p>
              </div>
              <div class="product-cell">
                <p>{{ item.value }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </template>
  <notFound v-else />
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PlusSvg from '@/components/svg/plus.vue'
import notFound from '@/views/notFound.vue'
import { useVarStore } from '@/stores/vars.js'
import { useCategoriesStore } from '@/stores/categories.js'
import { useProductsStore } from '@/stores/products.js'
const varStore = useVarStore()
const catStore = useCategoriesStore()
const prodStore = useProductsStore()

const router = useRouter()
const route = useRoute()

const hasProduct = ref(false)
const product = ref(null)
const slug = computed(() => route.params.slug)
prodStore.loadProduct(slug.value)

watch(
  () => prodStore.getProduct,
  () => {
    product.value = prodStore.getProduct
    hasProduct.value = true
  },
  { deep: true }
)
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars.scss";

.product-container {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 300px;
  padding-bottom: 160px;

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

.product {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 60px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
}

.product-title {
  font-family: $titleFont;
  font-size: 34px;
  font-weight: 300;
  line-height: 44px;

  @media (max-width: 520px) {
    font-size: 24px;
    line-height: 34px;
  }
}

.product-image {
  width: 560px;
  height: 560px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;

  @media (max-width: 1240px) {
    width: 360px;
    height: 360px;
  }

  @media (max-width: 980px) {
    margin: 0 auto;
  }

  @media (max-width: 520px) {
    width: 300px;
    height: 300px;
  }
}

.product-subtitle {
  color: #B3B3B3;
  padding-top: 10px;
  font-size: 18px;
  font-weight: 400;
}

.product-cell {
  border: 2px solid #fff;
  margin: 0 -2px -2px 0;
  padding: 30px;

  @media (max-width: 520px) {
    padding: 20px;
  }
}

.grids {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.order {
  &:first-child {
    grid-column: span 2;

    @media (max-width: 520px) {
      grid-column: span 1;
    }
  }

  &:nth-child(2) {
    @media (max-width: 520px) {
      order: 2;
    }
  }

  &:nth-child(3) {
    @media (max-width: 520px) {
      order: 1;
    }
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-width: 520px;

  @media (max-width: 980px) {
    min-width: 100%;
  }

  &:first-child {
    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
