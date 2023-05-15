<template>
  <header>
        <MacBar/>
    </header>
    <div class="settings-body">
        <SettingsForm/>
    </div>
</template>

<script setup>
import MacBar from '../components/MacBar.vue';
import SettingsForm from '../components/SettingsForm.vue';


</script>

<style scoped>
header{
  position: absolute;
  z-index: 5;
  width: 100vw;
}
.settings-body {
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