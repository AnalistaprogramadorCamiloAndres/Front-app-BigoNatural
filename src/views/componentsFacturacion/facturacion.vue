<script setup>
import { ref, reactive, onMounted } from 'vue';
import SideBarMenu from '../../components/SideBarMenu.vue';
import axios from 'axios';
import dayjs from 'dayjs';

// Datos reactivos para el formulario
const facturacion = reactive({
  ID_CLIENTE: '',
  ID_FACTURA: '',
  FACTURA_FECHA: '',
  CANTIDAD: 1,
  TOTAL_DE_LA_FACTURA: 0,
  METODO_DE_PAGO: '',
  ID_PRODUCTO: '',
});

const metodosDePago = [
  { value: '1', label: 'Efectivo' },
  { value: '2', label: 'Nequi' },
  { value: '3', label: 'Daviplata' },
];

const clientes = ref([]);
const productos = ref([]);
const productoSeleccionado = ref(null);
const loading = ref(false);

// API URLs
const apiFacturacion = 'http://127.0.0.1:8000/api/api/facturacion';
const apiClientes = 'http://127.0.0.1:8000/api/api/cliente';
const apiProductos = 'http://127.0.0.1:8000/api/api/producto';

// Listado de facturas
const facturas = ref([]);

// Funciones para el formulario
const resetForm = () => {
  Object.keys(facturacion).forEach((key) => (facturacion[key] = key === 'CANTIDAD' ? 1 : ''));
  facturacion.TOTAL_DE_LA_FACTURA = 0;
};

const validateForm = () => {
  return Object.values(facturacion).every((value) => {
    if (typeof value === 'string') {
      return value.trim() !== '';
    }
    return value !== null && value !== undefined;
  });
};

const calcularTotal = () => {
  if (productoSeleccionado.value) {
    const precio = parseFloat(productoSeleccionado.value.PRECIO || 0);
    const cantidad = parseInt(facturacion.CANTIDAD || 1);
    facturacion.TOTAL_DE_LA_FACTURA = precio * cantidad;
  }
};

const saveForm = async () => {
  if (!validateForm()) {
    alert('Todos los campos son obligatorios');
    return;
  }

  facturacion.FACTURA_FECHA = dayjs(facturacion.FACTURA_FECHA).format('YYYY-MM-DD');

  loading.value = true;
  try {
    await axios.post(apiFacturacion, facturacion);
    alert('Factura registrada correctamente');
    resetForm();
    fetchFacturas(); // Actualiza el listado después de guardar
  } catch (error) {
    console.error('Error al guardar:', error);
    alert('Ocurrió un error al guardar la factura');
  } finally {
    loading.value = false;
  }
};

// Cargar datos de clientes y productos
const fetchClientes = async () => {
  try {
    const response = await axios.get(apiClientes);
    if (response.data.status === '200') {
      clientes.value = response.data.data.map((cliente) => ({
        value: cliente.ID_CLIENTE,
        label: cliente.NOMBRE,
      }));
    }
  } catch (error) {
    console.error('Error al cargar clientes:', error);
  }
};

