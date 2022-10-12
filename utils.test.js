/* eslint-disable no-undef */

import { functionLength } from './utils.js';

describe('Given length of an array', () => {
    // Arrange
    const arraytest = [1, 2, 3, 4, 5, 0, 7, 5, 3, 5, 7, 9];
    let a;

    // eslint-disable-next-line no-undef
    test(`When the array have 5 values the result should be 5`, () => {
        // Act
        functionLength(arraytest, a);
        // Asset
        expect(a).toBe(12);
    });
});
