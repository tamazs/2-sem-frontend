<template>
    <div class="list-body">
        <h2>Projects</h2>
        <div class="folder-body">
            <ul class="newlist">
                <li>
                    <RouterLink to="/createproject">
                        <img src="../assets/icon-folder.svg" alt="">
                        <h3>Create project</h3>
                    </RouterLink>
                </li>
            </ul>
            <ul class="project-grid">
                <li v-for="project in pState.projects" :key="project._id">
                    <RouterLink :to="`/project/${project._id}`">
                        <img src="../assets/icon-folder.svg" alt="">
                        <h3>{{ project.title }}</h3>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import project from '../modules/project';
import { onMounted } from 'vue';

const { pState, getUserProjects} = project()

onMounted(() => {
    getUserProjects()
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

h2 {
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
    list-style: none;
}

ul.project-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 0rem;
}

ul.project-grid li{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.folder-body {
    width: 100%;
    height: 100%;
    padding: 1rem;
}

img {
    height: 6rem;
}

a {
    text-decoration: none;
    color: black;
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

h2 {
    width: 20rem;
}
}
</style>