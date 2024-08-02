<template>
    <div class="login container">
        <main class="py-3">
            <FormLogin />
        </main>
        <div class="login py-3">
        <h2>Iniciar sesión</h2>
        <div class="row justify-content-center py-3">
            <form class="col-12 col-md-6" @submit.prevent="login">
                <div class="form-floating mb-3">
                    <input type="email" class="form-control mt-3" id="floatingInput" placeholder="name@example.com"
                        v-model="email" required>
                    <label for="floatingInput" class="mb-5">Correo electrónico</label>
                </div>
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
    </div>
</template>
<script>
// Importa el componente FormLogin
import FormLogin from '@/components/FormLogin.vue' 

export default {
    name: 'LoginView', // Nombre del componente
    components: {
        FormLogin  // Registra el componente FormLogin para usarlo en esta vista
    }
}
</script>