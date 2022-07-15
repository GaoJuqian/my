import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
    render() {
        return (
            <div>
                <keep-alive include={["Home"]}>
                    <router-view />
                </keep-alive>
            </div>
        );
    },
});
