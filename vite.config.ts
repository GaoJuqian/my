import { defineConfig } from "vite";
import vue2 from "@vitejs/plugin-vue2";
import vueJsx from "@vitejs/plugin-vue2-jsx";

export default defineConfig({
    plugins: [vue2({}), vueJsx({ compositionAPI: true })],
    resolve: {
        // 路径引用别名
        alias: {},
    },
});
