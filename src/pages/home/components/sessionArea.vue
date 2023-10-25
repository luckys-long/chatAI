<template>
  <div class="footer-wrap">
    <div>
        <el-button round @click="onSpeak"> <i class="iconfont icon-renqun-01"> 开始录音</i></el-button>
        <el-button round @click="onStop"> <i class="iconfont icon-renqun-01">结束录音</i></el-button>
    </div>

    <img v-if="isShow" :src="loadingImage" alt="#" srcset="#" class="voice-img">
    <el-input
      v-model="text"
      placeholder="Please input"
      type="text"
    />
    <!-- <el-button @mousedown.native="gmousedown" @mouseup="gmouseup">按住说话</el-button> -->
    <el-button round> <i class="iconfont icon-renqun-01"></i></el-button>
    <p style="color: aliceblue;">{{ speechText }}</p>
  </div>
</template>

<script setup>
import { ElButton, ElInput } from "element-plus";
import XFRecorder from '@/plugins/xfRecorder'

const loadingImage = new URL('@/assets/imgs/timg.png', import.meta.url).href;

let iatRecorder 

const text = ref();
const speechText=ref()
const isShow=ref(false)

const onSpeak=()=>{
  iatRecorder.start()
  isShow.value=true
}

const onStop=()=>{
  iatRecorder.stop()
  isShow.value=false
  speechText.value=iatRecorder.resultText
}

onMounted(()=>{
  iatRecorder = new XFRecorder('zh_cn')
})

</script>

<style scoped lang="scss">
.footer-wrap{
    display: flex;
    .voice-img{
      position: fixed;
      z-index: 999;
      left: 100px;
      top: 100px;
      width: 150px;
      height: 150px;
    }
}

</style>
