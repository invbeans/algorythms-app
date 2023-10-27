import {configureStore} from '@reduxjs/toolkit'
import sortReducer from '../slices/sortSlice';
import searchReducer from '../slices/searchSlice';

export const store = configureStore({
    reducer: {
        sort: sortReducer,
        search: searchReducer
    }
})