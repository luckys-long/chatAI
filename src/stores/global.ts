import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    loginInfo: {} as any,
    sessionInfo: {} as any,
  }),
  getters: {},
  actions: {
    changeLoginInfo(info: any) {
      this.loginInfo = info;
    },
    changeSessionInfo(info: any) {
      this.sessionInfo = info;
    },
  },
});
