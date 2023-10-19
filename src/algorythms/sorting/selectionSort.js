let i = 0;
let min = 0;

export function selectionSortStep(array) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
            min = j
        }
    }
    if (min != i) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    i++;
    return array;
}

export function isSelectionSortDone(array) {
    if (i < array.length) {
        return false;
    } else {
        i = 0;
        min = 0;
        return true;
    }
}