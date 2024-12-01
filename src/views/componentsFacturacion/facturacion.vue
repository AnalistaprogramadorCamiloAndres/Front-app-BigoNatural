<script setup>
import { ref } from 'vue';
import SideBarMenu from '../../components/SideBarMenu.vue';
import axios from 'axios';

const facturacion = ref({
  ID_CLIENTE: '',
  FACTURA_FECHA: '',
  TOTAL_DE_LA_FACTURA: '',
  METODO_DE_PAGO: '',
  ID_PRODUCTO: '',
  ID_CLIENTE: '',
});


const saveForm = () => {

  const url = 'http://127.0.0.1:8000/api/api/facturacion';

  try {

    if (
      !facturacion.value.ID_CLIENTE ||
      !facturacion.value.FACTURA_FECHA ||
      !facturacion.value.TOTAL_DE_LA_FACTURA ||
      !facturacion.value.METODO_DE_PAGO ||
      !facturacion.value.ID_PRODUCTO
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }
    console.log(facturacion.value, 'facturacion.value');
    axios.post(url, facturacion.value)
      .then((response) => {
        console.log('Respuesta:', response);
        alert('Factura registrada correctamente');

        facturacion.value = {
          ID_CLIENTE: '',
          FACTURA_FECHA: '',
          TOTAL_DE_LA_FACTURA: '',
          METODO_DE_PAGO: '',
          ID_PRODUCTO: '',
        };
      })
      .catch((error) => {
        console.error('Error al guardar:', error);
        alert('Ocurrió un error al guardar la factura');
      });
  } catch (error) {
    console.error('Error al ejecutar la función:', error);
    alert('Error inesperado al intentar guardar la factura');
  }
};

const updateForm = () => {

  const url = 'http://127.0.0.1:8000/api/api/facturacion';

  try {
    if (
      facturacion.value.ID_CLIENTE === '' ||
      facturacion.value.ID_FACTURA === '' ||
      facturacion.value.FACTURA_FECHA === '' ||
      facturacion.value.TOTAL_DE_LA_FACTURA === '' ||
      facturacion.value.METODO_DE_PAGO === '' ||
      facturacion.value.ID_PRODUCTO === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }
    console.log('Actualizado:', facturacion.value);
    alert('Factura actualizada correctamente');

    axioxs.put(url + facturacion.value.ID_FACTURA, facturacion.value)
      .then((response) => {
        console.log('Respuesta:', response);
      })

  }
  catch (error) {
    console.error('Error al actualizar:', error);
    alert('Ocurrió un error al actualizar la factura');

  }
};



const deletForm = () => {
  const url = 'http://127.0.0.1:8000/api/api/facturacion';
  try {
    if (facturacion.value.ID_CLIENTE === '' || facturacion.value.ID_FACTURA === '') {
      alert('Debe seleccionar una factura para eliminar');
      return;
    }
    console.log('Eliminado:', facturacion.value);
    alert('Factura eliminada correctamente');
    facturacion.value = {
      ID_CLIENTE: '',
      ID_FACTURA: '',
      FACTURA_FECHA: '',
      TOTAL_DE_LA_FACTURA: '',
      METODO_DE_PAGO: '',
      ID_PRODUCTO: '',
    };
    axioxs.delete(url + facturacion.value.ID_FACTURA)
      .then((response) => {
        console.log('Respuesta:', response);
      })
  } catch (error) {
    console.error('Error al eliminar:', error);
    alert('Ocurrió un error al eliminar la factura');
  }
};


</script>

<template>
  <el-header class="el-header">
    <NavBar />
  </el-header>

  <div class="sidebar">
    <SideBarMenu />
  </div>

  <div class="container">
    <h1>MODULO FACTURA</h1>
  </div>

  <el-form-item>

    <div class="form">

      <label for="ID_CLIENTE">ID Cliente:</label>
      <input type="text" id="ID_CLIENTE" v-model="facturacion.ID_CLIENTE">


      <label for="ID_FACTURA">ID Factura:</label>
      <input type="text" id="ID_FACTURA" v-model="facturacion.ID_FACTURA">

      <label for="FACTURA_FECHA">Fecha de la Factura:</label>
      <input type="date" id="FACTURA_FECHA" v-model="facturacion.FACTURA_FECHA">

      <label for="TOTAL_DE_LA_FACTURA">Total de la Factura:</label>
      <input type="text" id="TOTAL_DE_LA_FACTURA" v-model="facturacion.TOTAL_DE_LA_FACTURA">

      <label for="METODO_DE_PAGO">Metodo de Pago:</label>
      <input type="text" id="METODO_DE_PAGO" v-model="facturacion.METODO_DE_PAGO">

      <label for="ID_PRODUCTO">ID Producto:</label>
      <input type="text" id="ID_PRODUCTO" v-model="facturacion.ID_PRODUCTO">



    </div>
  </el-form-item>

  <el-button>
    <el-button type="primary" @click="saveForm">Guardar</el-button>
    <el-button type="primary" @click="updateForm">Actualizar</el-button>
    <el-button type="danger" @click="deletForm">Eliminar</el-button>
  </el-button>
</template>

<style scoped>
.el-form-item {
  margin-bottom: 200px;
  gap: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex-basis: 100%;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
}

.form {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-basis: 100%;
  flex-wrap: wrap;
  gap: 10px;

}

.container {
  padding: 20px;
  text-align: center;
  background-color: #F2F3F5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
}


.sidebar {
  display: inline-block;
  width: 200px;
  background-color: #333;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  overflow-y: auto;
  transition: all 0.3s ease;
}

.el-button {

  width: 100%;
  display: flex;
  justify-content: center;

  align-items: center;

  height: inherit;


}
</style>