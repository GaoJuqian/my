export function isWebGpuOk() {
    return typeof window.navigator.gpu !== "undefined";
}
