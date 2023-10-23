<template>
    <div>
      <el-switch
        v-model="theme"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
        style="--el-switch-on-color: #ff0000; --el-switch-off-color: #409eff"
        @change="toggleDark()"
      />
    </div>
  </template>
  <script setup lang="ts">
  import { ref, watch } from "vue";
  import { ElSwitch } from "element-plus"
  import { Moon, Sunny } from "@element-plus/icons-vue";
  import { useDark, useToggle, useStorage } from "@vueuse/core";
  import { ipcRenderer } from "electron";

  const isDark = ref(useDark());
  const toggleDark = useToggle(isDark);
  // 切换按钮 localStorage 中的值，保证刷新不重置
  const vueuseColorScheme = useStorage("vueuse-color-scheme", null);
  const theme = vueuseColorScheme.value === "auto" ? ref(false) : ref(true);

  
  watch(
    theme,
    (newVal, oldVal) => {
      console.log(newVal);
      if (newVal) {
        window.document.documentElement.setAttribute("data-theme", "light");
        ipcRenderer.invoke("dark-mode:change","light");
      } else {
        window.document.documentElement.setAttribute("data-theme", "dark");
        ipcRenderer.invoke("dark-mode:change","dark");
      }
    },
    {
      immediate: true,
    }
  );
  </script>