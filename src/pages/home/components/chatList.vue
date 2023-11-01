<template>
  <div class="chat-list">
    <el-scrollbar height="calc(100vh - 44.8vh)">
      <div class="chat-item" v-for="item in 20">
        <span>聊天{{ item }}</span
        ><span>icon</span>
      </div>
    </el-scrollbar>
  </div>
  <el-divider />
</template>

<script setup lang="ts">
import { ElScrollbar,ElDivider } from "element-plus";
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
  color: #fff;
  .chat-item {
    padding: 12px 20px;
    border-radius: 5px;
    transition: all 0.4s;
    display: flex;
    justify-content: space-between;
    margin: 1px 0;
  }
  .chat-item:hover {
    background: rgba(140, 147, 157, 0.15);
    cursor: pointer;
  }
}
</style>
