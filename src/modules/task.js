import { reactive, computed } from "vue"
import { useRoute, useRouter } from 'vue-router'


const getTask = () => {
    const route = useRoute();
    const router = useRouter();

    const projectId = computed(() => route.params.id)
    const state = computed(() => route.params.state)

    const tState = reactive({
        title: '',
        assignedTo: '',
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
            fetch("http://localhost:4000/api/tasks/" + projectId + "/" + state, requestOptions)
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
                assignedTo: localStorage.getItem("userID"),
                projectID: projectId
            })
        };
       
        fetch("http://localhost:4000/api/tasks/new/" + projectId, requestOptions)
        .then(router.push('/tasks/' + projectId + "/ToDo"))
    };

    const getSpecificProject = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };

        try {
            fetch("http://localhost:4000/api/projects/get/" + projectId.value, requestOptions)
            .then(res => res.json())
            .then(data => {
                pState.projects = data
            })
        }
        catch(error) {
            console.log(error)
        }
    };

    const editProject = () => {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({ 
                title: pState.title
            })
        };
       
        fetch("http://localhost:4000/api/projects/update/" + projectId.value, requestOptions)
        .then(router.push('/project/' + projectId.value))
    };

    const deleteProject = () => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };
       
        fetch("http://localhost:4000/api/projects/delete/", projectId.value, requestOptions)
        .then(router.push('/' + localStorage.getItem("userID")))
    };

    return { tState, getTasks, newTask }
}

export default getTask