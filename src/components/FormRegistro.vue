<template>
    <div class="py-3">
        <!-- Título de la página de registro -->
        <h2>Crear una nueva cuenta</h2>
    </div>
    <div class="row justify-content-center py-3">
        <!-- Formulario para el registro de usuario -->
        <form class="col-12 col-md-6" @submit.prevent="registroUser">
            <!-- Campo para el nombre del usuario -->
            <div class="form-floating mb-3">
                <input type="text" class="form-control mt-3" id="floatingName" placeholder="Ej: Nombre Apellido"
                    v-model="name" required>
                <label for="floatingName" class="mb-5">Nombre</label>
            </div>
            <!-- Campo para el correo electrónico del usuario -->
            <div class="form-floating mb-3">
                <input type="email" class="form-control mt-3" id="floatingEmail" placeholder="name@example.com"
                    v-model="email" required>
                <label for="floatingEmail" class="mb-5">Correo electrónico</label>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">@</span>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingUsername" placeholder="juanperez"
                        v-model="username" required>
                    <label for="floatingUsername">Nombre de usuario</label>
                </div>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password"
                    required>
                <label for="password">Contraseña</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="replyPassword" placeholder="Password Repeat"
                    v-model="replyPassword" required>
                <label for="replyPassword">Repita contraseña</label>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary text-white p-3" :disabled="loadingRegistro"><i
                        class="fa-solid fa-right-from-bracket"></i> Registrarse</button>
            </div>
        </form>
    </div>
</template>
<script>
// Importa funciones para autenticación de Firebase
import { auth, createUserWithEmailAndPassword } from '@/auth'

export default {
    name: 'FormRegistro',  // Nombre del componente
    data() {
        return {
            name: '', // Almacena el nombre del usuario
            email: '', // Almacena el nombre del usuario
            username: '',  // Almacena el nombre de usuario
            password: '',  // Almacena la contraseña del usuario
            replyPassword: '', // Almacena la repetición de la contraseña
            loadingRegister: false // Controla si el formulario está enviando datos
        }
    },
    methods: {
        async registroUser() {
            try {
                 // Verifica que todos los campos estén completos
                if (!this.nombre, !this.email, !this.username, !this.password, !this.replyPassword) {
                    return alert("Debes completar todos los campos.");
                }
 // Verifica que la contraseña y la repetición de la contraseña coincidan
                if (this.password != this.replyPassword) {
                    return alert("Las contraseñas deben coincidir. Intenta nuevamente.")
                }
 // Indica que el registro está en progreso
                this.loadingRegistro = true;
                const userCredentials = await createUserWithEmailAndPassword(auth, this.email, this.password);
                // Muestra las credenciales del usuario en la consola
                console.log(userCredentials);
                alert("Usuario registrado exitosamente.");  // Muestra un mensaje de éxito
                this.$router.push("/user");   // Redirige al usuario a la página de perfil
                this.loadingRegistro = false; // Indica que el registro ha terminado
                this.$router.push("/home"); // Redirige al usuario a la página de inicio (puedes ajustar esto si es necesario)
            } catch (error) {
                 // Muestra un mensaje de error si el registro falla
                console.log(error);
                alert("Ha fallado el registro. Intenta nuevamente.");
            }
        }
    }
}
</script>