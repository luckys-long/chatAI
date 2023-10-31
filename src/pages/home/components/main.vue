<template>
  <div class="chat-wrap">
    <div v-for="(item, i) in messages">
      <div :class="item.role === 'user' ? 'row-right' : 'row-left'" :key="i">
        <div v-if="item.role !== 'user'">
          <img :src="aiImg" className="avatar-icon" alt="avatar" />
        </div>
        <div style="{{item.role === 'user'?'':'' }}">
          {{ item.content.trim() }}
        </div>
        <div v-if="item.role === 'user'">
          <img :src="profile" className="avatar-icon" alt="avatar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from "@/hooks/useMessage";
const { messages, isLoading, addMessage } = useMessage();
import aiImg from "@/assets/imgs/ai.png";
import profile from "@/assets/imgs/profile-image.png";
console.log("=====>", messages);

</script>

<style lang="scss" scoped>
.chat-wrap {
  color: beige;
  .avatar-icon {
    width: 45px;
    height: 45px;
    margin: 0 10px;
  }
  .row-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .row-left {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
