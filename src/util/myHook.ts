import router from "@src/router/index";
import {Route} from "vue-router";

export function useRouter() {
    return router;
}
export function useRoute() {
    return router.currentRoute;
}
