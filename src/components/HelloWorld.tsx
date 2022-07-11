import { defineComponent, toRefs, reactive } from "vue";
import { useCounterStore } from "@/piniaStore/counter";
import { storeToRefs } from "pinia";

export default defineComponent({
    name: "HelloWorld",
    props: {
        title: {
            type: [String, Number],
            default: "",
        },
    },
    setup(props, context) {
        const { count } = storeToRefs(useCounterStore());
        const state = reactive({});

        return {
            ...toRefs(state),
            count,
        };
    },
    render() {
        return <div>{this.count}</div>;
    },
});
