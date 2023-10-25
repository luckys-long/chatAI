<template>
  <div class="footer-wrap">
    <div>
        <el-button round @click="onSpeak"> <i class="iconfont icon-renqun-01"> 开始录音</i></el-button>
        <el-button round @click="onStop"> <i class="iconfont icon-renqun-01">结束录音</i></el-button>
    </div>
    <el-input
      v-model="text"
      placeholder="Please input"
      type="text"
    />
    <el-button round> <i class="iconfont icon-renqun-01"></i></el-button>
  </div>
</template>

<script setup>
import { ElButton, ElInput } from "element-plus";
import XFRecorder from '@/plugins/xfRecorder'

let iatRecorder 

const text = ref();

const onSpeak=()=>{
  iatRecorder.start()
  console.log("resultText===>",iatRecorder.resultText);
}

const onStop=()=>{
  iatRecorder.stop()
}

onMounted(()=>{
  iatRecorder = new XFRecorder('zh_cn')
})

</script>

<style scoped lang="scss">
.footer-wrap{
    display: flex;
}

</style>
