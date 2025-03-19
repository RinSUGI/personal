<script setup lang="ts">
import BaseHeader from '~/components/BaseHeader.vue';
import BaseBody from '~/components/BaseBody.vue';
import BaseFooter from '~/components/BaseFooter.vue';
</script>

<template>
  <ALayout class="authed-layout">
    <BaseHeader />
    <BaseBody card-width="100%" />
    <BaseFooter />
  </ALayout>
</template>

<style scoped lang="scss">
.authed-layout {
  min-height: 100vh; /* 画面全体の高さを確保 */
  display: flex;
  flex-direction: column;
}
</style>
