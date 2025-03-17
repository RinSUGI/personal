<script setup lang="ts">
import { onMounted } from 'vue';

const sample = async (): Promise<void> => {
  try {
    const res = await fetch('/api/hoge-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // 必要なデータを JSON 化して送信する（例として固定値を設定）
      body: JSON.stringify({
        loginId: 'test001',
        name: 'テスト001',
        email: 'new@example.com',
      }),
    });
    console.log(await res.json());
  } catch (error: any) {
    console.error(error);
  }
};

onMounted(async () => {
  await sample();
});
</script>

<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <AButton>test</AButton>
  </div>
</template>

<style scoped lang="scss">
.home {
  text-align: center;
  margin-top: 50px;
}
</style>
