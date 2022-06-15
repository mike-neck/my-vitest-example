import {describe, expect} from "vitest";
import {FizzBuzzValue, toFizzBuzzValue} from "./fizzbuzz";

describe("toFizzBuzzValue", () => {
    it("becomes {text: '1'}", () => {
        expect<FizzBuzzValue>(toFizzBuzzValue({
            original: 1, text: undefined
        })).toStrictEqual({
            text: "1"
        });
    });
    it("becomes {text: '2'}", () => {
        expect<FizzBuzzValue>(toFizzBuzzValue({
            original: 2, text: undefined
        })).toStrictEqual({
            text: "Aaa"
        });
    });
    it("becomes {text: 'Fizz'}", () => {
        expect<FizzBuzzValue>(toFizzBuzzValue({
            original: 3, text: "Fizz"
        })).toStrictEqual({
            text: "Fizz"
        });
    });
    it("becomes {text: 'Buzz'}", () => {
        expect<FizzBuzzValue>(toFizzBuzzValue({
            original: 5, text: undefined
        })).toStrictEqual({
            text: "Buzz"
        });
    });
});
