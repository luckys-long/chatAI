<template>
  <el-scrollbar >
    <p v-for="item in 20" :key="item" effect="light">
      {{ item }}
    </p>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ElScrollbar } from "element-plus";
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
