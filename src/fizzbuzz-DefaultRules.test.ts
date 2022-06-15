import {describe, expect} from "vitest";
import {applyRules, DefaultRules} from "./fizzbuzz";

describe("DefaultRules", () => {
    const one = 1;
    it("becomes 1", () => {
        expect(applyRules(one, DefaultRules))
            .toStrictEqual({ text: "1" });
    });

    it('should becomes Fizz', function () {
        expect(applyRules(3, DefaultRules))
            .toStrictEqual({ text: "Fizz" });
    });

    it('should becomes Buzz', function () {
        expect(applyRules(5, DefaultRules))
            .toStrictEqual({ text: "Buzz" });
    });

    it('should becomes FizzBuzz', function () {
        expect(applyRules(45, DefaultRules))
            .toStrictEqual({ text: "FizzBuzz" });
    });
});

describe("throw object", () => {
    it('should throw exception', function () {
        expect(() => {
            //do nothing
        }).toThrow();
    });

    it('should not throw', function () {
        expect(() => {
            throw new Error("test");
        }).not.toThrow();
    });

    it("throws", () => {
        throw new Error("error");
    });
});
