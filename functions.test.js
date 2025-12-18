import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./testFunctions";

// 1. Capitalize first character of a string
describe('capitalize', () => {
    test('capitalizes the first char of a lowercase word', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('does not change an already capitalized word', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });

    test('works with a single character', () => {
        expect(capitalize('a')).toBe('A');
    });

    test('returns an empty of an empty string', () => {
        expect(capitalize('')).toBe('');
    });
});

// 2. Reverse string
describe('reverseString', () => {
    test('reverses a string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('handles spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('returns empty string for invalid input', () => {
        expect(reverseString(null)).toBe('');
    });
});

// 3. Calculator object
describe('calculator', () => {
    test('adds two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('subtracts two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('multiplies two numbers', () => {
        expect(calculator.multiply(2, 4)).toBe(8);
    });

    test('divides two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('division by zero returns null', () =>{
        expect(calculator.divide(3, 0)).toBeNull();
    });
})

describe('caesarCipher', () => {
    test('shifts lowercase letters', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
    });

    test('wraps from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('preserves uppercase letters', () => {
        expect(caesarCipher('Abc', 1)).toBe('Bcd');
    });

    test('handles large shift factors', () => {
        expect(caesarCipher('abc', 26)).toBe('abc');
    });

    test('returns empty string for invalid input', () => {
        expect(caesarCipher(123, 5)).toBe('');
    });
});

describe('analyzeArray', () => {
    test('returns correct average, min, max, and length', () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);

        expect(result).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });

    test('works with negative numbers', () => {
        const result = analyzeArray([-2, -5, -1]);

        expect(result).toEqual({
            average: -8 /3,
            min: -5,
            max: -1,
            length: 3, 
        });
    });

    test('returns null for empty', () => {
        expect(analyzeArray([])).toBeNull();
    });

    test('returns null for invalid input', () => {
        expect(analyzeArray('not an array')).toBeNull();
    });
});