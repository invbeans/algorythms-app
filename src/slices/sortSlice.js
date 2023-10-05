import { createSlice } from "@reduxjs/toolkit";
import { initSortArray } from "../algorythms/sorting/initSortArray";
import { bubbleSortStep, isBubbleSortDone } from "../algorythms/sorting/bubbleSort";

const initialState = {
    array: [],
    doneSorting: false
}

export const BUBBLE_SORT = 'BUBBLE_SORT';

export const sortSlice = createSlice ({
    name: 'sort',
    initialState,
    reducers: {
        initArray: (state, action) => {
            state.array = initSortArray();
        },
        sortStep: (state, action) => {
            switch (action.payload) {
                case BUBBLE_SORT:
                    state.array = bubbleSortStep(state.array);
                    //console.log(state.array);
                    state.doneSorting = isBubbleSortDone(state.array);
                    break;
            }
        }
    }
})

export const {initArray, sortStep} = sortSlice.actions;
export default sortSlice.reducer;