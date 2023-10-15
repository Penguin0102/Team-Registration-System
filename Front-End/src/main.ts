import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from "pinia"


const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(ElementPlus);
app.use(pinia);

app.mount('#app');






















