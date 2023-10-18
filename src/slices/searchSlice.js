import { createSlice } from "@reduxjs/toolkit";
import { initSearchArray } from '../algorythms/searching/initSearchArray';
import { binarySearchStep, isBinarySearchDone, isNumberFoundByBinarySearch } from "../algorythms/searching/binarySearch";
import { isJumpSearchDone, isNumberFoundByJumpSearch, jumpSearchStep } from "../algorythms/searching/jumpSearch";

const initialState = {
    array: [],
    doneSearching: false,
    //to store all steps of search
    activeIndexes: [],
    numberToSearch: 0,
    isFound: false
}

export const BINARY_SEARCH = 'BINARY_SEARCH';
export const JUMP_SEARCH = 'JUMP_SEARCH';

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        initArray: (state, action) => {
            state.array = initSearchArray();
            state.doneSearching = false;
            state.isFound = false;
            state.activeIndexes = [];
            state.numberToSearch = 0;
        },
        setNumberToSearch: (state, action) => {
            state.numberToSearch = action.payload;
            console.log(action.payload);
            state.activeIndexes = [];
            state.doneSearching = false;
            state.isFound = false;
        },
        searchStep: (state, action) => {
            console.log(state.doneSearching);
            switch (action.payload) {
                case BINARY_SEARCH:
                    //step - возвращать будет активный элемент
                    console.log(JSON.stringify(state.activeIndexes));
                    state.activeIndexes.push(binarySearchStep(state.array, state.numberToSearch));
                    //isfound
                    state.isFound = isNumberFoundByBinarySearch(state.array, state.numberToSearch);
                    //donesearch
                    state.doneSearching = isBinarySearchDone(state.array, state.numberToSearch);
                    break;
                    
                case JUMP_SEARCH:
                    state.activeIndexes.push(jumpSearchStep(state.array, state.numberToSearch));
                    state.isFound = isNumberFoundByJumpSearch(state.array, state.numberToSearch);
                    state.doneSearching = isJumpSearchDone(state.array, state.numberToSearch);
                    break;
            }
        }
    }
})

export const { initArray, setNumberToSearch, searchStep } = searchSlice.actions;
export default searchSlice.reducer;