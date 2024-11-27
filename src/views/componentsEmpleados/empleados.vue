<script setup>
import { onUpdated, ref } from 'vue';
import SideBarMenu from '../../components/SideBarMenu.vue';

const empleados = ref({

    NOMBRES: '',
    APELLIDOS: '',
    CARGO: '',
    TELEFONO: '',
    CORREO_ELECTRONICO: '',
    DIRECCION: '',
    CEDULA_DE_CIUDADANIA: '',
});

const updateForm = () => {


};

</script>

<template>
    <SideBarMenu/>
    <el-container>
        <LayoutMain>
            <div class="main-container">
                <h1>Modulo Empleados</h1>

            </div>
        </LayoutMain>
    </el-container>


    <el-form :model="empleados" label-width="120px">
        <el-form-item label="Nombre(s)">
            <el-input v-model="empleados.NOMBRES"></el-input>
        </el-form-item>
        <el-form-item label="Apellido(s)">
            <el-input v-model="empleados.APELLIDOS"></el-input>
        </el-form-item>
        <el-form-item label="Cargo">
            <el-input v-model="empleados.CARGO"></el-input>
        </el-form-item>
        <el-form-item label="Teléfono">
            <el-input v-model="empleados.TELEFONO"></el-input>
        </el-form-item>
    </el-form>


    <el-button>

        <el-button type="primary" @click="updateForm">Actualizar</el-button>
        <el-button type="primary" @click="saveForm">Guardar</el-button>
        <el-button type="default" @click="deletForm">Eliminar</el-button>


    </el-button>
</template>

<style scoped>
.el-container {
    padding: 20px;
    background-color: #F2F3F5;
    border-radius: 4px;
    margin-bottom: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
    overflow: hidden;
}

.el-form-item {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
}
</style>