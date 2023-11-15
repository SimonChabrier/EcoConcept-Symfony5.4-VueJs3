import '@styles/app.scss';

import { createApp } from "vue";
import router from "@/router/router";
import { createPinia } from 'pinia';
import App from "@/App.vue";

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)    
.mount("#app");



