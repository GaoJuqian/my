import { defineComponent, toRefs, reactive } from "vue";

export default defineComponent({
    name: "Home",
    props: {
        title: {
            type: [String, Number],
            default: "",
        },
    },
    setup(props, context) {
        const state = reactive({
            count: 1,
        });
        return {
            ...toRefs(state),
        };
    },
    render() {
        const { count } = this;
        return (
            <div>
                {count}
                <button onClick={(e) => this.count++}>点击</button>
            </div>
        );
    },
});
