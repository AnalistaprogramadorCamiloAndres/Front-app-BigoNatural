<script setup>

</script>

<template>
  <LayoutMain />
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
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  overflow: hidden;
  margin-top: 50px;
  /* Posición en el centro de la pantalla */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  /* Efecto de desvanecimiento y aparecimiento */
 

    
}
/* Estilos opcionales para este componente */
</style>
