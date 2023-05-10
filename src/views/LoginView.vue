<template>
    <div class="login-body">
        <LoginForm/>
    </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue';


</script>

<style scoped>
.login-body {
  position: relative;
  background: #54B9AD;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-size: 105rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>