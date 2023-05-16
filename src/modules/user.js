import { reactive } from "vue"
import { useRouter } from 'vue-router'


const getUser = () => {
    const router = useRouter();

    const uState = reactive({
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
                name: uState.name,
                email: uState.email,
                password: uState.password 
            })
        };
       
        fetch("http://localhost:4000/api/user/register", requestOptions)
        .then(router.push('/login'))
    }

    const loginUser = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("data.token")
            },
            body: JSON.stringify({ 
                email: uState.email,
                password: uState.password 
            })
        };
       
        fetch("http://localhost:4000/api/user/login", requestOptions)
        .then(router.push('/'))
    }

    const logOut = () => {
        localStorage.clear();
        router.push("/login");
    }

    return { uState, loginUser, logOut, newUser}
}

export default getUser