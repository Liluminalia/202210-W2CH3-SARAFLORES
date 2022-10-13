/* eslint-disable no-undef */

import {
    functionLength,
    functionPush,
    functionIndexOf,
    functionIncludes,
} from './methods.js';

describe('Given length of an array', () => {
    // eslint-disable-next-line no-undef
    test(`When the array have 5 values the result should be 5`, () => {
        // Arrange
        const arrayTest = [1, 2, 3, 4, 5];

        // Act
        const result = functionLength(arrayTest);
        // Asset
        expect(result).toBe(5);
    });
});
describe('adding a value to an array and giving the new length', () => {
    test('when the array have 5 values, adds 1 and the result should be 6', () => {
        // Arrange
        const arrayTest = [1, 2, 3, 4, 5];
        const value = 1;
        // Act
        const result = functionPush(value, arrayTest);
        // Asset
        expect(result).toBe(6);
    });
});

describe('given the array position of a value, if is in the array', () => {
    test('when give 5 and the array have the 5 in the 3º position, the result should be 3', () => {
        // Arrange

        const arrayTest = [1, 7, 2, 5, 4];
        const value = 5;

        // Act
        const result = functionIndexOf(arrayTest, value);
        // Asset
        expect(result).toBe(3);
    });
});

describe('given true or false depending if an array have a concrete value', () => {
    test('when give 5 and the array have the 5 in it, the result should be true', () => {
        // Arrange

        const arrayTest = [1, 7, 2, 5, 4];
        const value = 5;

        // Act
        const result = functionIncludes(arrayTest, value);
        // Asset
        expect(result).toBe(true);
    });
});
