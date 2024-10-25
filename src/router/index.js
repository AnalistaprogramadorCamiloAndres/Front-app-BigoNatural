import { createRouter, createWebHistory } from 'vue-router';
import LayoutMain from '../components/LayoutMain.vue';
import Login from '../components/Login.vue';
import NavBar from '../components/NavBar.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutMain,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/NavBar',
    name: 'NavBar',
    component: NavBar,
  }
];

const router = createRouter({
  history: createWebHistory(), // Eliminamos process.env.BASE_URL
  routes,
});

export default router;
