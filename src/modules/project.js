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
            fetch("https://men-restful-api.onrender.com/api/projects/" + localStorage.getItem("userID"), requestOptions)
                .then(res => res.json())
                .then(data => {
                    pState.projects = data
                })
                .catch(error => {
                    alert("An error occurred while fetching user projects.");
                    console.error("An error occurred:", error);
                });
        }
        catch (error) {
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

        fetch("https://men-restful-api.onrender.com/api/projects/new", requestOptions)
            .then(router.push('/' + localStorage.getItem("userID")))
            .catch(error => {
                alert("An error occurred while creating a new project.");
                console.error("An error occurred:", error);
            });
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
            fetch("https://men-restful-api.onrender.com/api/projects/get/" + projectId.value, requestOptions)
                .then(res => res.json())
                .then(data => {
                    pState.projects = data

                    if (pState.projects.ownerID === localStorage.getItem("userID")) {
                        localStorage.setItem("userType", "Owner");
                    } else {
                        localStorage.setItem("userType", "User");
                      }
                })
                .catch(error => {
                    alert("An error occurred while fetching the project.");
                    console.error("An error occurred:", error);
                });
        }
        catch (error) {
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
            fetch("https://men-restful-api.onrender.com/api/projects/members/" + projectId.value, requestOptions)
                .then(res => res.json())
                .then(data => {
                    pState.members = data.members
                })
                .catch(error => {
                    alert("An error occurred while fetching project members.");
                    console.error("An error occurred:", error);
                });
        }
        catch (error) {
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
                "https://men-restful-api.onrender.com/api/projects/members/" + projectId.value + "/" + memberId,
                requestOptions
            )
                .then((res) => res.json())
                .then((data) => {
                    pState.members = data.member
                })
                .catch(error => {
                    alert("An error occurred while fetching member details.");
                    console.error("An error occurred:", error);
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

        fetch("https://men-restful-api.onrender.com/api/projects/update/" + projectId.value, requestOptions)
            .then(router.push('/project/' + projectId.value))
            .catch(error => {
                alert("An error occurred while updating the project.");
                console.error("An error occurred:", error);
            });
    };

    const addMemberProject = async () => {
        const memberEmail = pState.members;

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({
                memberEmail: memberEmail
            })
        };

        fetch("https://men-restful-api.onrender.com/api/projects/add-member/" + projectId.value, requestOptions)
            .then(response => {
                if (response.ok) {
                    router.push('/members/' + projectId.value);
                    getMembers();
                } else {
                    alert('Failed to add member to the project');
                }
            })
            .catch(error => {
                alert("An error occurred while adding a member to the project.");
                console.error("An error occurred:", error);
            });
    };

    const deleteProject = () => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        };

        fetch("https://men-restful-api.onrender.com/api/projects/delete/" + projectId.value, requestOptions)
            .then(router.push('/' + localStorage.getItem("userID")))
            .catch(error => {
                alert("An error occurred while deleting the project.");
                console.error("An error occurred:", error);
            });
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
                "https://men-restful-api.onrender.com/api/projects/delete-member/" + projectId.value + "/" + memberId,
                requestOptions
            )
                .then(router.push('/members/' + projectId.value))
                getMembers();
        } catch (error) {
            console.log(error);
            alert("An error occurred while deleting the member.");
            console.error("An error occurred:", error);
        }
    };

    return {
        pState,
        getUserProjects,
        newProject,
        getSpecificProject,
        editProject,
        addMemberProject,
        deleteProject,
        getMembers,
        getMemberDetails,
        deleteMember
    }
}

export default getProject;