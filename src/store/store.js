import {configureStore} from '@reduxjs/toolkit'
import exampleReducer from '../slices/example'
import sortReducer from '../slices/sortSlice';

export const store = configureStore({
    reducer: {
        example: exampleReducer,
        sort: sortReducer
    }
})