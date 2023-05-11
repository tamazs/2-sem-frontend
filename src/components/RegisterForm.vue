<template>
    <div class="register-form">
        <h2>Register</h2>
        <input type="text" placeholder="Name" v-model="state.name">
        <input type="email" placeholder="Email" v-model="state.email">
        <input type="password" placeholder="Password" v-model="state.password">
        <button @click="newUser()">Register</button>
        <p>Already registered? <RouterLink to="/login">Click here to log in!</RouterLink></p>
    </div>
</template>

<script setup>
import user from '../modules/user';

const { state, newUser} = user()
</script>

<style scoped>
.register-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem 4rem;
    background-color: white;
    border-radius: 1rem;
}

input {
    margin-bottom: 1rem;
    width: 100%;
    height: 2rem;
    border-radius: 0.3rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
}

button {
    background-color: #54B9AD;
    color: white;
    border-radius: 1rem;
    border: none;
    padding: 1rem 2rem;
    margin-bottom: 0.5rem;
}

p {
    font-size: 0.8rem;
}

a {
    color: #54B9AD;
}
</style>