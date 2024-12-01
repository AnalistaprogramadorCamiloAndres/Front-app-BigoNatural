<script setup>
import { ref } from 'vue';
import SideBarMenu from '../../components/SideBarMenu.vue';
import axios from 'axios';
const cliente = ref({
  NOMBRE: '',
  CORREO_ELECTRONICO: '',
  DIRECCION: '',
  CEDULA_DE_CIUDADANIA: '',
});

const saveForm = async () => {
  const url = 'http://127.0.0.1:8000/api/api/cliente'; // Replace with your API endpoint


  try {

    if (
      !cliente.value.NOMBRE ||
      !cliente.value.CORREO_ELECTRONICO ||
      !cliente.value.DIRECCION ||
      !cliente.value.CEDULA_DE_CIUDADANIA
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }
    console.log(cliente.value, 'cliente.value');
    axios.post(url, cliente.value)
      .then((response) => {
        console.log('Respuesta:', response);
        alert('Registro guardado correctamente');

        cliente.value = {
          NOMBRE: '',
          CORREO_ELECTRONICO: '',
          DIRECCION: '',
          CEDULA_DE_CIUDADANIA: '',
        };
      })
      .catch((error) => {
        console.error('Error al guardar el registro:', error);
        alert('Ocurrió un error al guardar el registro.');
      });
  } catch (error) {
    console.error('Error al ejecutar la función:', error);
    alert('Error inesperado al intentar guardar el registro.');
  }
};


const updateForm = async () => {

  const url = `http://127.0.0.1:8000/api/api/clientes`;


  try {

    if (
      !cliente.value.NOMBRE ||
      !cliente.value.CORREO_ELECTRONICO ||
      !cliente.value.DIRECCION ||
      !cliente.value.CEDULA_DE_CIUDADANIA
    ) {
      alert('Todos los campos son obligatorios');

    }
    console.log(cliente.value, 'cliente.value');
    axios.put(url, cliente.value)
      .then((response) => {
        console.log('Respuesta:', response);
        alert('Registro actualizado correctamente');

        cliente.value = {
          NOMBRE: '',
          CORREO_ELECTRONICO: '',
          DIRECCION: '',
          CEDULA_DE_CIUDADANIA: '',
        };
      })
      .catch((error) => {
        console.error('Error al actualizar el registro:', error);
        alert('Ocurrió un error al actualizar el registro.');
      });
  } catch (error) {
    console.error('Error al ejecutar la función:', error);
    alert('Error inesperado al intentar guardar la factura');
  }
};


const deletForm = async () => {

  const url = `http://127.0.0.1:8000/api/api/clientes`; // Replace with your API endpoint

  try {

    if (
      !cliente.value.NOMBRE ||
      !cliente.value.CORREO_ELECTRONICO ||
      !cliente.value.DIRECCION ||
      !cliente.value.CEDULA_DE_CIUDADANIA
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }
    console.log(cliente.value, 'cliente.value');
    axios.delete(url, cliente.value)
      .then((response) => {
        console.log('Respuesta:', response);
        alert('Registro eliminado correctamente');

        cliente.value = {
          NOMBRE: '',
          CORREO_ELECTRONICO: '',
          DIRECCION: '',
          CEDULA_DE_CIUDADANIA: '',
        };
      })
      .catch((error) => {
        console.error('Error al eliminar el registro:', error);
        alert('Ocurrió un error al eliminar el registro.');
      });
  } catch (error) {
    console.error('Error al ejecutar la función:', error);
    alert('Error inesperado al intentar guardar la factura');
  }
};


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
    <el-button type="primary" @click="saveForm">Guardar</el-button>
    <el-button type="info" @click="deletForm">Eliminar</el-button>

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