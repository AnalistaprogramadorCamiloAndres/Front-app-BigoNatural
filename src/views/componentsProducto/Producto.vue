<script setup>
import { ref } from 'vue';
import SideBarMenu from '../../components/SideBarMenu.vue';

const Producto = ref({
    ID_PRODUCTO: '',
    NOMBRE_PRODUCTO: '',
    DESCRIPCION: '',
    PRECIO: '',
    STOCK_DISPONIBLE: '',
});

const saveForm = () => {
    try {
        if (
            !Producto.value.ID_PRODUCTO ||
            !Producto.value.NOMBRE_PRODUCTO ||
            !Producto.value.DESCRIPCION ||
            !Producto.value.PRECIO ||
            !Producto.value.STOCK_DISPONIBLE
        ) {
            alert('Producto guardado correctamente');
            return;
        }
        console.log('Todos los campos son obligatorios');
        alert('Debe completar todos los campos');
        Producto.value = {
            ID_PRODUCTO: '',
            NOMBRE_PRODUCTO: '',
            DESCRIPCION: '',
            PRECIO: '',
            STOCK_DISPONIBLE: '',
        };

    } catch (error) {
        console.error(error);
        alert('Error al guardar el producto');
    }
};


const updateForm = () => {
    try {
        if (
            !Producto.value.ID_PRODUCTO ||
            !Producto.value.NOMBRE_PRODUCTO ||
            !Producto.value.DESCRIPCION ||
            !Producto.value.PRECIO ||
            !Producto.value.STOCK_DISPONIBLE
        ) {
            alert('Producto actualizado correctamente');
            return;
        }
        console.log('Todos los campos son obligatorios');
        alert('Debe completar todos los campos');
        Producto.value = {
            ID_PRODUCTO: '',
            NOMBRE_PRODUCTO: '',
            DESCRIPCION: '',
            PRECIO: '',
            STOCK_DISPONIBLE: '',
        };

    } catch (error) {
        console.error(error);
        alert('Error al actualizar el producto');
    }
};

const deletForm = () => {
    try {
        if (Producto.ID_PRODUCTO) {
            alert('Producto eliminado correctamente');
            return;
        }
        console.log('Debe seleccionar un producto');
        alert('Debe seleccionar un producto para eliminar');
        Producto.value = {
            ID_PRODUCTO: '',
            NOMBRE_PRODUCTO: '',
            DESCRIPCION: '',
            PRECIO: '',
            STOCK_DISPONIBLE: '',
        };

    } catch (error) {
        console.error(error);
        alert('Error al eliminar el producto');
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


        <el-form-item label="ID PRODUCTO">
            <el-input type="number" id="ID_PRODUCTO" v-model="Producto.ID_PRODUCTO" placeholder="Ingrese el ID del producto"></el-input>
        </el-form-item>

        <el-form-item label="NOMBRE PRODUCTO">
            <el-input type="text" id="NOMBRE_PRODUCTO" v-model="Producto.NOMBRE_PRODUCTO" placeholder="Ingrese el nombre del producto"></el-input>
        </el-form-item>

        <el-form-item label="DESCRIPCION">
            <el-input type="text" id="DESCRIPCION" v-model="Producto.DESCRIPCION" placeholder="Ingrese la descripción del producto"></el-input>
        </el-form-item>

        <el-form-item :label="'PRECIO'">
            <el-input type="number" id="PRECIO" v-model="Producto.PRECIO" placeholder="Ingrese el precio del producto"></el-input>
        </el-form-item>

        <el-form-item label="STOCK DISPONIBLE">
            <el-input type="text" id="STOCK_DISPONIBLE" v-model="Producto.STOCK_DISPONIBLE" placeholder="Ingrese el stock disponible del producto"></el-input>
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