import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./samples/node-api";
import router from "./router";
import { createPinia } from "pinia";
import "@/assets/iconfont/iconfont.css"; // icon-font 字体
import "@/assets/iconfont/iconfont.js";
import SvgIcon from "@/components/SvgIcon.vue";



const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("SvgIcon", SvgIcon);


app.mount("#app").$nextTick(() => {

  postMessage({ payload: "removeLoading" }, "*");
});
