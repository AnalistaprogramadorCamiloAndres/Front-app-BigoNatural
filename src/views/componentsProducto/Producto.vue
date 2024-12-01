<script setup>
import { ref } from 'vue';
import SideBarMenu from '../../components/SideBarMenu.vue';
import axios from 'axios';

const Producto = ref({
    NOMBRE_PRODUCTO: '',
    DESCRIPCION: '',
    PRECIO: '',
    STOCK_DISPONIBLE: '',
});

const saveForm = async () => {

    const url = 'http://127.0.0.1:8000/api/api/producto';

    try {
        if (
            !Producto.value.NOMBRE_PRODUCTO ||
            !Producto.value.DESCRIPCION ||
            !Producto.value.PRECIO ||
            !Producto.value.STOCK_DISPONIBLE
        ) 
        {
            alert('Todos los campos son obligatorios');
            return;
        }
        console.log('cliente.value', Producto.value);
        axios.post(url, Producto.value)
            .then((response) => {
                console.log('Respuesta:',response);
                alert('Producto guardado correctamente');
            
                Producto.value = {
                    NOMBRE_PRODUCTO: '',
                    DESCRIPCION: '',
                    PRECIO: '',
                    STOCK_DISPONIBLE: '',
                };
            })
                .catch((error) => {
                    console.error(error);
                    alert('Error al guardar el producto');
                });
                } catch (error) {
                console.error(error);
                alert('Error al guardar el producto');
            }
        };


const updateForm = async () => {

    const url = 'http://127.0.0.1:8000/api/api/producto';

    try {
        if (

            !Producto.value.NOMBRE_PRODUCTO ||
            !Producto.value.DESCRIPCION ||
            !Producto.value.PRECIO ||
            !Producto.value.STOCK_DISPONIBLE
        ) 
        {
            alert('Todos los campos son obligatorios');
            return;
        }
      console.log('Producto.value', Producto.value);
        axios.put(url, Producto.value)
            .then((response) => {
                console.log('Respuesta:', response);
                alert('Producto actualizado correctamente');
          
                Producto.value = {

                    NOMBRE_PRODUCTO: '',
                    DESCRIPCION: '',
                    PRECIO: '',
                    STOCK_DISPONIBLE: '',
                };
            })
                .catch((error) => {
                    console.error(error);
                    alert('Error al actualizar el producto');
                });
            } catch (error) {
                console.error(error);
                alert('Error al seleccionar un producto');
            }
        };

const deletForm = () => {

    const url = 'http://127.0.0.1:8000/api/api/producto';
    try {
        if (

            !Producto.value.NOMBRE_PRODUCTO ||
            !Producto.value.DESCRIPCION ||
            !Producto.value.PRECIO ||
            !Producto.value.STOCK_DISPONIBLE

        ) 
        {
            alert('Todos los campos son obligatorios');
            return;
        }
        console.log('Producto.value', Producto.value);
        axios.delete(url, Producto.value)
            .then((response) => {
                console.log('respuesta:',response);
                alert('Producto eliminado correctamente');
            
                Producto.value = {

                    NOMBRE_PRODUCTO: '',
                    DESCRIPCION: '',
                    PRECIO: '',
                    STOCK_DISPONIBLE: '',
                };
            })
                .catch((error) => {
                    console.error(error);
                    alert('Error al eliminar el producto');
                });
            } catch (error) {
                console.error(error);
                alert('Error al seleccionar un producto');
            }
        };


</script>

<template>
    <SideBarMenu />
    <el-container>
        <h1>MODULO PRODUCTO</h1>
    </el-container>
    <!-- rest of the code remains the same -->
    <el-form>


        <el-form-item label="NOMBRE PRODUCTO">
            <el-input type="text" id="NOMBRE_PRODUCTO" v-model="Producto.NOMBRE_PRODUCTO"
                placeholder="Ingrese el nombre del producto"></el-input>
        </el-form-item>

        <el-form-item label="DESCRIPCION">
            <el-input type="text" id="DESCRIPCION" v-model="Producto.DESCRIPCION"
                placeholder="Ingrese la descripción del producto"></el-input>
        </el-form-item>

        <el-form-item :label="'PRECIO'">
            <el-input type="number" id="PRECIO" v-model="Producto.PRECIO"
                placeholder="Ingrese el precio del producto"></el-input>
        </el-form-item>

        <el-form-item label="STOCK DISPONIBLE">
            <el-input type="text" id="STOCK_DISPONIBLE" v-model="Producto.STOCK_DISPONIBLE"
                placeholder="Ingrese el stock disponible del producto"></el-input>
        </el-form-item>

    </el-form>
    <el-button>
        <el-button type="primary" @click="saveForm">Guardar</el-button>
        <el-button type="primary" @click="updateForm">Actualizar</el-button>
        <el-button @click="deletForm">Cancelar</el-button>
    </el-button>
</template>

<style scoped>
.el-form {
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
}

.el-container {
    padding: 20px;
    text-align: center;
    text-size-adjust: ceiling;
    background-color: #f5f5f5;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>