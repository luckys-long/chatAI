<template>
  <div class="card" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
    <div class="title">{{ info.meetingName }}</div>
    <div class="wrap">
      <div class="left">
        <img :src="meeting" alt="#" />
      </div>
      <div class="right">
        <p>主持人: {{ info.createNumber }}</p>
        <p>会议时间: {{ info.startTime }}</p>
        <p>会议号码: {{ info.meetingId }}</p>
      </div>
    </div>

    <div class="hover-btn" v-show="isShow">
      <ElButton
        type="primary"
        style="border-radius: 15px"
        @click="handleJoin(info)"
      >
        加入会议
      </ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from "element-plus";
import { useRouter } from "vue-router";
import meeting from "@/assets/imgs/meeting.png";

const router = useRouter();
type Props = {
  info?: any;
};
withDefaults(defineProps<Props>(), {
  info: {},
});

const $ICP = getCurrentInstance()?.appContext.config.globalProperties.$ICP;

const isShow = ref(false);

const handleMouseOver = () => {
  isShow.value = true;
};
const handleMouseLeave = () => {
  isShow.value = false;
};
const handleJoin = (info: {
video: any; meetingId: any 
}) => {
  console.log(info);
  const params = {
    confId: info.meetingId,
    fmt: "1080P",
    unifiedAccessCode: "66666610005",
    passcode: "",
    isVideo:`${info.video}`,
    callback: (data: any) => {
      console.log("加入会议", data);
    },
  };
  $ICP.dispatch.conf.joinConf(params);

  router.push(`room/${info.meetingId}`);
};
</script>

<style lang="scss" scoped>
.card {
  width: vw(378);
  height: vh(242);
  background: #34363c;
  border-radius: 10px;
  // opacity: 0.75;
  margin: vw(5);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .title {
    color: #00a0ff;
    border-bottom: 1.2px solid #00a0ff;
    height: vh(71);
    @include flexCenter;
  }
  .wrap {
    @include flexCenter;
    height: 70%;
    .left {
      img {
        width: vw(89);
        height: vh(95);
        margin-right: vw(29);
        display: block;
        opacity: 0.37;
      }
    }
    .right {
      font-weight: 400;
      color: #ffffff;
      font-size: 16px;
      line-height: vh(30);
      font-family: Source Han Sans CN;
      opacity: 0.75;
    }
  }
}

.hover-btn {
  position: absolute;
  left: 35%;
  top: 35%;
  z-index: 999;
}
.card:hover {
  background: #171c20;
  border: 2px solid #00ffff;
}
</style>
