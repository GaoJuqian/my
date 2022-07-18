(function initApp() {
    if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
        document.documentElement.classList.add("dark");
    }
})();

export default {};
