import { configureStore } from '@reduxjs/toolkit'

import CountReducer from './CounterSlice'

export default configureStore({
    reducer : {
        count : CountReducer,
    }
})