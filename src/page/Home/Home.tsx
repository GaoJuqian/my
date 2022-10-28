import {defineComponent, toRefs, reactive, onMounted, computed} from "vue";
import { useCounterStore } from "@src/piniaStore/counter";
import HelloWorld from "@src/components/HelloWorld";
import { useRouter } from "@src/util/myHook";

export default defineComponent({
    name: "Home",
    setup(props, context) {
        const store = useCounterStore()
        const router = useRouter();

        const state = reactive({});
        return {
            ...toRefs(state),
            increment: store.increment,
            router,
            count: computed(()=> store.count)
        };
    },
    render() {
        const { count, router } = this;
        return (
            <div style={"font-size: 14px"}>
                {count}
                <div style={"font-size: 24px;"}>这是一段没用的文字</div>
                <h1>这是一段没用的文字</h1>
                <button onClick={() => router.push("/WebGpu")}>WebGpu</button>
                <button onClick={(e) => this.increment()}>点击++</button>
                <HelloWorld></HelloWorld>
            </div>
        );
    },
});
