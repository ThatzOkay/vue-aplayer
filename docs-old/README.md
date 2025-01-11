---
home: true
heroImage: /hero.png
actionText: Get started quickly →
actionLink: /guide/
features:
  - title: Authentic
    details: Maintains full functionality and the same API, stays in sync with the latest APlayer updates, and minimizes differences.
  - title: Vue Driven
    details: Rewritten all logic using Vue, not just a simple wrapper, all properties are reactive.
  - title: TypeScript Support
    details: Provides full TypeScript type definition support.
footer: MIT Licensed | Copyright © 2018-present MoePlayer
---

### Install

```bash
npm install @thatzokay/vue-aplayer # OR npm install @thatzokay/vue-aplayer --save
```

### Usage

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { VueAPlayerPlugin } from '../../src';

createApp(App)
  .use(VueAPlayerPlugin, {
  defaultCover: 'https://github.com/u3u.png', // Set the default cover image for the player
}).mount('#app');
```

::: warning Compatibility Note
vue-aplayer requires Vue.js >= 3.5.13
:::
