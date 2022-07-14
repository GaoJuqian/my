declare const window: Window & { navigator: Navigator & { gpu: any } };
export function isWebGpuOk() {
    return typeof window.navigator.gpu !== "undefined";
}
