<template>
    <header>
        <MacBarSelect/>
    </header>
    <div class="ct-body">
        <NewTaskForm/>
    </div>
</template>

<script setup>
import MacBarSelect from '../components/MacBarSelect.vue';
import NewTaskForm from '../components/NewTaskForm.vue';


</script>

<style scoped>

header{
  position: absolute;
  z-index: 5;
  width: 100vw;
}
.ct-body {
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