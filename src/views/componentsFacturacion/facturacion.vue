<script setup>
import { ref, reactive } from 'vue';
import SideBarMenu from '../../components/SideBarMenu.vue';
import axios from 'axios';
import dayjs from 'dayjs';

// Datos reactivos
const facturacion = reactive({
  ID_CLIENTE: '',
  ID_FACTURA: '',
  FACTURA_FECHA: '',
  TOTAL_DE_LA_FACTURA: '',
  METODO_DE_PAGO: '',
  ID_PRODUCTO: '',
});

const metodosDePago = [
  {
    value: '1',
    label: 'Efectivo'
  },
  {
    value: '2',
    label: 'Nequi'
  },
  {
    value: '3',
    label: 'Daviplata'
  }
]

const loading = ref(false);
const apiUrl = 'http://127.0.0.1:8000/api/api/facturacion';

// Funciones de manejo del formulario
const resetForm = () => {
  Object.keys(facturacion).forEach((key) => (facturacion[key] = ''));
};

const validateForm = () => {
  return Object.values(facturacion).every((value) => {
    if (typeof value === 'string') {
      return value.trim() !== '';
    }
    return value !== null && value !== undefined; // Valida valores no nulos para otros tipos
  });
};

const saveForm = async () => {
  if (!validateForm()) {
    alert('Todos los campos son obligatorios');
    return;
  }

  // Convertir la fecha al formato requerido por MySQL
  facturacion.FACTURA_FECHA = dayjs(facturacion.FACTURA_FECHA).format('YYYY-MM-DD');

  loading.value = true;
  try {
    const response = await axios.post(apiUrl, facturacion);
    alert('Factura registrada correctamente');
    resetForm();
  } catch (error) {
    console.error('Error al guardar:', error);
    alert('Ocurrió un error al guardar la factura');
  } finally {
    loading.value = false;
  }
};

const updateForm = async () => {
  if (!validateForm()) {
    alert('Todos los campos son obligatorios');
    return;
  }
  if (!facturacion.ID_FACTURA) {
    alert('Debe especificar el ID de la factura para actualizar');
    return;
  }

  // Convertir la fecha al formato requerido por MySQL
  facturacion.FACTURA_FECHA = dayjs(facturacion.FACTURA_FECHA).format('YYYY-MM-DD');

  loading.value = true;
  try {
    const response = await axios.put(`${apiUrl}/${facturacion.ID_FACTURA}`, facturacion);
    alert('Factura actualizada correctamente');
  } catch (error) {
    console.error('Error al actualizar:', error);
    alert('Ocurrió un error al actualizar la factura');
  } finally {
    loading.value = false;
  }
};

const deleteForm = async () => {
  if (!facturacion.ID_FACTURA) {
    alert('Debe seleccionar una factura para eliminar');
    return;
  }
  loading.value = true;
  try {
    const response = await axios.delete(`${apiUrl}/${facturacion.ID_FACTURA}`);
    alert('Factura eliminada correctamente');
    resetForm();
  } catch (error) {
    console.error('Error al eliminar:', error);
    alert('Ocurrió un error al eliminar la factura');
  } finally {
    loading.value = false;
  }
};
</script>


<template>
  <el-header>
    <NavBar />
  </el-header>

  <div class="layout">
    <div class="sidebar">
      <SideBarMenu />
    </div>

    <div class="content">
      <h1 class="form-title">MODULO FACTURA</h1>
      <el-card class="form-card" shadow="always">
        <el-form label-position="top" class="form">
          <!-- Fila 1 -->
          <div class="row">
            <div class="col-md-6">
              <el-form-item label="Fecha de la Factura">
                <el-date-picker
                  v-model="facturacion.FACTURA_FECHA"
                  type="date"
                  placeholder="Seleccione la fecha"
                  size="large"
                />
              </el-form-item>
            </div>
            <div class="col-md-6">
              <el-form-item label="ID Factura">
                <el-input
                  v-model="facturacion.ID_FACTURA"
                  placeholder="Ingrese el ID de la factura"
                  size="large"
                />
              </el-form-item>
            </div>
          </div>
          <!-- Fila 2 -->
          <div class="row">
            <div class="col-md-6">
              <el-form-item label="ID Cliente">
                <el-input
                  v-model="facturacion.ID_CLIENTE"
                  placeholder="Ingrese el ID del cliente"
                  size="large"
                />
              </el-form-item>
            </div>
            <div class="col-md-6">
              <el-form-item label="ID Producto">
                <el-input
                  v-model="facturacion.ID_PRODUCTO"
                  placeholder="Ingrese el ID del producto"
                  size="large"
                />
              </el-form-item>
            </div>
          </div>
          <!-- Fila 3 -->
          <div class="row">
            <div class="col-md-6">
              <el-form-item label="Método de Pago">
  <el-select
    v-model="facturacion.METODO_DE_PAGO"
    placeholder="Seleccione el método de pago"
    size="large"
  >
    <el-option
      v-for="opcion in metodosDePago"
      :key="opcion"
      :label="opcion.label"
      :value="opcion.value"
    />
  </el-select>
</el-form-item>

            </div>
            <div class="col-md-6">
              <el-form-item label="Total de la Factura">
                <el-input
                  v-model="facturacion.TOTAL_DE_LA_FACTURA"
                  placeholder="Ingrese el total"
                  size="large"
                />
              </el-form-item>
            </div>
          </div>
        </el-form>
        <div class="actions">
          <el-button type="primary" :loading="loading" @click="saveForm" size="large">Guardar</el-button>
          <el-button type="warning" :loading="loading" @click="updateForm" size="large">Actualizar</el-button>
          <el-button type="danger" :loading="loading" @click="deleteForm" size="large">Eliminar</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.content {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f3f5;
  gap: 20px;
}

.form-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}

.form-card {
  width: 80%;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form {
  margin: 0;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 10px;
}

.col-md-12 {
  flex: 0 0 100%;
  max-width: 100%;
  padding: 10px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.actions > .el-button {
  min-width: 150px;
}
</style>
