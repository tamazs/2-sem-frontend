<template>
    <div class="register-form">
        <h2>Register</h2>
        <div class="folder-body">
            <input type="text" placeholder="Name" v-model="state.name">
            <input type="email" placeholder="Email" v-model="state.email">
            <input type="password" placeholder="Password" v-model="state.password">
            <button @click="newUser()">Register</button>
            <p>Already registered? <RouterLink to="/login">Click here to log in!</RouterLink></p>
        </div>
    </div>
</template>

<script setup>
import user from '../modules/user';

const { state, newUser} = user()
</script>

<style scoped>
.register-form {
    height: 40rem;
    width: 40rem;
    position: absolute;
    background-color: white;
    padding: 0;
    border: 2px solid black;
}

input {
    margin-bottom: 1.5rem;
    width: 80%;
    height: 2rem;
    border: 1px solid black;
}

button {
    background-color: #54B9AD;
    color: white;
    padding: 1rem 2rem;
    width: 30%;
    border: 2px solid black;
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

.folder-body {
    width: 100%;
    height: 100%;
    padding: 5rem 3rem;
    display: flex;
    flex-direction: column;
}

p {
    font-size: 0.8rem;
}

a {
    color: #54B9AD;
}
</style>