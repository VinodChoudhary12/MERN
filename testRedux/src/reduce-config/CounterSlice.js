import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "CounterSlice ",
    initialState: {
        counter: 100
    },
    reducers: {
        incrementCounter: (state, action) => {
            state.counter = state.counter + 1;
        },
        decreamentCounter: (state, action) => {
            state.counter = state.counter - 1;
        }
    }
});

export const { incrementCounter, decreamentCounter } = slice.actions;
export default slice.reducer;