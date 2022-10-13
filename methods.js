export const functionLength = (array) => {
    let count = 0;
    for (let i = 0; array[i] !== undefined; i++) {
        count++;
    }

    return count;
};
export const functionPush = (value, array) => {
    let a = array.length;

    array[a] = value;
    return array.length;
};

export const functionIndexOf = (array, value) => {
    const arrayError = new Error('Error, el array esta vacio!');
    if (array.length < 1) {
        throw arrayError;
    }
    let position;
    for (position of array) {
        position += 1;
        if (Object.is(array[position], value)) {
            return position;
        }
    }
    return -1;
};

export const functionIncludes = (array, value) => {
    for (let position of array) {
        position += 1;
        if (Object.is(array[position], value)) {
            return true;
        }
    }
    return false;
};
