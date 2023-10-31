<template>
  <div class="chat-list">
    <el-scrollbar height="calc(100vh - 34.8vh)">
      <div class="chat-item" v-for="item in 20">聊天{{ item }}</div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ElScrollbar } from "element-plus";
</script>

<style lang="scss" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
}
.chat-list {
  margin-top: 10px;
  padding: 10px;
  .chat-item {
    margin-top: 5px;
    width: 96%;
    padding: 5px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 200;
    letter-spacing: 1px;
    text-decoration: none;
    background: rgba($color: #f8f4f4, $alpha: 0.6);
  }
}
</style>
