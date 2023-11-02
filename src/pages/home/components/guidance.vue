<template>
  <el-dialog v-model="visible" :show-close="false" width="50%">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">AI Chat机器人使用指导</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          关闭
        </el-button>
      </div>
    </template>
    <div style="display: flex;justify-content: space-between;width: 100%;">
      <div class="info-box" style="width: 48%;">
        <i class="iconfont icon-yunliao"></i>
        <p>使用示例</p>
        <ul>
          <li>查询民法典第200条</li>
          <li>(输入案例分析)写一封律师函</li>
          <li>中英文翻译</li>
       
        </ul>
      </div>
      <div class="info-box" style="width: 48%;">
        <i class="iconfont icon-yunliao"></i>
        <p>能力</p>
        <ul>
          <li>直观感受第四次工业革命</li>
          <li>记住用户之前在对话中说过的话</li>
          <li>允许用户提供后续修正，接受或拒绝不适当请求的培训</li>
        </ul>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElButton, ElDialog, ElIcon } from "element-plus";
import { CircleCloseFilled } from "@element-plus/icons-vue";

const visible = ref(true);
</script>

<style scoped lang="scss">
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.info-box {
  text-align: center;
  display: flex;
  flex-direction: column;
  i {
    font-size: 24px;
    color: rgb(102, 102, 102);
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    color: #666;
  }
  li {
    color: unset;
    background: #f7f7f8;
    padding: 10px;
    border-radius: 5px;
    list-style: none;
    margin: 10px 0;
    background: #f7f7f8;
    transition: all 0.4s;
    color: #555;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
