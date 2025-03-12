<script setup lang="ts">
import { ref } from 'vue';

const label = ref<string>('ボタンだaaaよ');
const handleMessage = () => {
  window.alert('button pushed');
};
</script>

<template>
  <div>
    <a-button @click="handleMessage"> {{ label }} </a-button>
    <!-- pages配下の各画面を表示 -->
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped></style>
