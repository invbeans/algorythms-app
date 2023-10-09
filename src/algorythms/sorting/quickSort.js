let stack = [];
let startedSorting = true;

export function quickSortStep(array) {
    if (startedSorting) {
        stack.push(0, array.length - 1);
        startedSorting = false;
    }

    let high = stack.pop();
    let low = stack.pop();
    let pivotIndex = 0;
    pivotIndex = partition(array, low, high);

    if (low < pivotIndex - 1) {
        stack.push(low, pivotIndex - 1);
    }
    if (pivotIndex + 1 < high) {
        stack.push(pivotIndex + 1, high);
    }

    return array;
}

function partition (array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];

    return i + 1;
}

export function isQuickSortDone() {
    if (stack.length > 0) return false;
    else {
        stack = [];
        startedSorting = true;
        return true;
    }
}
