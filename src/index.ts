import type { App } from "vue";
import type { Plugin } from "vue";
import type { InstallOptions } from "./types";
import { usePlayerStore } from "./vue-store";

//import "./assets/style/vue-aplayer.scss";

export * from "./Components"
export * from "./vue-audio";
export * from "./vue-store";
export * from "./vue-touch";
export * from "./types";
export * from "./utils"

const VueAPlayerPlugin: Plugin = {
  install(app: App, options: InstallOptions = {}) {
    const defaultOptions: InstallOptions = {
      defaultCover: "https://avatars2.githubusercontent.com/u/20062482?s=270",
    };

    const opts = { ...defaultOptions, ...options };
    Object.assign(this, { options: opts });

    const store = usePlayerStore();

    store.set([opts]);

    app.provide('aplayerStore', store);
  },
};

export { VueAPlayerPlugin };
