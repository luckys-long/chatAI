import { createApp } from "vue";
import 'element-plus/theme-chalk/dark/css-vars.css'
// import 'element-plus/theme-chalk/light/css-vars.css'
import "./style.css";
import App from "./App.vue";
import "./samples/node-api";
import router from "./router";
import { createPinia } from "pinia";
import "@/assets/iconfont/iconfont.css"; // icon-font 字体
import "@/assets/iconfont/iconfont.js";
import SvgIcon from "@/components/SvgIcon.vue";
import ElementPlus from "element-plus";



const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.component("SvgIcon", SvgIcon);


app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*");
});
