// Capitalize function
export function capitalize(string) {
    if (typeof string !== 'string' || string.length === 0 ) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Reverse function
export function reverseString(string) {
    if (typeof string !== 'string' || string.length === 0) return '';
    return string.split('').reverse().join('');
}

// Calculator object
export const calculator = {
    add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') return null;
        return a + b
    },

    subtract(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') return null;
        return a - b;
    },

    multiply(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') return null;
        return a * b;
    },

    divide(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') return null;
        if(b === 0) return null;
        return a / b;
    }
}

export function caesarCipher(string, shift) {
    if (typeof string !== 'string' || typeof shift !== 'number') return '';

    const normalizedshift = shift % 26;

    return string
        .split('')
        .map(char => {
            const code = char.charCodeAt(0);

            // Uppercase A-Z
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(
                    ((code - 65 + normalizedshift + 26) % 26) + 65
                );
            }

            // Lowercase a-z
            if (code >= 97 && code <= 122) {
                return String.fromCharCode(
                    ((code - 97 + normalizedshift + 26) % 26) + 97
                );
            }

            // Non-alphabetic characters
            return char;
        })
        .join('');
}

export function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    if (arr.every(num => typeof num !== 'number')) return null;

    const sum = arr.reduce((total, num) => total + num, 0)

    return {
        average: sum / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
};