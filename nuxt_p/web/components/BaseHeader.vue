<script setup lang="ts">
import { ref } from 'vue';
const selectedKeys = ref<string[]>([]);
</script>

<template>
  <ALayoutHeader class="base-header">
    <h1 class="header-title">{{ 'ヘッダーだよ' }}</h1>
    <AMenu v-model:selected-keys="selectedKeys" mode="horizontal">
      <AMenuItem key="1">nav 1</AMenuItem>
      <AMenuItem key="2">nav 2</AMenuItem>
      <AMenuItem key="3">nav 3</AMenuItem>
    </AMenu>
  </ALayoutHeader>
</template>

<style lang="scss" scoped>
.base-header {
  display: flex;
  background-color: darkgoldenrod;
  height: 56px;
}

.header-title {
}
</style>
