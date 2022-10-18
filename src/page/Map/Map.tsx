import { defineComponent, toRefs, reactive, onMounted } from "vue";
import "ol/ol.css";
import { useRouter } from "@src/util/myHook";
import MapUtil from "@src/util/Map/Map";
import style from "./map.module.scss";

import icon from "@src/assets/map-pin-user-line.svg";
import svg from "@src/assets/airfield.svg";

export default defineComponent({
    name: "Map",
    setup(props, context) {
        const router = useRouter();

        const state = reactive({});

        const opt = reactive({
            el: "map",
        });

        onMounted(() => {
            const map = new MapUtil(opt);
            map.addMovePoint({icon:icon})
        });

        return {
            ...toRefs(state),
            opt,
            router,
        };
    },
    render() {
        const { router } = this;
        return <div id={"map"} class={style.map} ></div>;
    },
});
