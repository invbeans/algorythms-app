let firstIndex = 0;
let lastIndex = 0;
let middleIndex = 0;
let startedSearching = true;

export function binarySearchStep(array, numberToSearch) {
    if (startedSearching) {
        lastIndex = array.length - 1;
        startedSearching = false;
    }

    middleIndex = Math.trunc((firstIndex + lastIndex) / 2);

    if (array[middleIndex] < numberToSearch) {
        firstIndex = middleIndex + 1;
    }
    
    if (array[middleIndex] > numberToSearch) {
        lastIndex = middleIndex - 1;
    }

    return middleIndex;
}

export function isBinarySearchDone(array, numberToSearch) {
    if (firstIndex <= lastIndex && array[middleIndex] !== +numberToSearch) {
        return false;
    } else {
        firstIndex = 0;
        lastIndex = 0;
        middleIndex = 0;
        startedSearching = true;
        return true;
    }
}

export function isNumberFoundByBinarySearch(array, numberToSearch) {
    if(array[middleIndex] === +numberToSearch) {
        return true;
    } else return false;
}