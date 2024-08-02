<template>
    <!-- Contenedor principal de la página de inicio de sesión -->
    <div class="login py-3">
        <!-- Título de la página -->
        <h2>Iniciar sesión</h2>
        <div class="row justify-content-center py-3">
                <!-- Formulario de inicio de sesión -->
            <form class="col-12 col-md-6" @submit.prevent="login">
                    <!-- Campo para el correo electrónico -->
                <div class="form-floating mb-3">
                    <input type="email" class="form-control mt-3" id="floatingInput" placeholder="name@example.com"
                        v-model="email" required>
                    <label for="floatingInput" class="mb-5">Correo electrónico</label>
                </div>
                <!-- Campo para la contraseña -->
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                        v-model="password" required>
                    <label for="floatingPassword">Contraseña</label>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary text-white p-3"><i class="fa-solid fa-right-from-bracket"></i>Iniciar
                        sesión</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from '@/auth'; // Importa funciones de autenticación

export default {
    name: 'FormLogin',  // Nombre del componente
    data() {
        return {
            email: '', // Propiedad para almacenar el correo electrónico del usuario
            password: '' // Propiedad para almacenar el correo electrónico del usuario
        };
    },
    methods: {
        async login() {
            try {
                // Imprime en la consola los datos del usuario (solo para depuración)
                console.log(this.email, this.password);
                await signInWithEmailAndPassword(auth, this.email, this.password);
                  // Intenta iniciar sesión con los datos proporcionados
                alert('Usuario autenticado con éxito');
                this.$router.push('/user'); // Redirige al usuario a la ruta '/user'
            } catch (error) {
                // Si ocurre un error, muestra un mensaje de error
                console.log(error);
                alert('Datos incorrectos. Intenta nuevamente.');
            }
        }
    }
}
</script>
