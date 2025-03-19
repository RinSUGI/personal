<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
const props = withDefaults(
  defineProps<{
    /* カード部分の横幅 */
    cardWidth?: string;
    /* 垂直方向配置 */
    justifyContent?: string;
  }>(),
  {
    cardWidth: '100%',
    justifyContent: '',
  },
);
</script>

<template>
  <ALayoutContent class="layout-content" :style="{ justifyContent: props.justifyContent }">
    <ACard :bordered="false" class="body-card" :style="{ width: props.cardWidth }">
      <!-- カード内のコンテンツを表示 -->
      <NuxtPage />
    </ACard>
  </ALayoutContent>
</template>

<style lang="scss" scoped>
.layout-content {
  flex: 1; /* コンテンツ部分が残りの領域を占有 */
  background-color: beige;
  display: flex;
  justify-content: center;
  padding: 24px;
}

.body-card {
  height: auto;
  background-color: white;
}
</style>
