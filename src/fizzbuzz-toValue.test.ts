import {expect, test} from "vitest";
import {toValue, Value} from "./fizzbuzz";

test("toValue 1 becomes {original:1,text:undefined}", () => {
    expect<Value>(toValue(1)).toStrictEqual({ original: 1, text: undefined});
});

test("toValue 2 becomes {original:2,text:undefined}", () => {
    expect<Value>(toValue(2)).toStrictEqual({ original: 1, text: undefined});
});

test("toValue 3 becomes {original:3,text:undefined}", () => {
    expect<Value>(toValue(3)).toStrictEqual({ original: 3, text: "Fizz"});
});
