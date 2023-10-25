<template>
  <div class="wrap_layout">
    <el-container>
      <el-header> <Toolbar></Toolbar></el-header>
      <el-container style="width: 100vw; height: calc(100vh - 80px)">
        <el-aside width="280px" style="background: #34363c">
          <div class="layout-sider">
            <div class="sider-wrap">
              <el-button type="primary" :icon="Plus" class="start-btn"
                >开始新会话</el-button
              >
              <ChatList></ChatList>
              <div>
                 <p>清除全部会话</p>
                 <p>个人中心</p>
                 <p>退出</p>
              </div>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main> <div class="layout-main"></div></el-main>
          <el-footer><SessionArea></SessionArea></el-footer>
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
import { Plus } from "@element-plus/icons-vue";
import Toolbar from "@/layout/components/header.vue";
import ChatList from "./components/chatList.vue";
import DarkLight from "@/components/darkLight.vue";
import SessionArea from "./components/sessionArea.vue";

import { useElementSize } from '@vueuse/core'

</script>

<style lang="scss">
.wrap_layout {
  width: 100vw;
  height: 100vh;
  .el-header {
    padding: 0 !important;
    height: 100%;
  }
  .start-btn {
    margin: 10px;
  }
}
</style>
