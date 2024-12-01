<script setup>
import { onUpdated, ref } from 'vue';
import SideBarMenu from '../../components/SideBarMenu.vue';
import axios from 'axios';

const empleados = ref({

    NOMBRES: '',
    APELLIDOS: '',
    CARGO: '',
    TELEFONO: '',
    CORREO_ELECTRONICO: '',
    DIRECCION: '',
    CEDULA_DE_CIUDADANIA: '',
});

const updateForm = async () => {

    const url = 'http://127.0.0.1:8000/api/api/empleado';

    try {
        if (
            !empleados.value.NOMBRES ||
            !empleados.value.APELLIDOS ||
            !empleados.value.CARGO ||
            !empleados.value.TELEFONO ||
            !empleados.value.CORREO_ELECTRONICO ||
            !empleados.value.DIRECCION ||
            !empleados.value.CEDULA_DE_CIUDADANIA
        ) {
            alert('Todos los campos son obligatorios');
            return;
        }
        {
            console.log(empleados.value, 'empleados.value');
            alert('Registro guardado correctamente');
        }
        axios.put(url, empleados.value)
            .then((response) => {
                console.log('Respuesta:', response);
                alert('Registro actualizado correctamente');
            })
            empleados.value = {
                NOMBRES: '',
                APELLIDOS: '',
                CARGO: '',
                TELEFONO: '',
                CORREO_ELECTRONICO: '',
                DIRECCION: '',
                CEDULA_DE_CIUDADANIA: '',
            }
            .catch((error) => {
                console.error('Error al actualizar el registro:', error);
                alert('Ocurrió un error al actualizar el registro.');
            });
            
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        alert('Ocurrió un error al obtener los datos.');
    }
};

const saveForm = async () => {

    const url = 'http://127.0.0.1:8000/api/api/empleado';
    try {
        if (
            !empleados.value.NOMBRES ||
            !empleados.value.APELLIDOS ||
            !empleados.value.CARGO ||
            !empleados.value.TELEFONO ||
            !empleados.value.CORREO_ELECTRONICO ||
            !empleados.value.DIRECCION ||
            !empleados.value.CEDULA_DE_CIUDADANIA
        ) 
        {
            alert('Todos los campos son obligatorios');
            return;
        }
    
        axios.post(url, empleados.value)
            .then((response) => {
                console.log('Respuesta:', response);
                alert('Registro guardado correctamente');
            })

        empleados.value = {
            NOMBRES: '',
            APELLIDOS: '',
            CARGO: '',
            TELEFONO: '',
            CORREO_ELECTRONICO: '',
            DIRECCION: '',
            CEDULA_DE_CIUDADANIA: '',
        }

            .catch((error) => {
                console.error('Error al guardar el registro:', error);
                alert('Ocurrió un error al guardar el registro.');
            })
            
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        alert('Ocurrió un error al obtener los datos.');
    }
};

const deletForm = async () => {
    const url = 'http://127.0.0.1:8000/api/api/empleado'

    try {
        if (

            !empleados.value.NOMBRES ||
            !empleados.value.APELLIDOS ||
            !empleados.value.CARGO ||
            !empleados.value.TELEFONO ||
            !empleados.value.CORREO_ELECTRONICO ||
            !empleados.value.DIRECCION ||
            !empleados.value.CEDULA_DE_CIUDADANIA
        ) {
            alert('Debe seleccionar un empleado para eliminar');
            return;
        }
        {
            console.log('Eliminado:', empleados.value);
            alert('Registro eliminado correctamente');
        }

        axioxs.delete(url + empleados.value)
            .then((response) => {
                console.log('Respuesta:', response);
            })
        empleados.value = {
            NOMBRES: '',
            APELLIDOS: '',
            CARGO: '',
            TELEFONO: '',
            CORREO_ELECTRONICO: '',
            DIRECCION: '',
            CEDULA_DE_CIUDADANIA: '',
        }
            .catch((error) => {
                console.error('Error al eliminar el registro:', error);
                alert('Ocurrió un error al eliminar el registro');
            });

    } catch (error) {
        console.error('Error al ejecutar la función:', error);
        alert('Error inesperado al intentar eliminar el empleado');
    }
};



</script>

<template>
    <SideBarMenu />
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
        <el-form-item label="Correo electrónico">
            <el-input v-model="empleados.CORREO_ELECTRONICO"></el-input>
        </el-form-item>
        <el-form-item label="Dirección">
            <el-input v-model="empleados.DIRECCION"></el-input>
        </el-form-item>
        <el-form-item label="Cédula de ciudadanía">
            <el-input v-model="empleados.CEDULA_DE_CIUDADANIA"></el-input>
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