<template>
    <header>
        <MacBar/>
    </header>
    <div class="taskdetail-body">
        <TaskDetail/>
    </div>
</template>

<script setup>
import MacBar from '../components/MacBar.vue';
import TaskDetail from '../components/TaskDetail.vue';


</script>

<style scoped>

header{
  position: absolute;
  z-index: 5;
  width: 100vw;
}
.taskdetail-body {
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