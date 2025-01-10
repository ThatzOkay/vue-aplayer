import { CodeTabs } from "C:/Projects/ts2/vue-aplayer/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Projects/ts2/vue-aplayer/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Projects/ts2/vue-aplayer/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
