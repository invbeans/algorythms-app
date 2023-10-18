import {configureStore} from '@reduxjs/toolkit'
import exampleReducer from '../slices/example'
import sortReducer from '../slices/sortSlice';
import searchReducer from '../slices/searchSlice';

export const store = configureStore({
    reducer: {
        example: exampleReducer,
        sort: sortReducer,
        search: searchReducer
    }
})