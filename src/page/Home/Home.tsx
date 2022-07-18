import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { useCounterStore } from "@/piniaStore/counter";
import HelloWorld from "@/components/HelloWorld";
import { useRouter } from "@/util/myHook";

export default defineComponent({
    name: "Home",
    setup(props, context) {
        const { increment } = useCounterStore();
        const router = useRouter();

        const state = reactive({});
        return {
            ...toRefs(state),
            increment,
            router,
        };
    },
    render() {
        const { count, router } = this;
        return (
            <div>
                <h1>这是一段没用的文字</h1>
                <button onClick={() => router.push("/WebGpu")}>WebGpu</button>
                <button onClick={(e) => this.increment()}>点击++</button>
                <HelloWorld></HelloWorld>
            </div>
        );
    },
});
