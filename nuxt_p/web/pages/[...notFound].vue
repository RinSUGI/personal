<!-- 存在しないURLが指定された場合、ここに飛んでくる -->
<script setup lang="ts"></script>

<template>
  <div class="error-page">
    <h1>404 - ページが見つかりません</h1>
    <p>お探しのページは存在しません。</p>
    <NuxtLink to="/">トップページへ戻る</NuxtLink>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
  margin-top: 50px;
}
</style>
