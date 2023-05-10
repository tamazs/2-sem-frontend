<template>
    <section class="mac-bar">
        <div class="mac-bar-left">
            <ul>
                <li>Project 1</li>
                <li>Account</li>
                <li>Log out</li>
            </ul>
        </div>
        <div class="mac-bar-right">
            <ul>
                <li><img src="../assets/icon-battery-m.png" alt="Battery"></li>
                <li>Wed 15:00</li>
            </ul>
        </div>
    </section>
</template>

<script setup>

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
    margin-left: 1rem;
}

.mac-bar-left li {
    margin-right: 1rem;
}

img {
    height: 1rem;
}
</style>