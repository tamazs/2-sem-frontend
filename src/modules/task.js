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
            fetch("http://localhost:4000/api/tasks/" + projectId.value + "/" + state, requestOptions)
            .then(res => res.json())
            .then(data => {
                tState.tasks = data
            })
        }
        catch(error) {
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
    
        console.log(tState.assignedToEmail)
        console.log(projectId.value)
        fetch("http://localhost:4000/api/tasks/new", requestOptions)
            .then(router.push('/project/' + projectId.value))
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
            fetch("http://localhost:4000/api/tasks/get/" + projectId.value + "/" + taskId.value, requestOptions)
            .then(res => res.json())
            .then(data => {
                tState.tasks = data;
            })
        }
        catch(error) {
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
       
        fetch("http://localhost:4000/api/tasks/updateState/" + projectId.value + "/" + taskId + "/" + state, requestOptions)
        .then(router.push('/project/' + projectId.value))
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
       
        fetch("http://localhost:4000/api/tasks/update/" + taskId.value, requestOptions)
        .then(router.push('/project/' + projectId.value))
    };

    const deleteTask = () => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };
       
        fetch("http://localhost:4000/api/tasks/delete/" + taskId.value, requestOptions)
        .then(router.push('/project/' + projectId.value))
    };

    return { tState, getTasks, newTask, getSpecificTask, editTaskState, editTask, deleteTask }
}

export default getTask