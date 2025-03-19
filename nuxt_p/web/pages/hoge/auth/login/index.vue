<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from '~/components/LoginForm.vue';

// 画面のメタ設定
definePageMeta({
  // 画面レイアウト
  layout: 'un-auth',
});

const loginId = ref('');
const password = ref('');

function handleHogeLogin() {
  // Hoge ユーザー向けログイン処理（API 呼び出し等を実装）
  console.log('Hoge login:', {
    loginId: loginId.value,
    password: password.value,
  });
}
</script>

<template>
  <!-- hogeユーザーのログイン情報入力欄を注入する -->
  <LoginForm>
    <AForm @submit.prevent="handleHogeLogin">
      <AFormItem label="loginId">
        <AInput v-model:value="loginId" placeholder="loginId" name="loginId" />
      </AFormItem>
      <AFormItem label="password">
        <AInput v-model:value="password" placeholder="password" name="password" />
      </AFormItem>
      <AFormItem class="login-action">
        <AButton type="primary" html-type="submit">ログイン</AButton>
      </AFormItem>
    </AForm>
  </LoginForm>
</template>

<style scoped lang="scss">
.login-action {
  display: flex;
  justify-content: center;
}
</style>
