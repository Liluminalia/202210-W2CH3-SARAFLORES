export const functionLength = (array, a) => {
    array = [1, 2, 3, 4, 5, 3, 2, 5, 8];
    for (let i = 0; array[i] !== undefined; i++) {
        a = i;
    }
    return a + 1;
};
