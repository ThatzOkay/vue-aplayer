import { createApp } from 'vue'
import App from './App.vue'
import { VueAPlayerPlugin } from '../../src';
import '../../src/assets/style/vue-aplayer.scss'
 
createApp(App)
  .use(VueAPlayerPlugin, {
    defaultCover: 'https://github.com/u3u.png'
  })
  .mount('#app');
