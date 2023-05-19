import { createRouter, createWebHistory } from 'vue-router'

  const routes = [
    {
      path: '/project/:id',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:id',
      name: 'projectlist',
      component: () => import('../views/ProjectList.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tasks/:id/:state',
      name: 'tasklist',
      component: () => import('../views/TaskList.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/task/:id/:taskId',
      name: 'task',
      component: () => import('../views/TaskView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/members/:id',
      name: 'members',
      component: () => import('../views/MemberList.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/member/:id/:memberId',
      name: 'member',
      component: () => import('../views/MemberView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/createproject',
      name: 'createproject',
      component: () => import('../views/CreateProject.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createtask/:id',
      name: 'createtask',
      component: () => import('../views/CreateTask.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addmember/:id',
      name: 'addmember',
      component: () => import('../views/AddMemberView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/accountsettings/:id',
      name: 'accountsettings',
      component: () => import('../views/AccountSettingsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edittask/:id/:taskId',
      name: 'edittask',
      component: () => import('../views/EditTaskView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings/:id',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes})

    router.beforeEach(async (to, from, next) => {
      const isAuthenticated = localStorage.getItem("auth-token")
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
      
      //const isAuthenticated =  true
      if ( !isAuthenticated && requiresAuth) {
        next('/login')
      }
      else {
        next()
      }
    })

export default router
