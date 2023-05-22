<template>
    <div class="list-body">
        <div class="task-top">
            <button @click="router.go(-1)"><h2 class="close-btn">X</h2></button>
            <h2 class="title">Tasks</h2>
        </div>
        <div class="folder-body">
            <ul v-if="userType === 'Owner'" class="newlist">
                <li>
                    <RouterLink :to="`/addmember/${id}`">
                        <img src="../assets/icon-about.svg" alt="">
                        <h3>Add new member</h3>
                    </RouterLink>
                </li>
            </ul>
            <ul class="member-grid">
                <li v-for="member in pState.members" :key="member.id">
                    <RouterLink :to="`/member/${id}/${member.id}`">
                        <img src="../assets/icon-about.svg" alt="">
                        <h3>{{ member.name }}</h3>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import router from '../router';
import { useRoute } from 'vue-router';
import project from '../modules/project';
import { onMounted } from 'vue';

const userType = localStorage.getItem('userType');

const { pState, getMembers } = project()

onMounted(() => {
    getMembers()
})

const route = useRoute();

const id = route.params.id;

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
    list-style: none;
}

ul.member-grid {
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