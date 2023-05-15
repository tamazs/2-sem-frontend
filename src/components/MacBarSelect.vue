<template>
    <section class="mac-bar">
        <div class="mac-bar-left">
            <ul>
                <li><b>Welcome, Mr Bean</b></li>
            </ul>
        </div>
        <div class="mac-bar-right">
            <ul>
                <li><img src="../assets/icon-battery-m.png" alt="Battery"></li>
                <li>{{ moment().format('ddd MMM Do') }}</li>
                <li><b>Log out</b></li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import moment from "moment";

</script>

<style scoped>
.mac-bar {
    position: fixed;
    height: 2rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fad844;
    border-bottom: 2px solid black;
    z-index: 2;
}

.mac-bar-left {
    padding: 0.3rem 3rem 0 3rem;
}

.mac-bar-right {
    padding: 0.3rem 3rem 0 3rem;
}

ul {
    display: flex;
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

.mac-bar-right li {
    margin-left: 2rem;
}

img {
    height: 1rem;
}

@media screen and (max-width: 670px) {
    .mac-bar {
    height: 3rem;
}
}
</style>