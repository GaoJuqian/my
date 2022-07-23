import router from "@src/router/index";

export function useRouter() {
    return router;
}
export function useRoute() {
    return router.currentRoute;
}
