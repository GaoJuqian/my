import router from "@src/router/index";

export const useRouter = () => {
    return router;
};
export const useRoute = () => {
    return router.currentRoute;
};
