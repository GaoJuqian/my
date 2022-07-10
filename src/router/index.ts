import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { name: "hello", path: "/", component: () => import("../components/HelloWorld") },
        { name: "Home", path: "/Home", component: () => import("../page/Home/Home") },
    ],
});
