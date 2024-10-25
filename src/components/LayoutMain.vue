<script setup>
import Login from './Login.vue';
import NavBar from './NavBar.vue';
</script>

<template>
    <div>

        <div class="common-layout">
            <el-container>
                <el-header>Header</el-header>
            </el-container>
            <el-container class="NavBar">
                <NavBar />
            </el-container>

            <el-container>

                <Login />

            </el-container>

        </div>



    </div>
</template>

<style lang="css">
.el-header {
    background-color: #409eff;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}
.NavBar {
    background-color: #333;
    color: #fff;
    padding: 10px;

}
</style>
