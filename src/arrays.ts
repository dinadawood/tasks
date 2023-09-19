/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const firstlastNums: number[] = [];
    if (numbers.length > 1) {
        firstlastNums.splice(0, 0, numbers[0]);
        firstlastNums.splice(1, 0, numbers[numbers.length - 1]);
        return firstlastNums;
    } else if (numbers.length === 1) {
        firstlastNums.splice(0, 0, numbers[0]);
        firstlastNums.splice(1, 0, numbers[0]);
        return firstlastNums;
    } else {
        return firstlastNums;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const conversion = numbers.map((numbers: string): number =>
        parseInt(numbers) ? parseInt(numbers) : 0
    );
    return conversion;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollars = amounts.map((amount: string): string =>
        amount.replace("$", "")
    );
    const returnNums = dollars.map((amount: string): number =>
        parseInt(amount) ? parseInt(amount) : 0
    );
    return returnNums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const messageList = messages.map((messages: string): string =>
        messages.endsWith("!") ? messages.toUpperCase() : messages
    );
    const messages_que = messageList.filter(
        (messages: string): boolean => !messages.endsWith("?")
    );
    return messages_que;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const smallWords = words.filter((word: string): boolean => word.length < 4);
    return smallWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rbg: boolean = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return rbg;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const totalSum: number = addends.reduce(
        (sum: number, numbers: number) => sum + numbers,
        0
    );
    const actual: string[] = addends.map((numbers: number): string =>
        numbers.toString()
    );
    const joins = totalSum + "=" + actual.join("+");
    return joins;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const pos: number[] = [...values];
    const positive = values.every((nums: number): boolean => nums > 0);
    if (values.length === 0) {
        return [0];
    }
    if (positive) {
        const totalSum = values.reduce(
            (sum: number, nums: number): number => sum + nums
        );
        return [...values, totalSum];
    } else {
        const negative = values.findIndex((nums: number): boolean => nums < 0);
        const mid = values.slice(0, negative);
        const totalSum = mid.reduce(
            (sum: number, nums: number): number => sum + nums,
            0
        );
        pos.splice(negative + 1, 0, totalSum);
        return pos;
    }
}
