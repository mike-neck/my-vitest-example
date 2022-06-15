export type FizzBuzzValue = { text: string };

export type Value = {
    text: string | undefined,
    original: number,
};

export function toValue(original: number): Value {
    return { text: undefined, original: original };
}

export function toFizzBuzzValue(value: Value): FizzBuzzValue {
    if (value.text === undefined) {
        return { text: `${value.original}` };
    } else {
        return { text: value.text };
    }
}

export interface Rule {
    apply: (value: Value) => Value
}

export type Rules = Rule[];

const fizzRule: Rule = {
    apply(value: Value): Value {
        if (value.original % 3 === 0) {
            const pre = value.text;
            return pre === undefined?
                { text: "Fizz", original: value.original }:
                { text: `${value.text}Fizz`, original: value.original };
        } else {
            return value;
        }
    }
};

const buzzRule: Rule = {
    apply(value: Value): Value {
        if (value.original % 5 === 0) {
            const pre = value.text;
            return pre === undefined?
                { text: "Buzz", original: value.original }:
                { text: `${value.text}Buzz`, original: value.original };
        } else {
            return value;
        }
    }
};

export const DefaultRules: Rules = [fizzRule, buzzRule];

export function applyRules(num: number, rules: Rules): FizzBuzzValue {
    const v = toValue(num);
    const rule: Rule = rules.reduce((pre: Rule, current: Rule) => {
        return {
            apply: (value: Value) => {
                const p = pre.apply(value);
                return current.apply(p);
            }
        };
    })
    const r = rule.apply(v);
    return toFizzBuzzValue(r);
}
