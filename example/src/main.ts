import { createApp } from 'vue'
import App from './App.vue'
import APlayerPlugin from '@moefe/vue-aplayer'

createApp(App).use(APlayerPlugin, {
  productionTip: import.meta.env.NODE_ENV !== 'development',
}).mount('#app')
