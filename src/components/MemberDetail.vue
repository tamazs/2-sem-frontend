<template>
    <div class="list-body">
        <div class="task-top">
            <button @click="router.go(-1)"><h2 class="close-btn">X</h2></button>
            <h2 class="title">Member details</h2>
        </div>
        <div class="folder-body">
            <p><b>Name:</b> {{ pState.members.name }}</p>
            <p><b>Email:</b> {{ pState.members.email }}</p>
            <button v-if="userType === 'Owner' || userID === pState.members._id" class="create-btn" @click="deleteMember(pState.members._id)">Delete member</button>
        </div>
    </div>
</template>

<script setup>
import router from '../router';
import project from '../modules/project';
import { onMounted } from 'vue';

const userType = localStorage.getItem('userType');
const userID = localStorage.getItem('userID');

const { pState, getMemberDetails, deleteMember } = project()

onMounted(() => {
    getMemberDetails()
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

.create-btn {
    background-color: #54B9AD;
    color: white;
    padding: 1rem 2rem;
    width: 20%;
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