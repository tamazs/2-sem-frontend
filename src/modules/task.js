import { reactive, computed } from "vue"
import { useRoute, useRouter } from 'vue-router'


const getTask = () => {
    const route = useRoute();
    const router = useRouter();

    const projectId = computed(() => route.params.id)
    const state = computed(() => route.params.state)

    const tState = reactive({
        title: '',
        details: '',
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
                details: tState.details,
                assignedTo: localStorage.getItem("userID"),
                projectID: projectId
            })
        };
       
        fetch("http://localhost:4000/api/tasks/new/" + projectId, requestOptions)
        .then(router.push('/tasks/' + projectId + "/ToDo"))
    };

    return { tState, getTasks, newTask }
}

export default getTask