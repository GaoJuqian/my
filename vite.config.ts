import alias from "./alias";
import { defineConfig } from "vite";
import vue2 from "@vitejs/plugin-vue2";
import vueJsx from "@vitejs/plugin-vue2-jsx";

export default defineConfig({
    server: {
        host: "localhost",
    },
    base: "/my/",
    plugins: [vue2({}), vueJsx({ compositionAPI: true })],
    resolve: { alias },
});
