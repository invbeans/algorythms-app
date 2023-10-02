import {configureStore} from '@reduxjs/toolkit'
import exampleReducer from '../slices/example'

export const store = configureStore({
    reducer: {
        example: exampleReducer,
    }
})