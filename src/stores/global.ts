import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    loginInfo: {} as any,
    personnelTree: [] as any,
    phoneList: [] as any[],
  }),
  getters: {},
  actions: {
    changeLoginInfo(info: any) {
      this.loginInfo = info;
    },

  },
});
