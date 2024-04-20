// import { configureStore } from "@reduxjs/toolkit";
// import productSlice from "./ProductSlice";

// const store = configureStore({
//     reducer: {
//         product: productSlice
//     }
// })

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

export const store = configureStore({
    reducer: {
        product: ProductSlice
    }
})

