import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCounterStore = defineStore("counter", {
    state: () => ({ count: 0 }),
    actions: {
        increment() {
            this.count++;
        },
    },
});

export const useUserStore = defineStore("user", () => {
    const userState = reactive({
        info: {},
    });

    function setUserState({ type, stateValue }: { type: "info"; stateValue: any }) {
        userState[type] = stateValue;
    }

    return { userState, setUserState };
});
