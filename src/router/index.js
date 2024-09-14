import {createRouter, createWebHistory} from 'vue-router'
import  ejemplo from '../views/ejemplo.vue'

const routes = [
    {
        path: '/Cliente',
        name: 'Cliente',
        component: (Cliente) => import('@/views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;
