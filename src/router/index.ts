import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        // { name: "hello", path: "/hello", component: () => import("../components/HelloWorld") },
        { name: "Home", path: "/", component: () => import("@src/page/Home/Home") },
        { name: "WebGpu", path: "/WebGpu", component: () => import("@src/components/WebGpu") },
    ],
}) as VueRouter;
export default router;
