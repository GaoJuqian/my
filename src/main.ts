import Vue from "vue";
import App from "./App";
import router from "./router";
import { createPinia, PiniaVuePlugin } from "pinia";
import "@/assets/core/index.css";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

Vue.config.productionTip = false;
Vue.config.errorHandler = function (err, vm, info) {};

new Vue({
    router,
    pinia,
    render: (h) => h(App),
}).$mount("#app");
