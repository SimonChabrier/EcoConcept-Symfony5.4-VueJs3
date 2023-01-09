
import '@styles/app.scss';

// init vue app
import { createApp } from "vue";
import router from "@/router/router";
import { createPinia } from 'pinia';
import App from "@/App.vue";

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)    
.mount("#app");



