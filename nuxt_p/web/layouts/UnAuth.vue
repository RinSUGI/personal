<script setup lang="ts">
import BaseBody from '~/components/BaseBody.vue';
import BaseFooter from '~/components/BaseFooter.vue';
</script>

<template>
  <ALayout class="unauth-layout">
    <ALayoutHeader class="layout-header"></ALayoutHeader>
    <BaseBody card-width="400px" justify-content="center" />
    <BaseFooter />
  </ALayout>
</template>

<style scoped lang="scss">
.unauth-layout {
  min-height: 100vh; /* 画面全体の高さを確保 */
  display: flex;
  flex-direction: column;
}

.layout-header {
  background-color: beige;
  height: 56px;
}
</style>
