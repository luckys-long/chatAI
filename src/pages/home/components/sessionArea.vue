<template>
  <div class="footer-wrap">
    <div style="display: flex;">
        <el-button round @click="onSpeak"> <i class="iconfont icon-Microphone"> </i></el-button>
        <el-button round @click="onStop"> <i class="iconfont icon-microphoneoff"></i></el-button>
    </div>

    <img v-if="isShow" :src="loadingImage"  class="voice-img">
    <el-input
      v-model="text"
      placeholder="请输入您的问题"
      type="text"
    />
    <!-- <el-button @mousedown.native="gmousedown" @mouseup="gmouseup">按住说话</el-button> -->
    <el-button ref="submitEle" round @click="onSend" :icon="Promotion" ></el-button>
  
  </div>
</template>

<script setup>
import { ElButton, ElInput } from "element-plus";
import XFRecorder from '@/plugins/xfRecorder'
import { Plus,Promotion } from "@element-plus/icons-vue";
import { useEventListener } from '@vueuse/core'
import { useMessage } from '@/hooks/useMessage'

const loadingImage = new URL('../../../assets/imgs/timg.png', import.meta.url).href;
const { addMessage } = useMessage()

let iatRecorder 

const text = ref();
const isShow=ref(false)
const submitEle = ref()

const onSpeak=()=>{
  iatRecorder.start()
  isShow.value=true
}



const onStop=()=>{
  iatRecorder.stop()
  isShow.value=false
  console.log("====>",iatRecorder);
  text.value=iatRecorder.resultText
}

const onSend= async()=>{
addMessage(text.value)
text.value=''
}


onMounted(()=>{
  iatRecorder = new XFRecorder('zh_cn')
})

useEventListener(submitEle, 'keydown', (e) => { onSend() })

</script>

<style scoped lang="scss">
.footer-wrap{
    display: flex;
    .voice-img{
      position: fixed;
      z-index: 999;
      left: 50vw;
      top: 38vh;
      width: 200px;
      height: 200px;
    }
}

</style>
