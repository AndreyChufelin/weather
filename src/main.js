import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/style.css";
import "swiper/swiper.min.css";
import { i18n } from "./common/localization";

createApp(App).use(store).use(router).use(i18n).mount("#app");
