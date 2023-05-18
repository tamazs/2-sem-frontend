<template>
    <div class="list-body">
        <div class="task-top">
            <button class="close" @click="router.go(-1)"><h2 class="close-btn">X</h2></button>
            <h2 class="title">Update account</h2>
        </div>
        <div class="folder-body">
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Email">
            <button class="edit-btn">Edit account</button>
        </div>
    </div>
</template>

<script setup>
import router from '../router';

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

.edit-btn {
    background-color: #54B9AD;
    color: white;
    padding: 1rem 2rem;
    width: 30%;
    border: 2px solid black;
}

p {
    max-width: 90%;
    overflow-wrap: break-word;
}

input {
    margin-bottom: 1.5rem;
    width: 80%;
    height: 2rem;
    border: 1px solid black;
}


@media screen and (max-width: 670px) {
.list-body {
    height: 40rem;
    width: 20rem;
    overflow: hidden;
}

.title {
    width: 20rem;
}

input {
    width: 70%;
}

.edit-btn {
    padding: 1rem 1rem;
}
}
</style>