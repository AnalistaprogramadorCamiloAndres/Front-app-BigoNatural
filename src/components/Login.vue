<script setup>

</script>

<template>
    <div class="login-container">
    <h2>Iniciar Sesión</h2>
    
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Usuario</label>
        <input type="text" id="username" v-model="username" placeholder="Nombre de usuario o correo" />
      </div>

      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" placeholder="Contraseña" />
      </div>

      <button type="submit" class="login-button">Iniciar Sesión</button>
    </form>
  </div>
  <!-- Simplemente rendereamos el componente Login sin pasar contenido dentro -->

</template>

<style>

.login-container {
    width: 50px;
    margin: 0 auto;
    padding: 20px;
    min-height: 50dvh;
    height: 30px;

    
}
/* Estilos opcionales para este componente */
</style>
