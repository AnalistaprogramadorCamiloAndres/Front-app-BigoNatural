<script setup>
import SideBarMenu from '../../components/SideBarMenu.vue';
import { ref } from 'vue';

const cliente = ref({
  NOMBRE: '',
  CORREO_ELECTRONICO: '',
  DIRECCION: '',
  CEDULA_DE_CIUDADANIA: '',
});


</script>


<template>
  <SideBarMenu />
  <div class="container">
    <h1>Modulo Cliente</h1>
  </div>

  <div class="form-group">
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" v-model="cliente.NOMBRE" required>
  </div>

  <div class="form-group">
    <label for="correo">Correo Electrónico</label>
    <input type="email" id="correo" v-model="cliente.CORREO_ELECTRONICO" required>
  </div>

  <div class="form-group">
    <label for="direccion">Dirección</label>
    <input type="text" id="direccion" v-model="cliente.DIRECCION" required>
  </div>

  <div class="form-group">
    <label for="cedula">Cédula de Ciudadanía</label>
    <input type="text" id="cedula" v-model="cliente.CEDULA_DE_CIUDADANIA" required>
  </div>

  <el-button>
    <el-button type="primary" @click="updateForm">Actualizar</el-button>
    <el-button type="primary" @click="submitForm">Guardar</el-button>
    <el-button type="info" @click="resetForm">Eliminar</el-button>

  </el-button>
</template>

<style scoped>
.container {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f2f2f2;
  padding: 20px;

}
</style>