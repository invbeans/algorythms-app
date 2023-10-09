let i = 0;
let j = 0;

export function bubbleSortStep(array) {
    if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
    }
    //iterating in array
    if (j < array.length - i - 1) j++;
    else {
        i++;
        j = 0;
    }
    return array;
}

export function isBubbleSortDone(array) {
    if (i < array.length) return false;
    else {
        i = 0;
        j = 0;
        return true;
    }
}

