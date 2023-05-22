import { reactive, computed } from "vue"
import { useRoute, useRouter } from 'vue-router'


const getTask = () => {
    const route = useRoute();
    const router = useRouter();

    const projectId = computed(() => route.params.id)
    const taskId = computed(() => route.params.taskId)
    const state = route.params.state

    const tState = reactive({
        title: '',
        detail: '',
        assignedTo: '',
        assignedToEmail: '',
        projectID: '',
        tasks: ''
    })

    const getTasks = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };

        try {
            fetch("https://men-restful-api.onrender.com/api/tasks/" + projectId.value + "/" + state, requestOptions)
                .then(res => res.json())
                .then(data => {
                    tState.tasks = data
                })
                .catch(error => {
                    alert("An error occurred while fetching tasks.");
                    console.error("An error occurred:", error);
                });
        }
        catch (error) {
            console.log(error)
        }
    };

    const getUserTasks = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };

        try {
            fetch("https://men-restful-api.onrender.com/api/tasks/" + projectId.value + "/user/" + localStorage.getItem("userID"), requestOptions)
                .then(res => res.json())
                .then(data => {
                    tState.tasks = data
                })
                .catch(error => {
                    alert("An error occurred while fetching user tasks.");
                    console.error("An error occurred:", error);
                });
        }
        catch (error) {
            console.log(error)
        }
    };

    const newTask = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({
                title: tState.title,
                detail: tState.detail,
                assignedTo: tState.assignedToEmail,
                projectID: projectId.value
            })
        };

        fetch("https://men-restful-api.onrender.com/api/tasks/new", requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                } else {
                    router.push('/project/' + projectId.value);
                }
            })
            .catch(error => {
                alert("An error occurred while creating a new task.");
                console.error("An error occurred:", error);
            });
    };


    const getSpecificTask = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };

        try {
            fetch("https://men-restful-api.onrender.com/api/tasks/get/" + projectId.value + "/" + taskId.value, requestOptions)
                .then(res => res.json())
                .then(data => {
                    tState.tasks = data;
                })
                .catch(error => {
                    alert("An error occurred while fetching the task.");
                    console.error("An error occurred:", error);
                });
        }
        catch (error) {
            console.log(error)
        }
    };

    const editTaskState = (taskId, state) => {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };

        fetch("https://men-restful-api.onrender.com/api/tasks/updateState/" + projectId.value + "/" + taskId + "/" + state, requestOptions)
            .then(router.push('/project/' + projectId.value))
            .catch(error => {
                alert("An error occurred while updating the task state.");
                console.error("An error occurred:", error);
            });
    };

    const editTask = () => {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({
                title: tState.title,
                detail: tState.detail,
                assignedTo: tState.assignedTo
            })
        };

        fetch("https://men-restful-api.onrender.com/api/tasks/update/" + taskId.value, requestOptions)
            .then(router.push('/project/' + projectId.value))
            .catch(error => {
                alert("An error occurred while updating the task.");
                console.error("An error occurred:", error);
            });
    };

    const deleteTask = () => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };

        fetch("https://men-restful-api.onrender.com/api/tasks/delete/" + taskId.value, requestOptions)
            .then(router.push('/project/' + projectId.value))
            .catch(error => {
                alert("An error occurred while deleting the task.");
                console.error("An error occurred:", error);
            });
    };

    return { tState, getTasks, getUserTasks, newTask, getSpecificTask, editTaskState, editTask, deleteTask }
}

export default getTask