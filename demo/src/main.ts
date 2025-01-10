import { createApp } from 'vue'
import App from './App.vue'
import { VueAPlayerPlugin } from '../../src';
 
createApp(App)
  .use(VueAPlayerPlugin, {
    productionTip: (import.meta).env.NODE_ENV !== 'development',
  })
  .mount('#app');
