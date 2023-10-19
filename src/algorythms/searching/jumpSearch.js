let previousStep = 0;
let jumpStep = 0;
let isJumping = false; //его тру в конце
let startedSearching = true;

export function jumpSearchStep(array, numberToSearch) {
    if (startedSearching) {
        jumpStep = Math.trunc(Math.sqrt(array.length));
        startedSearching = false;
        isJumping = true;
        return jumpStep;
    }
    if (isJumping) {
        jumpCycleStep(array, numberToSearch);
    } else {
        linearCycleStep(array, numberToSearch);
    }

    return previousStep;
}

function jumpCycleStep(array, numberToSearch) {
    if (array[Math.min(jumpStep, array.length - 1)] < numberToSearch) {
        previousStep = jumpStep;
        jumpStep += Math.trunc(Math.sqrt(array.length));
    }
    else {
        isJumping = false;
    }
}

function linearCycleStep(array, numberToSearch) {
    if (array[previousStep] < numberToSearch) {
        previousStep++;
    }
    else {
        // для случая, если числа нет
        jumpStep = previousStep;
    }
}

function clearProperties() {
    isJumping = true;
    previousStep = 0;
    jumpStep = 0;
    startedSearching = true;
}

export function isJumpSearchDone(array, numberToSearch) {
    if (isJumping && previousStep >= array.length) {
        clearProperties();
        return true;
    }
    else if (!isJumping && previousStep === Math.min(jumpStep, array.length - 1)) {
        clearProperties();
        return true;
    }
    else if (array[previousStep] === +numberToSearch) {
        clearProperties();
        return true;
    }
    else {
        return false;
    }
}

export function isNumberFoundByJumpSearch(array, numberToSearch) {
    if (array[previousStep] === +numberToSearch) {
        return true;
    } else return false;
}