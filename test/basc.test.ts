import { useCounterStore } from "@src/piniaStore/counter";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";

describe("1.测试-测试", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("should works", () => {
        const counter = useCounterStore();
        // console.log(counter.count);

        expect(counter.count).toBe(0);
    });
});
