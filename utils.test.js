/* eslint-disable no-undef */

import { functionLength } from './utils.js';

describe('Given length of an array', () => {
    // Arrange
    const arraytest = [1, 2, 3, 4, 5];
    let a;

    // eslint-disable-next-line no-undef
    test(`When the array have 5 values the result should be 5`, () => {
        // Act
        functionLength(arraytest);
        // Asset
        expect(a).toBe(5);
    });
});
// const cases = [
//     { a: 1, b: 1, r: true },
//     { a: NaN, b: NaN, r: false },
//     { a: 0, b: -0, r: true },
//     { a: -0, b: 0, r: true },
//     { a: 1, b: '1', r: false },
//     { a: true, b: false, r: false },
//     { a: false, b: false, r: true },
//     { a: true, b: true, r: true },
//     { a: 'water', b: 'oil', r: false },
//     { a: 'water', b: 'water', r: true },
// ];
// cases.forEach((testCase) => {
//     test(`When parameters are ${testCase.a} and ${testCase.b},
//         then result should be ${testCase.r}`, () => {
//         // Act
//         const result = strictEquals(testCase.a, testCase.b);
//         // Asset
//         expect(result).toBe(testCase.r);
//     });
// });
