<template>
    <div class="list-body">
        <div class="task-top">
            <button @click="router.go(-1)"><h2 class="close-btn">X</h2></button>
            <h2 class="title">Tasks</h2>
        </div>
        <div class="folder-body">
            <ul class="newlist">
                <li>
                    <RouterLink :to="`/createtask/${id}`">
                        <img src="../assets/icon-folder.svg" alt="">
                        <h3>Create task</h3>
                    </RouterLink>
                </li>
            </ul>
            <ul v-for="task in tState.tasks" :key="task._id">
                <li>
                    <RouterLink :to="`/task/${id}/${task._id}`">
                        <img src="../assets/icon-folder.svg" alt="">
                        <h3>{{ task.title }}</h3>
                    </RouterLink>
                </li>
            </ul>
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

const { tState, getTasks } = task()

onMounted(() => {
    getTasks()
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
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 6px 6px 0px 2px rgba(0,0,0,0.5);
}

.newlist {
    border-bottom: #989893 2px solid;
}

::-webkit-scrollbar {
    width: 1rem;
    background-color: #DADAD3;
}

/* Track */
::-webkit-scrollbar-track {
    border: 2px solid #1D1D1B;
    border-top: none;
    border-right: none;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    border: 2px solid #1D1D1B;
    border-right: none;
    background-color: #C1C1BF; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #989893; 
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

ul {
    display: grid;
    grid-template-columns: auto auto auto auto;
    list-style: none;
}

li {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h3 {
    text-align: center;
}

.folder-body {
    width: 100%;
    height: 100%;
    padding: 1rem 1rem 1rem 0rem;
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

button {
    position: fixed;
    z-index: 4;
    background-color: #DADAD3;
    margin: 0;
    width: 2rem;
    height: max-content;
    padding: 0;
    width: max-content;
}

@media screen and (max-width: 670px) {
    .list-body {
    height: 40rem;
    width: 20rem;
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