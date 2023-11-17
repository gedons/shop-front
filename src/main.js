import { createApp } from 'vue'
import './style.css'
import router from './router'
import store from './store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
