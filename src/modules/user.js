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

    const loginUser = async () => {
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    email: uState.email,
                    password: uState.password 
                })
            };
            await fetch("http://localhost:4000/api/user/login", requestOptions)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("auth-token", data.data.token)
            })
            .then(router.push('/'))
        }
        catch(error) {
            console.log(error)
        }
        
    }

    const logOut = () => {
        localStorage.clear();
        router.push("/login");
    }

    return { uState, loginUser, logOut, newUser}
}

export default getUser