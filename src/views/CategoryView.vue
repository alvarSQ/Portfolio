<template>
  <template v-if="!varStore.isError">
    <div class="wrapper-category">
      <div class="bg-category"></div>
      <div style="padding-top: 170px;"></div>
      <div style="margin-top: 20px; position: relative; height: auto;"></div>
      <div class="container-category" v-if="hasCategory">
        <div class="title-category">{{ category.name }}</div>
        <div class="content-category">
          <form class="filters">
            <div class="sort">
              <CustomSelect :options="['Порядок: по умолчанию', 'Сначала дешевые', 'Сначала дорогие', 'Новые']"
                :default="selected" @selectSort="selectSort" />
            </div>
            <div>
              <div class="filter" :class="{ 'disp-none': propert.values_count === 0 }"
                v-for="propert in prodStore.getProducts.properties" :key="propert.id">
                <p class="filter-title">{{ propert.name }}</p>
                <div class="params">
                  <div class="checkbox-row" v-for="(value, index) in propert.values" :key="propert.key_values[index]">
                    <label>
                      <input :type="propert.filter_type" :checked="isChecked(value)" :value="value"
                        @change="inputProp(propert.id, value, $event)">
                      <span class="custom-checkbox"></span>
                      <span> {{ value }} {{ propert.measure }} </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div style="position: relative;">
            <Preloader v-if="isPreloader" />
            <div class="products-category" v-else>
              <ProductCard v-for="product in prodStore.getProducts.items" :key="product.id" :productSlug="product.slug">
                <template v-slot:title>
                  {{ product.name }}
                </template>
                <template v-slot:price>
                  {{ product.offers ? `${product.offers[0].price_value.toLocaleString('ru-RU')} р.` : 'нет в наличии' }}
                </template>
              </ProductCard>
            </div>
          </div>
        </div>
      </div>

    </div>
  </template>
  <notFound v-else />
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import ProductCard from '@/components/UI/productCard.vue'
import Preloader from '@/components/UI/preloader.vue'
import CustomSelect from '@/components/UI/custom-select.vue'
import notFound from '@/views/notFound.vue'
import { useRoute, useRouter } from 'vue-router'
import { useVarStore } from '@/stores/vars.js'
import { useCategoriesStore } from '@/stores/categories.js'
import { useProductsStore } from '@/stores/products.js'
const varStore = useVarStore()
const catStore = useCategoriesStore()
const prodStore = useProductsStore()

const router = useRouter()
const route = useRoute()

const querySort = ref('no')
const queryStringRourer = ref([])
const hasCategory = ref(false)
const stringQuery = ref([])
const isPreloader = ref(false)
const paramAxios = ref(null)

const slug = computed(() => route.params.slug)
const category = computed(() => catStore.getCategoryBySlug(slug.value))

const queryFiltersSort = computed(() => {

  let params = new URLSearchParams()
  params.append('category', slug.value)

  let arr = null  
  if (route.query.filter) {
    if (typeof (route.query.filter) === 'string') {
      arr = [route.query.filter]
      arr = arr.map(el => el.split('-'))
    }
    else {
      arr = route.query.filter.map(el => el.split('-'))
    }
    arr.map(el => {
      params.append(`filter[property][${el[0]}][]`, el[1])
    })
    stringQuery.value = arr
  }  

  params.append('sort', `${route.query.sort ? route.query.sort : 'no'}`)

  return paramAxios.value = params
})

const isChecked = (value) => {
  value = value.toLowerCase().replaceAll(' ', '')
  return stringQuery.value.some(el => el[1] === value)
}

const selected = computed(() => {
  if (route.query.sort === 'price|asc') {
    return 'Сначала дешевые'
  } if (route.query.sort === 'price|desc') {
    return 'Сначала дорогие'
  } if (route.query.sort === 'new') {
    return 'Новые'
  }
  return 'Порядок: по умолчанию'
})

const inputProp = (id, value, e) => {
  value = value.toLowerCase().replaceAll(' ', '')
  querySort.value = route.query.sort
  let arrFiltr = []
  if (route.query.filter) {
    typeof (route.query.filter) === 'string' ? arrFiltr = [[route.query.filter]] : arrFiltr = route.query.filter.map(el => [el])
  }
  if (e.target.checked) {
    arrFiltr.push([`${id}-${value}`])
    queryStringRourer.value = arrFiltr
  }
  else {
    queryStringRourer.value = arrFiltr
    queryStringRourer.value = queryStringRourer.value.filter((el) => el[0] !== `${id}-${value}`)
  }
  addQuery()
}

const selectSort = (select) => {
  if (select === 'Порядок: по умолчанию') {
    querySort.value = 'no'
  }
  if (select === 'Сначала дешевые') {
    querySort.value = 'price|asc'
  }
  if (select === 'Сначала дорогие') {
    querySort.value = 'price|desc'
  }
  if (select === 'Новые') {
    querySort.value = 'new'
  }
  queryStringRourer.value = route.query.filter
  addQuery()
};

const addQuery = () => {
  isPreloader.value = true
  router.push({
    path: `/category/${slug.value}`, query: { filter: queryStringRourer.value, sort: querySort.value }
  })
  setTimeout(() => {
    prodStore.loadProducts(queryFiltersSort.value)    
  }, 1)
}

prodStore.loadProducts(queryFiltersSort.value)

watch(
  () => prodStore.getProducts,
  () => {
    hasCategory.value = true
    isPreloader.value = false
  },
  { deep: true }
)

</script>

<style lang="scss">
@import "@/assets/scss/utils/vars.scss";

.wrapper-category {
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  min-height: 100vh;
}

.bg-category {
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

.container-category {
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

.title-category {
  font-family: $titleFont;
  color: #48b322;
  font-size: 60px;
  font-weight: 300;
  line-height: 60px;
  text-transform: uppercase;
  padding: 130px 0 60px;

  @media (max-width: 680px) {
    font-size: 40px;
    line-height: 44px;
    padding: 40px 0;
  }
}

.content-category {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 40px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
}

.filters {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sort {
  position: relative;
  margin: 0 -2px -2px 0;
}

.filter {
  border: 2px solid white;
  margin: 0 -2px -2px 0;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.filter-title {
  color: #48b322;
  font-family: $titleFont;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
}

.params {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.checkbox-row {
  display: flex;
  gap: 5px;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input[type=checkbox] {
    display: none;
  }
}

.custom-checkbox {
  margin-right: 5px;
  width: 20px;
  height: 20px;
  border: 2px solid #B3B3B3;
  background-color: black;
  display: inline-block;
  position: relative;
}

input[type=checkbox]:checked+.custom-checkbox {
  border: 2px solid white;
}

input[type=checkbox]:checked+.custom-checkbox:after {
  content: url("@/assets/icons/check.svg");
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.products-category {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
}
</style>
