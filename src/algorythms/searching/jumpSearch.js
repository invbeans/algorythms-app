let previousStep = 0;
let jumpStep = 0;
let isJumping = true; //его тру в конце
let startedSearching = true;

export function jumpSearchStep(array, numberToSearch) {
    if (startedSearching) {
        jumpStep = Math.trunc(Math.sqrt(array.length));
        startedSearching = false;
    }
    if (isJumping) {
        jumpCycleStep(array, numberToSearch);
    } else {
        linearCycleStep(array, numberToSearch);
    }

    return previousStep;
}

function jumpCycleStep(array, numberToSearch) {
    if (array[Math.min(jumpStep, array.length) - 1] < numberToSearch) {
        previousStep = jumpStep;
        jumpStep += Math.trunc(Math.sqrt(array.length));
    }
    isJumping = false;
}

function linearCycleStep(array, numberToSearch) {
    if(array[previousStep] < numberToSearch) {
        previousStep++;
    }
}

export function isJumpSearchDone(array, numberToSearch) {
    //проверить
    if (previousStep < Math.min(jumpStep, array.length)) {
        return false;
    } else {
        isJumping = true;
        previousStep = 0;
        jumpStep = 0;
        startedSearching = true;
        return true;
    }
}

export function isNumberFoundByJumpSearch(array, numberToSearch) {
    if (array[previousStep] == numberToSearch) {
        return true;
    } else return false;
}