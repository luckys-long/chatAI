<template>
  <div class="chat-wrap">
    <div v-for="(item, i) in messages">
      <div v-if="item.role!=='system'" :class="item.role === 'user' ? 'row-right' : 'row-left'" :key="i">
        <div v-if="item.role !== 'user'">
          <img :src="aiImg" className="avatar-icon" alt="avatar" />
        </div>
        <div style="{{item.role !== 'user'? ;:'' }}">
          {{ item.content.trim() }}
        </div>
        <div v-if="item.role === 'user'">
          <img :src="profile" className="avatar-icon" alt="avatar" />
        </div>
      </div>
    </div>
    <CustomerLoading :show="isLoading"></CustomerLoading>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from "@/hooks/useMessage";
const { messages, isLoading, addMessage,initializeChat } = useMessage();
import CustomerLoading from "@/components/customerLoding.vue";
import aiImg from "@/assets/imgs/ai.png";
import profile from "@/assets/imgs/profile-image.png";

initializeChat()

</script>

<style lang="scss" scoped>
.chat-wrap {
  color: #fff;
  .avatar-icon {
    width: 45px;
    height: 45px;
    margin: 0 10px;
    border-radius: 50%;
  }
  .row-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .row-left {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    box-shadow: 0 16px 20px 0 rgba(174,167,223,.06);
  }
}
</style>
