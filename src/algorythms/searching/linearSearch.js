let currentIndex = -1;

export function linearSearchStep(array, numberToSearch) {
    if (currentIndex < array.length) {
        currentIndex++;
    }
    return currentIndex;
}

function clearProperties() {
    currentIndex = -1;
}

export function isLinearSearchDone(array, numberToSearch) {
    if (currentIndex < array.length) {
        if (array[currentIndex] === +numberToSearch) {
            clearProperties();
            return true;
        } else {
            return false;
        }
    } else {
        clearProperties();
        return true;
    }
}

export function isNumberFoundByLinearSearch(array, numberToSearch) {
    if (array[currentIndex] !== +numberToSearch) {
        return false;
    } else {
        return true;
    }
}