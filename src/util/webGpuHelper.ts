/**
 * 检测webGpu是否可用
 * @returns true || false
 */
export function isWebGpuOk() {
    return typeof window.navigator.gpu !== "undefined";
}
