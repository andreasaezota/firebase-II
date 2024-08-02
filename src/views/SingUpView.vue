<template>
    <div class="singup container">
        <main class="py-3">
            <FormRegistro />
        </main>
    </div>
</template>
<script>
// Importa el componente FormRegistro
import FormRegistro from '@/components/FormRegistro.vue'

export default {
    name: 'SingUpView',  // Nombre del componente
    components: {
        FormRegistro // Registra el componente FormRegistro para usarlo en esta vista
    }
}
</script>