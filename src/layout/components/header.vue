<template>
  <div class="header" style="-webkit-app-region: drag">
    <div class="h-left">
      <p>云律，您身边的法律顾问</p>
      <p>Legal Advisor Robot</p>
    </div>
    <div class="h-right">
      <span>{{ nowTimes }}</span>
      <span>&nbsp;|</span>
      <span>&nbsp;{{ loginInfo?.user||'' }}</span>
      <el-icon @click="isShow = true"><Tools /></el-icon>
      <el-icon @click="onExit"><Fold /></el-icon>
    </div>
  </div>
  <!-- <setting-dialog
    :isShow="isShow"
    :before-close="() => (isShow = false)"
    :doAddHandle="() => (isShow = false)"
  ></setting-dialog> -->
</template>
<script setup lang="ts">
import { ElIcon,dayjs } from "element-plus";
import { Tools,Plus,Fold } from "@element-plus/icons-vue";
import { ipcRenderer } from 'electron'
import { useRouter, useRoute } from "vue-router";
import { useIntervalFn } from '@vueuse/core'
import { useGlobalStore } from '@/stores/global'

const router = useRouter();


const globalStore =useGlobalStore()
const loginInfo = computed(() => globalStore.loginInfo);


const zoomIn = () => {

};
const zoomOut = () => {
  console.log(1111);
};
const close = () => {
  // $electron.ipcRenderer.send("window-close");

};

const nowTimes=ref(dayjs().format("YYYY/MM/DD HH:mm:ss"));


useIntervalFn(()=>{
  nowTimes.value = dayjs().format("YYYY/MM/DD HH:mm:ss");
},1000)


const onExit=()=>{
  router.push("login");
}

const isShow = ref(false);
</script>

<style lang="scss" scoped>
.header {
  height: vh(110);
  background: #34363c;
  align-items: center;
  display: flex;
  justify-content: space-between;
  .h-left {
    color: #00a0ff;
    text-align: left;
    margin-left: 10px;
    :nth-child(1) {
      font-size: 21px;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
    }
    :nth-child(2) {
      font-size: 12px;
      font-family: Adobe Heiti Std;
      font-weight: normal;
      color: #00a0ff;
    }
  }
  .h-right {
    color: #fefefe;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 10px;
    :deep(.el-icon) {
      margin-left: 1vw;
      cursor: pointer;
      width: vw(44);
      height: vw(44);
    }
  }
}
</style>
