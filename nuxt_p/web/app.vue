<script setup lang="ts">
import { ref } from 'vue';

const label = ref<string>('ボタンだよ');
const handleMessage = () => {
  window.alert('button pushed');
};
</script>

<template>
  <div>
    <a-button @click="handleMessage"> {{ label }} </a-button>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
