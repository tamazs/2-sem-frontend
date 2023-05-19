<template>
    <div class="list-body">
        <div class="task-top">
            <button class="close" @click="router.go(-1)"><h2 class="close-btn">X</h2></button>
            <h2 class="title">Task Details</h2>
        </div>
        <div class="folder-body">
            <p><b>Title:</b> {{ tState.tasks.title }}</p>
            <p><b>Details:</b> {{ tState.tasks.detail }}</p>
            <p><b>Assigned to:</b> {{ tState.tasks.assignedTo }}</p>
            <p><b>State:</b> {{ tState.tasks.state }}</p>
            <p><b>Created at:</b> {{ formatDateTime(tState.tasks.createdDate) }}</p>
            <button v-if="tState.tasks.state != 'ToDo'" class="edit-btn" style="margin-top: 2rem;" @click="editTaskState(tState.tasks._id, states[0])">Move to ToDo</button>
            <button v-if="tState.tasks.state != 'Doing'" class="edit-btn" style="margin-top: 2rem;" @click="editTaskState(tState.tasks._id, states[1])">Move to Doing</button>
            <button v-if="tState.tasks.state != 'Done'" class="edit-btn" style="margin-top: 2rem;" @click="editTaskState(tState.tasks._id, states[2])">Move to Done</button>
            <button class="edit-btn" style="margin-top: 2rem;" @click="router.push('/edittask/'+ id + '/' + tState.tasks._id)">Edit task</button>
        </div>
    </div>
</template>

<script setup>
import router from '../router';
import task from '../modules/task';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const id = route.params.id;

const states = ["ToDo", "Doing", "Done"]

const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
}

const { tState, getSpecificTask, editTaskState } = task()

onMounted(() => {
    getSpecificTask()
})



</script>

<style scoped>
.list-body {
    height: 40rem;
    width: 40rem;
    position: absolute;
    background-color: white;
    padding: 0;
    border: 2px solid black;
    box-shadow: 6px 6px 0px 2px rgba(0,0,0,0.5);
}

.edit-btn {
    background-color: #54B9AD;
    color: white;
    padding: 1rem 2rem;
    width: 30%;
    border: 2px solid black;
}

.title {
    width: 40rem;
    height: max-content;
    background-color: #DADAD3;
    text-align: center;
    margin: 0;
    padding: 0.3rem 0;
    font-size: 1rem;
    border-bottom: 2px solid black;
    position: fixed;
}

h3 {
    text-align: center;
}

.folder-body {
    width: 100%;
    height: 100%;
    padding: 2rem;
}

img {
    height: 6rem;
}

a {
    text-decoration: none;
    color: black;
}

.close-btn {
    margin: 0;
    width: 2rem;
    text-align: center;
    padding: 0.2rem 0;
    font-size: 1rem;
}

.close {
    position: fixed;
    z-index: 4;
    background-color: #DADAD3;
    margin: 0;
    width: 2rem;
    height: max-content;
    padding: 0;
    width: max-content;
}

p {
    max-width: 90%;
    overflow-wrap: break-word;
}

@media screen and (max-width: 670px) {
    .list-body {
    height: 40rem;
    width: 20rem;
    overflow: hidden;
}

ul {
    display: grid;
    grid-template-columns: auto auto;
    list-style: none;
}

.title {
    width: 20rem;
}
}
</style>