import { createRouter, createWebHistory } from 'vue-router'

  const routes = [
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'projectlist',
      component: () => import('../views/ProjectList.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tasks',
      name: 'tasklist',
      component: () => import('../views/TaskList.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/task',
      name: 'task',
      component: () => import('../views/TaskView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('../views/MemberList.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/member',
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
      path: '/createtask',
      name: 'createtask',
      component: () => import('../views/CreateTask.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
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
