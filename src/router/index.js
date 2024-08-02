// Importamos funciones y componentes necesarios de Vue Router
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


// Definimos las rutas de nuestra aplicación
const routes = [
  {
    // Ruta principal, se activa cuando la URL es '/'
    path: '/', 
      // Nombre de la ruta, útil para referenciarla en el código
    name: 'home',
     // Componente que se renderiza en esta ruta
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
      // Cargamos el componente para esta ruta de forma dinámica
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/singup',
    name: 'singup',
    component: () => import('../views/SingUpView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue')
  }

]

// Creamos una instancia del enrutador con configuración
const router = createRouter({
    // Usamos el historial basado en hash para gestionar las URLs
  history: createWebHashHistory(),
  // Le pasamos las rutas que definimos
  routes
})
// Exportamos el enrutador para que pueda ser usado en otros lugares de la aplicación
export default router
