<script setup lang="ts">
import { onMounted } from 'vue';
import { postRequest } from '~/services/apiClientHandler';
import type { HogeUserResponse } from '~/pages/hogeUserTypes';

const hogeUserRef = ref<HogeUserResponse | null>(null);

const sample = async (): Promise<void> => {
  try {
    const endpoint: string = '/api/hoge-user';
    const params = {
      loginId: 'test001',
      name: 'テスト001',
      email: 'new@example.com',
    };
    const ress: HogeUserResponse = await postRequest(endpoint, params);
    console.log(ress.data);
    hogeUserRef.value = ress;

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
  } catch (error: unknown) {
    console.error(error);
  }
};

const a: string = 'Welcome to the Home Page';
const b: string = 'test';

onMounted(async () => {
  await sample();
});
</script>

<template>
  <div class="home">
    <h1>{{ a }}</h1>
    <pre>{{ hogeUserRef }}</pre>
    <AButton>{{ b }}</AButton>
  </div>
</template>

<style scoped lang="scss">
.home {
  text-align: center;
  margin-top: 50px;
}
</style>
