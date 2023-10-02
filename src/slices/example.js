import { createSlice } from "@reduxjs/toolkit";
import { checkSorting, exampleInc } from "../algorythms/sorting/example";

const initialState = {
    value: 0,
    doneSorting: false
}

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = exampleInc(state.value);
            state.doneSorting = checkSorting(state.value);
        },
        changeValue: (state, action) => {
            state.value = action.payload;
            state.doneSorting = checkSorting(state.value);
        }
    }
})

export const {increment, changeValue} = exampleSlice.actions;
export default exampleSlice.reducer;