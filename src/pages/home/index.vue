<template>
  <div class="wrap_layout">
    <!-- 顶部操作栏 -->
    <el-container>
      <el-header> <Toolbar></Toolbar></el-header>
      <el-container>
        <el-aside width="200px">
          <div class="layout-sider">
            <div class="sider-wrap">
              <el-button type="primary" :icon="Search">开始新会话</el-button>
              <ChatList></ChatList>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main> <div class="layout-main"></div></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {
  ElButton,
  ElContainer,
  ElMain,
  ElAside,
  ElFooter,
  ElHeader,
} from "element-plus";
import Toolbar from "@/layout/components/header.vue";
import ChatList from "./components/chatList.vue";
</script>

<style lang="scss">
.wrap_layout{
   .el-header{
    padding: 0 !important;
}
}

</style>
