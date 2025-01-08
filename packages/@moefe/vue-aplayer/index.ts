import type { App } from "vue";
import type { Plugin } from "vue";
import APlayer from "./components/APlayer.vue";
import { usePlayerStore } from "@moefe/vue-store";

export { APlayer };

const APlayerPlugin: Plugin = {
  install(app: App, options: APlayer.InstallOptions = {}) {
    const defaultOptions: APlayer.InstallOptions = {
      productionTip: true,
      defaultCover: "https://avatars2.githubusercontent.com/u/20062482?s=270",
    };
    const opts = { ...defaultOptions, ...options };
    Object.assign(this, { options: opts });

    app.component("aplayer", APlayer);
    app.component("Aplayer", APlayer);
    app.component("APlayer", APlayer);
    app.component("a-player", APlayer);

    const store = usePlayerStore();

    store.set([opts]);

    app.provide("aplayerStore", store);

    if (opts.productionTip) {
      console.log(
        `%c vue-aplayer %c v${APLAYER_VERSION}s %c`,
        'background: #35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
        'background: #41b883; padding: 1px; border-radius: 0 3px 3px 0; color: #fff',
        'background: transparent',
      );
    }
  },
};

export default APlayerPlugin;
