<script setup lang="ts">
import { onMounted } from 'vue';

const sample = async (): Promise<void> => {
  try {
    const res = await fetch('/api/sample');
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
