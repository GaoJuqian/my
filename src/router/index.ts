import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        // { name: "hello", path: "/hello", component: () => import("../components/HelloWorld") },
        { name: "Home", path: "/", component: () => import("@src/page/Home/Home") },
        { name: "WebGpu", path: "/webgpu", component: () => import("@src/components/WebGpu") },
        { name: "Map", path: "/map", component: () => import("@src/page/Map/Map") },
        { name: "Three", path: "/three", component: () => import("@src/page/Three/Three") },

    ],
}) as VueRouter;
export default router;
