<template>
  <div class="footer-wrap">
    <div style="display: flex">
      <el-button round @click="onSpeak">
        <i class="iconfont icon-Microphone"> </i
      ></el-button>
      <el-button round @click="onStop" style="color: red; margin-right: 10px">
        <i class="iconfont icon-guaduan"></i
      ></el-button>
    </div>

    <img v-if="isShow" :src="loadingImage" class="voice-img" />
    <el-input v-model="text" placeholder="请输入您的问题" type="text" clearable />
    <!-- <el-button @mousedown.native="gmousedown" @mouseup="gmouseup">按住说话</el-button> -->
    <el-button
      ref="submitEle"
      round
      @click="onSend"
      :icon="Promotion"
      style="margin-left: 20px"
    ></el-button>
  </div>
</template>

<script setup>
import { ElButton, ElInput } from "element-plus";
import XFRecorder from "@/plugins/xfRecorder";
import { Plus, Promotion } from "@element-plus/icons-vue";
import { useEventListener } from "@vueuse/core";
import { useMessage } from "@/hooks/useMessage";

const loadingImage = new URL("../../../assets/imgs/timg.png", import.meta.url)
  .href;
const { addMessage } = useMessage();

let iatRecorder;

const text = ref();
const isShow = ref(false);
const submitEle = ref();

const onSpeak = () => {
  iatRecorder.start();
  isShow.value = true;
};

const onStop = () => {
  iatRecorder.stop();
  isShow.value = false;

  nextTick(() => {
    text.value = iatRecorder.resultText;
    console.log("text====>", text.value);
  });
};

const onSend = async () => {
  addMessage(text.value);
  text.value = "";
};

onMounted(() => {
  iatRecorder = new XFRecorder("zh_cn");
});

useEventListener(submitEle, "keydown", (e) => {
  onSend();
});
</script>

<style scoped lang="scss">
.footer-wrap {
  display: flex;
  .voice-img {
    position: fixed;
    z-index: 999;
    left: 50vw;
    top: 38vh;
    width: 200px;
    height: 200px;
  }
}
</style>
