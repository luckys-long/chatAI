<template>
  <div class="wrap_layout">
    <el-container >
      <el-header> <Toolbar></Toolbar></el-header>
      <el-container>
        <el-aside width="200px">
          <div class="layout-sider">
            <div class="sider-wrap">
              <el-button type="primary" :icon="Plus">开始新会话</el-button>
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
    <DarkLight />
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
import {Plus} from '@element-plus/icons-vue'
import Toolbar from "@/layout/components/header.vue";
import ChatList from "./components/chatList.vue";
import DarkLight from '@/components/darkLight.vue'

</script>

<style lang="scss">
.wrap_layout{
  width: 100vw;
  height: 100vh;
   .el-header{
    padding: 0 !important;
    height: 100%;
}
}

</style>
