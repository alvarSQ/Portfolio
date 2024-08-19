<template>
  <div class="dual-ring"/>
</template>

<script setup></script>

<style lang="scss" scoped>
.dual-ring {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  &:after {
    content: " ";
    display: block;
    width: 75px;
    height: 75px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #48B322;
    border-color: #48B322 transparent #48B322 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
