<template>
  <div class="wrap_layout">
    <el-container>
      <el-header> <Toolbar></Toolbar></el-header>
      <el-container class="box">
        <el-aside class="left">
          <div class="layout-sider">
            <div class="sider-wrap">
              <el-button type="primary" :icon="Plus" class="start-btn"
                >开始新会话</el-button
              >
              <ChatList></ChatList>
              <div class="left-bottom">
                <p>清除全部会话</p>
                <p>个人中心</p>
                <p>退出</p>
              </div>
            </div>
          </div>
        </el-aside>
        <div class="resize" title="收缩侧边栏">⋮</div>
        <el-container class="right">
          <el-main> <div class="layout-main">
              <ChatMain></ChatMain>
          </div></el-main>
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
import { Plus,Promotion } from "@element-plus/icons-vue";
import Toolbar from "@/layout/components/header.vue";
import ChatList from "./components/chatList.vue";
import SessionArea from "./components/sessionArea.vue";

import ChatMain from "./components/main.vue";

function dragControllerDiv() {
  let resize = document.getElementsByClassName("resize");
  let boxDom = document.getElementsByClassName("box");
  let leftDom = document.getElementsByClassName("left");
  let rightDom = document.getElementsByClassName("right");
  let minWidth = 0;
  for (let i = 0; i < resize.length; i++) {
    /*鼠标 按下拖拽区 */
    resize[i].onmousedown = function (e) {
      // 拖拽区 变色
      resize[i].style.background = "#818181";
      // 拖拽区 开始的距离  403
      var startX = e.clientX;
      // 左边大小 放入 resize
      resize[i].left = resize[i].offsetLeft;
      /* 鼠标拖拽 */
      document.onmousemove = function (ee) {
        // 拖拽区 结束的距离
        var endX = ee.clientX;
        // 移动的距离 （endx-startx）=移动的距离。resize[i].left+移动的距离=左边区域最后的宽度
        let leftWidth = resize[i].left + (endX - startX);
        // 右边最大宽度
        let maxWidth = boxDom[i].clientWidth - resize[i].offsetWidth;
        /* 设置 左边 最小值 */
        if (leftWidth < minWidth) leftWidth = minWidth;
        if (leftWidth > maxWidth - minWidth) leftWidth = maxWidth - minWidth;
        // 设置拖拽条 距离左侧区域的宽度
        resize[i].style.left = leftWidth;
        // 设置 左边宽度
        leftDom[i].style.width = leftWidth + "px";
        // 设置右边宽度
        rightDom[i].style.width = boxDom[i].clientWidth - leftWidth - 10 + "px";
      };
      /* 鼠标松开 */
      document.onmouseup = function () {
        // 取消事件
        document.onmousemove = null;
        document.onmouseup = null;
        // 恢复颜色
        resize[i].style.background = "#d6d6d6";
      };
    };

    return false;
  }
}

onMounted(() => {
  dragControllerDiv();
});


</script>

<style lang="scss">
.wrap_layout {
  width: 100vw;
  height: 100vh;
  .box {
    width: 100vw;
    height: calc(100vh - 80px);
  }
  .el-header {
    padding: 0 !important;
    height: 100%;
  }
  .left {
    width: 280px;
    background: #34363c;
    border-right: 1px solid #494f5f;
  }
  .start-btn {
    margin: 10px;
  }
  .resize {
    cursor: col-resize;
    float: left;
    position: relative;
    top: 47%;
    background: rgb(214, 214, 214);
    border-radius: 5px;
    margin-top: -10px;
    width: 8px;
    height: 40px;
    background-size: cover;
    background-position: center;
    /*z-index: 99999;*/
    font-size: 25px;
    color: white;
  }
  .resize:hover {
    color: #444444;
  }
  .left-bottom {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding-left: 25px;
    color: #fff;
    line-height: 30px;
    overflow: hidden;
  }
}
</style>
