<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of options" :key="i"
        @click="selected = option; open = false; $emit('selectSort', selected)"
        :class="{ itemsGreen: option === selected }">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  default: {
    type: String,
    required: false,
    default: null,
  },
  tabindex: {
    type: Number,
    required: false,
    default: 0,
  },
})

const selected = ref(props.default ? props.default : (props.options.length > 0 ? props.options[0] : null))
const open = ref(false)

</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: auto;
  line-height: 47px;
}

.custom-select 
.selected {
  border: 2px solid white;
  font-size: 16px;
  color: #fff;
  padding: 6px 23px;
  cursor: pointer;
  user-select: none;
}

.custom-select 
.selected.open {
  border: 2px solid #fff;
}

.custom-select 
.selected:after {
  position: absolute;
  right: 2em;
  zoom: 55%;  
  content: url("@/assets/icons/chevron_down.svg#chevron_down");
}

.custom-select 
.items {
  color: #fff;
  font-size: 16px;
  overflow: hidden;
  border: 2px solid #48b322;
  position: absolute;
  background-color: #000;
  top: 61px;
  left: 0;
  right: 0;
  line-height: 61px;
  z-index: 1;
}

.itemsGreen {
  color: #48b322 !important;
}

.custom-select 
.items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select 
.items div:hover {
  background-color: #202020;
}

.selectHide {
  display: none;
}
</style>
