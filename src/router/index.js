import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/',
      name: 'projectlist',
      component: () => import('../views/ProjectList.vue')
    },
    {
      path: '/tasks',
      name: 'tasklist',
      component: () => import('../views/TaskList.vue')
    },
    {
      path: '/task',
      name: 'task',
      component: () => import('../views/TaskView.vue')
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('../views/MembersView.vue')
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
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    }
  ]
})

export default router
