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
                localStorage.setItem("auth-token", data.data.token),
                localStorage.setItem("userID", data.data.id),
                localStorage.setItem("userName", data.data.name),
                localStorage.setItem("email", data.data.email),
                localStorage.setItem("userType", data.data.userType)
            })
            .then(router.push('/' + localStorage.getItem("userID")))
        }
        catch(error) {
            console.log(error)
        }
        
    }

    const editPass = async () => {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({ 
                password: uState.password
            })
        };
       
        try {
            const response = await fetch(
                "http://localhost:4000/api/user/updatePass/" + localStorage.getItem("userID"),
                requestOptions
              );
          
              if (!response.ok) {
                throw new Error("Failed to update user profile");
              }
              router.push('/' + localStorage.getItem("userID"))
        }
        catch(error) {
            console.error(error);
        }
    };

    const editUser = async () => {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({ 
                name: uState.name,
                email: uState.email
            })
        };
       
        try {
            const response = await fetch(
                "http://localhost:4000/api/user/" + localStorage.getItem("userID"),
                requestOptions
              );
          
              if (!response.ok) {
                throw new Error("Failed to update user profile");
              }
          
              const data = await response.json();
              localStorage.setItem("userName", data.name);
              localStorage.setItem("email", data.email);
              router.push('/' + localStorage.getItem("userID"));
        }
        catch(error) {
            console.error(error);
        }
    };

    const logOut = () => {
        localStorage.clear();
        router.push("/login");
    }

    return { uState, loginUser, logOut, newUser, editUser, editPass}
}

export default getUser