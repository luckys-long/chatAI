<template>
  <div class="chat-wrap">
    <div v-for="(item, i) in messages">
   <div  :class="item.role === 'user'?'row-right':'row-left'">
    <div v-if="item.role !== 'user'" >
      <img
        src="https://www.teamsmart.ai/next-assets/team/ai.jpg"
        className="avatar-icon"
        alt="avatar"
      />
    </div>
    <div style="{{item.role === 'user'?'':'' }}">  {{ item.content.trim() }}</div>
    <div v-if="item.role === 'user'" >
      <img
        src="https://www.teamsmart.ai/next-assets/profile-image.png"
        className="avatar-icon"
        alt="avatar"
      />
    </div>
  </div>
  </div>
  </div>
 
</template>

<script setup lang="ts">
import { useMessage } from "@/hooks/useMessage";
const { messages, isLoading,addMessage } = useMessage();


// addMessage()
console.log("=====>",messages);

</script>

<style lang="scss" scoped>
.chat-wrap{
  color: beige;
  .avatar-icon{
    width: 50px;
    height: 50px;
  }
  .row-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .row-left{
    display: flex;
    justify-content: flex-start;
  }
}
</style>
