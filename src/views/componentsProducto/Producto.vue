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

</script>

<template>
    <SideBarMenu />
    <el-container>
        <h1>MODULO PRODUCTO</h1>
    </el-container>
    <!-- rest of the code remains the same -->
    <el-form>


        <el-form-item label="ID PRODUCTO">
            <el-input v-model="Producto.ID_PRODUCTO" placeholder="Ingrese el ID del producto"></el-input>
        </el-form-item>

        <el-form-item label="NOMBRE PRODUCTO">
            <el-input v-model="Producto.NOMBRE_PRODUCTO" placeholder="Ingrese el nombre del producto"></el-input>
        </el-form-item>

        <el-form-item label="DESCRIPCION">
            <el-input v-model="Producto.DESCRIPCION" placeholder="Ingrese la descripción del producto"></el-input>
        </el-form-item>

        <el-form-item :label="'Precio'">
            <el-input v-model="Producto.PRECIO" placeholder="Ingrese el precio del producto"></el-input>
        </el-form-item>

        <el-form-item label="STOCK DISPONIBLE">
            <el-input v-model="Producto.STOCK_DISPONIBLE" placeholder="Ingrese el stock disponible del producto"></el-input>
        </el-form-item>

    </el-form>
    <el-button>
        <el-button type="primary" @click="submitForm">Guardar</el-button>
        <el-button type="primary" @click="updateForm">Actualizar</el-button>
        <el-button @click="resetForm">Cancelar</el-button>
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