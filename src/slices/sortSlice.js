import { createSlice } from "@reduxjs/toolkit";
import { initSortArray } from "../algorythms/sorting/initSortArray";
import { bubbleSortStep, isBubbleSortDone } from "../algorythms/sorting/bubbleSort";
import { isQuickSortDone, quickSortStep } from "../algorythms/sorting/quickSort";
import { isSelectionSortDone, selectionSortStep } from "../algorythms/sorting/selectionSort";

const initialState = {
    array: [],
    doneSorting: false
}

export const BUBBLE_SORT = 'BUBBLE_SORT';
export const SELECTION_SORT = 'SELECTION_SORT';
export const QUICK_SORT = 'QUICK_SORT';

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        initArray: (state, action) => {
            state.array = initSortArray();
            state.doneSorting = false;
        },
        sortStep: (state, action) => {
            switch (action.payload) {
                case BUBBLE_SORT:
                    state.array = bubbleSortStep(state.array);
                    state.doneSorting = isBubbleSortDone(state.array);
                    break;
                case SELECTION_SORT:
                    state.array = selectionSortStep(state.array);
                    state.doneSorting = isSelectionSortDone(state.array);
                    break;
                case QUICK_SORT:
                    state.array = quickSortStep(state.array);
                    state.doneSorting = isQuickSortDone();
                    break;
            }
        }
    }
})

export const { initArray, sortStep } = sortSlice.actions;
export default sortSlice.reducer;