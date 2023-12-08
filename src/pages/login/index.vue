<!-- 登录页 -->

<template>
  <div class="login-content"></div>
  <div class="login-box">
    <p class="tilte-1">云律，您身边的法律顾问（试用行版）</p>
    <div class="login-form">
      <p class="title-2">用户登录</p>
      <el-form
        ref="formRef"
        label-position="top"
        label-width="100px"
        :model="formData"
        :rules="rules"
        style="max-width: 460px"
      >
        <el-form-item label="" prop="user">
          <el-input v-model="formData.user" placeholder="账号" />
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="formData.password" placeholder="密码" />
        </el-form-item>
        <div class="opt-btn">
          <el-button link> 立即注册</el-button>
          <el-button link style="color: #5ac1fe"> 忘记密码</el-button>
        </div>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm(formRef)"
            style="width: 329px"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ElForm, ElInput, ElFormItem, ElButton } from "element-plus";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();

const formData = reactive({
  user: "",
  password: "",
});

const rules  = reactive({
  user: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    // { min: 3, max: 5, message: '会议ID长度不合法', trigger: 'blur' },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
  ],
});

  const formRef = ref()
  
  const submitForm=(formRef)=>{
    router.push(`home`);
  }
</script>

<style lang="scss" scoped>
.login-content {
  width: 100vw;
  height: 100vh;
  @include setBgByUrl("@/assets/bg.png");
}
.login-box {
  position: absolute;
  right: 10vw;
  top: vh(300);
  .tilte-1 {
    height: 49px;
    font-size: 32px;
    font-family: YouSheBiaoTiHei;
    font-weight: 400;
    color: #00a0ff;
    text-align: center;
    margin-bottom: vh(30);
  }

  :deep(.el-input) {
    --el-text-color-placeholder: #5ac1fe;
    --el-input-border-color: rgba(79, 165, 255, 0.75);
    --el-input-text-color: #fff;
    --el-input-bg-color: transparent;
  }
  .title-2 {
    font-size: 28px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: vh(30);
  }
  .login-form {
    width: vw(574);
    height: vh(454);
    // background: rgba(38, 38, 38, 0.3);
    min-width: 394px;
    min-height: 322px;
    @include flexCenter;
    @include setBgByUrl("@/assets/imgs/box-border.png");
    flex-direction: column;
  }
  .opt-btn {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 23px;
    font-weight: 500;
    font-family: Source Han Sans CN;
  }
}
</style>
