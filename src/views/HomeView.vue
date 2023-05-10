<script setup>
import MacBar from '../components/MacBar.vue';
import TopNav from '../components/TopNav.vue';
import BottomNav from '../components/BottomNav.vue';

</script>

<template>
  <header>
    <MacBar/>
    <TopNav/>
  </header>
  <div class="body-wrap">
    <BottomNav/>
  </div>
</template>

<style scoped>
header{
  position: absolute;
  z-index: 5;
  width: 100vw;
}
.body-wrap {
  position: relative;
  background: #54B9AD;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-size: 105rem;
}
</style>
