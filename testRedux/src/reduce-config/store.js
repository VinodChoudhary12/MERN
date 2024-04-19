import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

const store = configureStore({
    reducer: {
        Data: CounterSlice
    }
});

export default store;