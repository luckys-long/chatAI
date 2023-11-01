<template>
  <a data-animation="ripple" @click.prevent="onCreateSession">
    开始
    <span style="font-weight: bold">新会话</span>
  </a>
  <div class="chat-list">
    <el-scrollbar height="calc(100vh - 41.8vh)">
      <div
        class="chat-item"
        v-for="(item, index) in chatList"
        :key="item.id"
        @click.prevent="onClickItem(item)"
      >
        <el-input
          id="item-input"
          v-if="item.isEdit"
          v-model="item.title"
          placeholder="请输入新的会话内容"
          @blur="onBlur(item)"
        />
        <span v-else>{{ item.title }}</span>
        <span
          ><i
            @click.prevent="onEdit(item)"
            class="iconfont icon-bianji"
            style="margin-left: 0.5em"
          ></i
          ><i
            class="iconfont icon-shanchu"
            style="margin-left: 1em"
            @click.prevent="onDel(index)"
          >
          </i
        ></span>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ElScrollbar, ElDivider } from "element-plus";
import { uuidGenerate } from "@/hooks/utils";

const chatList = ref([
  { title: "默认会话", isEdit: false, id: uuidGenerate() },
]);

const onCreateSession = () => {
  chatList.value.unshift({
    title: "未命名会话",
    isEdit: true,
    id: uuidGenerate(),
  });
  nextTick(() => {
    document.getElementById("item-input")?.focus();
  });
};
const onEdit = (item: { isEdit: boolean }) => {
  item.isEdit = true;
  nextTick(() => {
    document.getElementById("item-input")?.focus();
  });
};

const onBlur = (item: { isEdit: boolean }) => {
  item.isEdit = false;
};
const onDel = (index: number) => {
  console.log(index);
  if (chatList.value.length > 1) {
    chatList.value.splice(index, 1);
  }
};

const onClickItem = (item: any) => {};
</script>
<style lang="scss" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
}
.chat-list {
  margin-top: 5px;
  padding: 10px;
  color: #fff;

  .chat-item {
    padding: 12px 20px;
    border-radius: 5px;
    transition: all 0.4s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1px 0;
  }
  .chat-item:hover {
    background: rgba(140, 147, 157, 0.15);
    cursor: pointer;
 
  }
}

*[data-animation="ripple"] {
  height: 100%;
  width: 60%;
  margin: 15px;
  display: block;
  outline: none;
  padding: 13px;
  color: #fff;
  text-transform: uppercase;
  background: linear-gradient(135deg, #e570e7 0%, #79f1fc 100%);
  box-sizing: border-box;
  text-align: center;
  line-height: 14px;
  font-family: roboto, helvetica;
  font-weight: 200;
  letter-spacing: 1px;
  text-decoration: none;
  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  /*border-radius: 50px;*/
  -webkit-tap-highlight-color: transparent;
  border-radius: 5px;
}

*[data-animation="ripple"]:focus {
  outline: none;
}
*[data-animation="ripple"]::selection {
  background: transparent;
  pointer-events: none;
}

*[data-animation="ripple"]:active::after {
  background: transparent;
  pointer-events: none;
}
</style>
