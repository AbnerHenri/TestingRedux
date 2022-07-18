import { createSlice } from "@reduxjs/toolkit";

const Count = createSlice({
    name : 'Counter',
    initialState : { value : 0 },
    reducers : {

        increment : (state)=> {
            state.value += 1
        },

        decrement : (state)=> {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = Count.actions
export default Count.reducer