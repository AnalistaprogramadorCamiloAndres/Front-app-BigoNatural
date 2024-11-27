<script setup>
import { ref } from 'vue';
import SideBarMenu from '../../components/SideBarMenu.vue';

const facturacion = ref({
  ID_CLIENTE: '',
  ID_FACTURA: '',
  FACTURA_FECHA: '',
  TOTAL_DE_LA_FACTURA: '',
  METODO_DE_PAGO: '',
  ID_PRODUCTO: '',
  ID_CLIENTE: '',

});

</script>

<template>
  <SideBarMenu />
  <div class="container">
    <h1>MODULO FACTURA</h1>
  </div>

  <el-form-item>
    <label for="ID_CLIENTE">ID Cliente:</label>
    <input type="text" id="ID_CLIENTE" v-model="facturacion.ID_CLIENTE">

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

    <label for="ID_CLIENTE">ID Cliente:</label>
    <input type="text" id="ID_CLIENTE" v-model="facturacion.ID_CLIENTE">
    <!-- Add other input fields here -->

  </el-form-item>

  <el-button>
    <el-button type="primary" @click="submitForm">Guardar</el-button>
    <el-button type="primary" @click="updateForm">Actualizar</el-button>
    <el-button @click="resetForm">Cancelar</el-button>
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



.container {
  padding: 20px;
  text-align: center;
  background-color: #F2F3F5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
}
</style>