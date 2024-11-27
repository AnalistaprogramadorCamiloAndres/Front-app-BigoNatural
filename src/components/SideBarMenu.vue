<template>
  <el-menu default-active="$route.path"
  router
  class="el-menu-vertical-demo" background-color="#242629" text-color="#fff" collapse-transition>
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Administrador</span>
      </template>
      
      <el-menu-item index="/">Inicio</el-menu-item>
      <el-menu-item index="cliente">Cliente</el-menu-item>
      <el-menu-item index="empleados">Empleados</el-menu-item>
      <el-menu-item index="facturacion">Facturacion</el-menu-item>
      <el-menu-item index="producto">Producto</el-menu-item>
      <el-menu-item index="proveedor">Proveedor</el-menu-item>
   
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { Location } from '@element-plus/icons-vue';
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  background-color: #333333;


  /* height: 100%; */
}



.el-menu-vertical-demo {
  width: fit-content;
  background-color: #242629;
  color: #fff;
  border-radius: 0;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s;
  min-height: 100%;
}
</style>

