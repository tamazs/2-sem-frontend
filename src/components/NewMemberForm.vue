<template>
    <div class="list-body">
        <div class="task-top">
            <button class="close-button" @click="router.go(-1)"><h2 class="close-btn">X</h2></button>
            <h2 class="title">Add member</h2>
        </div>
        <div class="folder-body">
            <input type="text" placeholder="Add member by email" v-model="pState.members">
            <button class="create-btn" @click="addMemberProject()">Add member</button>
        </div>
    </div>
</template>

<script setup>
import router from '../router';

import project from '../modules/project';

const { pState, addMemberProject} = project()
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
    width: 30%;
    border: 2px solid black;
}

input {
    margin-bottom: 1.5rem;
    width: 80%;
    height: 2rem;
    border: 1px solid black;
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
    padding: 5rem 3rem;
    display: flex;
    flex-direction: column;
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

.close-button {
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