const fetchProductos = async () => {
  try {
    const response = await axios.get(apiProductos);
    if (response.data.status === '200') {
      productos.value = response.data.data.map((producto) => ({
        ...producto,
        value: producto.ID_PRODUCTO,
        label: producto.NOMBRE_PRODUCTO,
      }));
    }
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
};

const actualizarProductoSeleccionado = (idProducto) => {
  productoSeleccionado.value = productos.value.find((prod) => prod.ID_PRODUCTO === idProducto) || null;
  calcularTotal();
};

// Cargar listado de facturas
const fetchFacturas = async () => {
  loading.value = true;
  try {
    const response = await axios.get(apiFacturacion);
    if (response.data.status === '200') {
      facturas.value = response.data.data;
    }
  } catch (error) {
    console.error('Error al cargar las facturas:', error);
    alert('Ocurrió un error al cargar las facturas.');
  } finally {
    loading.value = false;
  }
};

// Inicializar datos al montar
onMounted(() => {
  fetchClientes();
  fetchProductos();
  fetchFacturas();
});
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
      <!-- Formulario -->
      <h1 class="form-title">MODULO FACTURA</h1>
      <el-card class="form-card" shadow="always">
        <el-form label-position="top" class="form">
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
          <div class="row">
            <div class="col-md-6">
              <el-form-item label="Cliente">
                <el-select
                  v-model="facturacion.ID_CLIENTE"
                  placeholder="Seleccione un cliente"
                  size="large"
                >
                  <el-option
                    v-for="cliente in clientes"
                    :key="cliente.value"
                    :label="cliente.label"
                    :value="cliente.value"
                  />
                </el-select>
              </el-form-item>
            </div>
            <div class="col-md-6">
              <el-form-item label="Producto">
                <el-select
                  v-model="facturacion.ID_PRODUCTO"
                  placeholder="Seleccione un producto"
                  size="large"
                  @change="actualizarProductoSeleccionado"
                >
                  <el-option
                    v-for="producto in productos"
                    :key="producto.value"
                    :label="producto.label"
                    :value="producto.value"
                  />
                </el-select>
              </el-form-item>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <el-form-item label="Cantidad">
                <el-input-number
                  v-model="facturacion.CANTIDAD"
                  :min="1"
                  @change="calcularTotal"
                  size="large"
                />
              </el-form-item>
            </div>
            <div class="col-md-6">
              <el-form-item label="Método de Pago">
                <el-select
                  v-model="facturacion.METODO_DE_PAGO"
                  placeholder="Seleccione el método de pago"
                  size="large"
                >
                  <el-option
                    v-for="opcion in metodosDePago"
                    :key="opcion.value"
                    :label="opcion.label"
                    :value="opcion.value"
                  />
                </el-select>
              </el-form-item>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <el-form-item label="Total de la Factura">
                <el-input
                  :value="facturacion.TOTAL_DE_LA_FACTURA.toFixed(2)"
                  size="large"
                  readonly
                />
              </el-form-item>
            </div>
          </div>
        </el-form>
        <div class="actions">
          <el-button type="primary" :loading="loading" @click="saveForm" size="large">Guardar</el-button>
        </div>
      </el-card>

      <!-- Listado de Facturas -->
      <h2 class="form-title">LISTADO DE FACTURAS</h2>
      <el-card class="form-card" shadow="always">
        <el-table :data="facturas" style="width: 100%" v-loading="loading">
          <el-table-column prop="ID_FACTURA" label="ID Factura" width="150" />
          <el-table-column prop="FACTURA_FECHA" label="Fecha" width="150" />
          <el-table-column prop="ID_CLIENTE" label="ID Cliente" width="150" />
          <el-table-column prop="TOTAL_DE_LA_FACTURA" label="Total" width="150" />
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh; /* Asegura que la altura mínima sea el 100% de la pantalla */
  overflow: hidden; /* Evita que el contenido se desborde horizontalmente */
}

.sidebar {
  width: 200px;
  background-color: #333;
  color: #fff;
  padding: 20px;
  overflow-y: auto; /* Permite desplazamiento si el contenido en la barra lateral excede su tamaño */
}

.content {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f3f5;
  gap: 20px;
  overflow-y: auto; /* Permite desplazamiento vertical */
  max-height: 100vh; /* Restringe la altura máxima al tamaño de la pantalla */
  box-sizing: border-box; /* Incluye el padding dentro del tamaño total del contenedor */
}

.form-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
}

.form-card, .table-card {
  width: 90%; /* Ajusta el ancho a un 90% para mayor consistencia */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: visible; /* Asegura que no se corten los campos dentro del formulario */
}

.table-card {
  margin-top: 20px;
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

.el-table {
  width: 100%;
}

/* Asegura el desplazamiento en pantallas pequeñas */
html, body {
  height: 100%; /* Asegura que el body ocupe toda la pantalla */
  margin: 0;
  padding: 0;
  overflow-y: auto; /* Permite el desplazamiento vertical de toda la página */
}
</style>
