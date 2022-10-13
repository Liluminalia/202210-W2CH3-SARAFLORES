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
    for (let j = 0; j < array.length; j++) {
        if (Object.is(array[j], value)) {
            return j;
        }
    }
    return -1;
};

export const functionIncludes = (array, value) => {
    for (let j = 0; j < array.length; j++) {
        if (Object.is(array[j], value)) {
            return true;
        }
    }
    return false;
};
