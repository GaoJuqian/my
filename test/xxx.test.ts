import { describe, expect, it } from "vitest";

describe.skip.concurrent("xxx测试", () => {
    it("1", async () => {
        expect(1 + 2).toEqual(1);
    });

    it("should works2", async () => {
        expect(1 + 2).toEqual(2);
    });
});
