<template>
  <nav>
        <!-- Enlace a la página-->
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>|
    <router-link to="/user">User</router-link>|
    <router-link to="/singup">SingUp</router-link>|
  <router-link to="/about">Login</router-link>
    
    
  </nav>
    <!-- Componente que muestra la vista correspondiente según la ruta actual -->
  <router-view/>
</template>

<script>
// Importa las funciones de autenticación necesarias desde el módulo de autenticación
import {createUserWithEmailAndPassword, auth} from '@/auth';

export default {
  data () {
    return {
      email: '', // Propiedad para almacenar el correo electrónico del usuario
      password: '' // Propiedad para almacenar la contraseña del usuario
    };
  },
  methods: {
        // Método para registrar un nuevo usuario
    async register () {
      try {
        // Intenta crear una nueva cuenta de usuario con el correo y la contraseña proporcionados
        const userCredential = await createUserWithEmailAndPassword ( auth, this.email, this.password);
        const user = userCredential.user; // Obtiene el usuario registrado
        console.console.log('Usuario registrado:', user); // Imprime los detalles del usuario en la consola
      } catch (error) {
        console.console.error('Error.massage'); // Imprime el mensaje de error en la consola si el registro falla
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
