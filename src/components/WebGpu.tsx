import { defineComponent, toRefs, reactive } from "vue";
import { useCounterStore } from "@/piniaStore/counter";
import { storeToRefs } from "pinia";
import { isWebGpuOk } from "@/util/webGpuHelper";

export default defineComponent({
    name: "WebGpu",
    setup(props, context) {
        const { count } = storeToRefs(useCounterStore());
        const state = reactive({});

        return {
            ...toRefs(state),
            count,
        };
    },
    render() {
        return <div>{isWebGpuOk() ? <div>支持webGpu</div> : <div>不支持webGpu</div>}</div>;
    },
});
