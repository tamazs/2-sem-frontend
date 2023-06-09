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

        fetch("https://men-restful-api.onrender.com/api/user/register", requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    // Display the error message to the user
                    alert(data.message);
                } else {
                    // User creation successful, redirect to the login page
                    router.push('/login');
                }
            })
            .catch(error => {
                console.error("An error occurred:", error);
                // Handle any other network or runtime errors
            });
    };


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
            await fetch("https://men-restful-api.onrender.com/api/user/login", requestOptions)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("auth-token", data.data.token),
                localStorage.setItem("userID", data.data.id),
                localStorage.setItem("userName", data.data.name),
                localStorage.setItem("email", data.data.email),
                localStorage.setItem("userType", data.data.userType)
            })
            .then(router.push('/' + localStorage.getItem("userID")))
            .catch(error => {
                alert("An error occurred during login.");
                console.error("An error occurred:", error);
                // Handle any other network or runtime errors
            });
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
                "https://men-restful-api.onrender.com/api/user/updatePass/" + localStorage.getItem("userID"),
                requestOptions
              );
          
              if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.message;
                alert(errorMessage);
              } else {
                router.push('/' + localStorage.getItem("userID"))
              }
        }
        catch(error) {
            console.error(error);
            alert("An error occurred while updating the password.");
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
                "https://men-restful-api.onrender.com/api/user/" + localStorage.getItem("userID"),
                requestOptions
              );
          
              if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.message;
                alert(errorMessage);
              } else {
                const data = await response.json();
                localStorage.setItem("userName", data.name);
                localStorage.setItem("email", data.email);
                router.push('/' + localStorage.getItem("userID"));
              }
        }
        catch(error) {
            console.error(error);
            alert("An error occurred while updating the user.");
        }
    };

    const logOut = () => {
        localStorage.clear();
        router.push("/login");
    }

    return { uState, loginUser, logOut, newUser, editUser, editPass}
}

export default getUser