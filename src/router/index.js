import { createRouter, createWebHistory } from 'vue-router';
import LayoutMain from '../components/LayoutMain.vue';
import Login from '../components/Login.vue';
import cliente from '../views/componentsCliente/cliente.vue';
import empleados from '../views/componentsEmpleados/empleados.vue';
import facturacion from '../views/componentsFacturacion/facturacion.vue';;
import producto from '../views/componentsProducto/producto.vue';
import Proveedor from '../views/componentsProveedor/proveedor.vue';

const routes = [
  
  {
    path:'/',
    name:'home',
    component:LayoutMain,
  },
  {
    path: '/proveedor',
    name: 'Proveedor',
    component: Proveedor,
  },
 { 
  path:'/producto',
  name: 'Producto',
  component: producto,

 },
  {
    path: '/facturacion',
    name: 'Facturacion',
    component: facturacion,

  },
  {
    path: '/empleados',
    name: 'Empleados',
    component: empleados,    //children: [
  },
  {
    path: '/Cliente',
    name: 'Cliente',
    component: cliente,
  },
 
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
 
];



const router = createRouter({
  history: createWebHistory(), // Eliminamos process.env.BASE_URL
  routes,
});

export default router;
