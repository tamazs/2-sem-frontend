<template>
    <section class="top-nav">
        <ul>
            <li>
                <RouterLink :to="`/tasks/${id}/${states[0]}`">
                    <img src="../assets/icon-folder.svg" alt="">
                    <h2>ToDo</h2>
                </RouterLink>
            </li>
            <li>
                <RouterLink :to="`/tasks/${id}/${states[1]}`">
                    <img src="../assets/icon-folder.svg" alt="">
                    <h2>Doing</h2>
                </RouterLink>
            </li>
            <li>
                <RouterLink :to="`/tasks/${id}/${states[2]}`">
                    <img src="../assets/icon-folder.svg" alt="">
                    <h2>Done</h2>
                </RouterLink>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const id = route.params.id;
const states = ["ToDo", "Doing", "Done"]

</script>

<style scoped>
.top-nav {
    margin: 0 2rem 2rem 2rem;
    margin-left: auto;
    padding-top: 3rem;
    width: auto;
    width: fit-content;
    z-index: 3;
}

.top-nav ul {
    display: flex;
    margin: 2rem;
    padding-left: 0;
    width: auto;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
}

li {
    list-style: none;
    margin-bottom: 2rem;
}

img {
    height: 5rem;
    width: 100%;
    padding-left: 0.3rem;
}

h2 {
    box-sizing: border-box;
    margin: 0.6rem 0 0 0;
    font-size: 1.2rem;
    font-weight: normal;
    text-align: center;
}

a {
    color: black;
    text-decoration: none;
}

</style>