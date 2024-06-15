import { Snackbars } from "./app.types";

export const useAppStore = defineStore("app", {
  state: () => ({
    snackbar: {
      isShow: false,
      message: "",
    } as Snackbars,
  }),

  actions: {
    shomeSnackbar(message: string) {
      this.snackbar.isShow = true;
      this.snackbar.message = message;
    },
  },
});
