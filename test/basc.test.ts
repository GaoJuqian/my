import { useCounterStore } from "@src/piniaStore/counter";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";

beforeEach(() => {
    setActivePinia(createPinia());
});

describe("1.测试-测试", () => {
    it("should works", () => {
        const counter = useCounterStore();
        expect(counter.count).toBe(0);
        counter.increment();
        expect(counter.count).toEqual(2);
    });
});
