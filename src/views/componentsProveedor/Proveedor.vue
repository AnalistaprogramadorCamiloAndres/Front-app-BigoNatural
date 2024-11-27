<script setup>
import { ref } from 'vue';
import SideBarMenu from '../../components/SideBarMenu.vue';

const Proveedor = ref({
    ID_LOTE: '',
    CANTIDAD_PRODUCIDA: '',
    FECHA_DE_PRODUCCION: '',
    FECHA_DE_VENCIMIENTO: '',
    PROVEEDOR_DE_MATERIA_PRIMA: '',
    UBICACION_DE_ALMACENAMIENTO: '',
    ID_PRODUCTO_FK: '',
    ID_INSPECCION_DE_CALIDAD_FK: '',
    ID_ENVIO_FK: '',

});


</script>

<template>
    <SideBarMenu />
    <el-container>
        <h1>MODULO PROVEEDOR</h1>
    </el-container>

    <el-form>
        <el-form-item label="ID LOTE">
            <el-input v-model="Proveedor.ID_LOTE" placeholder="ID LOTE"></el-input>
        </el-form-item>
        <el-form-item label="CANTIDAD PRODUCIDA">
            <el-input v-model="Proveedor.CANTIDAD_PRODUCIDA" placeholder="CANTIDAD PRODUCIDA"></el-input>
        </el-form-item>
        <el-form-item label="FECHA DE PRODUCCION">
            <el-input v-model="Proveedor.FECHA_DE_PRODUCCION" placeholder="FECHA DE PRODUCCION"></el-input>
        </el-form-item>
        <el-form-item label="FECHA DE VENCIMIENTO">
            <el-input v-model="Proveedor.FECHA_DE_VENCIMIENTO" placeholder="FECHA DE VENCIMIENTO"></el-input>
        </el-form-item>
        <el-form-item label="PROVEEDOR DE MATERIA PRIMA">
            <el-input v-model="Proveedor.PROVEEDOR_DE_MATERIA_PRIMA" placeholder="PROVEEDOR DE MATERIA PRIMA"></el-input>
        </el-form-item>
        <el-form-item label="UBICACION DE ALMACENAMIENTO">
            <el-input v-model="Proveedor.UBICACION_DE_ALMACENAMIENTO" placeholder="UBICACION DE ALMACENAMIENTO"></el-input>
        </el-form-item>
        <el-form-item label="ID PRODUCTO">
            <el-input v-model="Proveedor.ID_PRODUCTO_FK" placeholder="ID PRODUCTO"></el-input>
        </el-form-item>
        <el-form-item label="ID INSPECCION DE CALIDAD">
            <el-input v-model="Proveedor.ID_INSPECCION_DE_CALIDAD_FK" placeholder="ID INSPECCION DE CALIDAD"></el-input>
        </el-form-item>
        <el-form-item label="ID ENVIO">
            <el-input v-model="Proveedor.ID_ENVIO_FK" placeholder="ID ENVIO"></el-input>
        </el-form-item>

    </el-form>

    <el-button>
        <el-button type="primary" @click="submitForm">Guardar</el-button>
        <el-button type="primary" @click="updateForm">Actualizar</el-button>
        <el-button @click="resetForm">Eliminar</el-button>
    </el-button>
    
</template>

<style scoped>
.el-container {
    padding: 20px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    gap: 20px;

}

.el-form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 600px;
    max-width: 1200px;
}
</style>