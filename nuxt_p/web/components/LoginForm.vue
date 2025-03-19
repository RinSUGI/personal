<script setup lang="ts"></script>

<template>
  <div>
    <div class="logo-container">
      <img src="/sakura.svg" alt="logo" class="logo" />
    </div>
    <div>
      <!-- hogeユーザー向け、もしくはfugaユーザー向けのログインフォームアイテム、もしくは全く別のログインフォームアイテム -->
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>
