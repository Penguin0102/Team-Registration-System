<script setup>
 import { RouterView } from "vue-router";
 import myFooter from "./pages/myfoot.vue";
</script>

<template>
  
  <el-container>
    <RouterView></RouterView>
  </el-container>
  <el-footer>
      <my-footer></my-footer>
  </el-footer>
</template>

<style>

</style>
