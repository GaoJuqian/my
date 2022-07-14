import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        // { name: "hello", path: "/hello", component: () => import("../components/HelloWorld") },
        { name: "Home", path: "/", component: () => import("@/page/Home/Home") },
        { name: "WebGpu", path: "/WebGpu", component: () => import("@/components/WebGpu") },
    ],
});
