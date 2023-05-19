import { reactive, computed } from "vue"
import { useRoute, useRouter } from 'vue-router'


const getProject = () => {
    const route = useRoute();
    const router = useRouter();

    const projectId = computed(() => route.params.id)

    const pState = reactive({
        title: '',
        members: '',
        projects: ''
    })

    const getUserProjects = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };

        try {
            fetch("http://localhost:4000/api/projects/" + localStorage.getItem("userID"), requestOptions)
            .then(res => res.json())
            .then(data => {
                pState.projects = data
            })
        }
        catch(error) {
            console.log(error)
        }
    };

    const newProject = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({ 
                title: pState.title,
                ownerID: localStorage.getItem("userID"),
                members: localStorage.getItem("userID")
            })
        };
       
        fetch("http://localhost:4000/api/projects/new", requestOptions)
        .then(router.push('/' + localStorage.getItem("userID")))
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

    const getMembers = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };

        try {
            fetch("http://localhost:4000/api/projects/members/" + projectId.value, requestOptions)
            .then(res => res.json())
            .then(data => {
                pState.members = data.members
            })
        }
        catch(error) {
            console.log(error)
        }
    };

    const getMemberDetails = async () => {
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token")
          }
        };
      
        try {
            const memberId = route.params.memberId;
          fetch(
            "http://localhost:4000/api/projects/members/" + projectId.value + "/" + memberId,
            requestOptions
          )
            .then((res) => res.json())
            .then((data) => {
              pState.members = data.member
            });
        } catch (error) {
          console.log(error);
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

    const addMemberProject = async () => {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({ 
                members: pState.members
            })
        };
        fetch("http://localhost:4000/api/projects/add-member/" + projectId.value, requestOptions)
        .then(router.push('/members/' + projectId.value))
        getMembers();
    };

    const deleteProject = () => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };
       
        fetch("http://localhost:4000/api/projects/delete/" + projectId.value, requestOptions)
        .then(router.push('/' + localStorage.getItem("userID")))
    };

    const deleteMember = async () => {
        const requestOptions = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
      
        try {
            const memberId = route.params.memberId;
          await fetch(
            "http://localhost:4000/api/projects/delete-member/" + projectId.value + "/" + memberId,
            requestOptions
          )
          .then(router.push('/members/' + projectId.value))
          getMembers();
        } catch (error) {
          console.log(error);
        }
      };

    return { pState, getUserProjects, newProject, getSpecificProject, editProject, addMemberProject, deleteProject, getMembers, getMemberDetails, deleteMember}
}

export default getProject