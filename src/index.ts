import type { App } from "vue";
import type { Plugin } from "vue";
import type { InstallOptions } from "./types/aplayer";
import { usePlayerStore } from "./vue-store";
import APlayer from "./Components/APlayer.vue";

import "./assets/style/vue-aplayer.scss";

export { APlayer };

const VueAPlayerPlugin: Plugin = {
  install(app: App, options: InstallOptions = {}) {
    const defaultOptions: InstallOptions = {
      defaultCover: "https://avatars2.githubusercontent.com/u/20062482?s=270",
    };

    const opts = { ...defaultOptions, ...options };
    Object.assign(this, { options: opts });
    
    app.component('aplayer', APlayer);
    app.component('Aplayer', APlayer);
    app.component('APlayer', APlayer);
    app.component('a-player', APlayer);

    const store = usePlayerStore();

    store.set([opts]);

    app.provide('aplayerStore', store);
  },
};

export { VueAPlayerPlugin };
