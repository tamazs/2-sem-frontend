<template>
    <div class="list-body">
        <h2>Projects</h2>
        <div class="folder-body">
            <ul>
                <li>
                    <RouterLink to="/project">
                        <img src="../assets/icon-folder.svg" alt="">
                        <h3>Project 1</h3>
                    </RouterLink>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
                <li>
                    <img src="../assets/icon-folder.svg" alt="">
                    <h3>Project 1</h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

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
    display: grid;
    grid-template-columns: auto auto auto auto;
    list-style: none;
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