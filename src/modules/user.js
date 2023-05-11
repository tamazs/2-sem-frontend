import { ref } from "vue"
import { useRouter } from 'vue-router'


const getUser = () => {
    const router = useRouter();

    const state = ref({
        name: '',
        email: '',
        password: ''
    })

    const newUser = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: state.value.name,
                email: state.value.email,
                password: state.value.password
            })
        }
        fetch("http://localhost:4000/api/user/register/new", requestOptions)
        .then(router.push('/login'))
    }

    return { state, newUser}
}

export default getUser