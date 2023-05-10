<template>
    <div class="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>Login</button>
        <p>Not signed up yet? Click here to sign up!</p>
    </div>
</template>

<script setup>

</script>

<style scoped>
.login-form {
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
    opacity: 0.5;
}
</style>