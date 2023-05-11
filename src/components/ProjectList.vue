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
    width: 100%;
    height: max-content;
    background-color: #DADAD3;
    text-align: center;
    margin: 0;
    padding: 1rem 0;
    font-size: 1.2rem;
    border-bottom: 2px solid black;
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
</style>