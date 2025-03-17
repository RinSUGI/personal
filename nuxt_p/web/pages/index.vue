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
    const res: HogeUserResponse = await postRequest(endpoint, params);
    console.log(res.data);
    hogeUserRef.value = res;
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
