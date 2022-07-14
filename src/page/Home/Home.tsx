import { defineComponent, toRefs, reactive } from "vue";
import { useCounterStore } from "@/piniaStore/counter";
import HelloWorld from "@/components/HelloWorld";
import { useRouter } from "@/util/myHook";

export default defineComponent({
    name: "Home",
    setup(props, context) {
        const { increment } = useCounterStore();

        const state = reactive({});
        return {
            ...toRefs(state),
            increment,
        };
    },
    render() {
        const { count } = this;
        return (
            <div>
                <button onClick={() => useRouter.push("/WebGpu")}>WebGpu</button>
                <button onClick={(e) => this.increment()}>点击++</button>
                <HelloWorld></HelloWorld>
            </div>
        );
    },
});
