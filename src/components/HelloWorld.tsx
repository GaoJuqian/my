import { defineComponent, toRefs, reactive } from "vue";

export default defineComponent({
    name: "HelloWorld",
    props: {
        title: {
            type: [String, Number],
            default: "",
        },
    },
    setup(props, context) {
        const state = reactive({});
        return {
            ...toRefs(state),
        };
    },
    render() {
        return <div>hello</div>;
    },
});
