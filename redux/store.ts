import { configureStore } from "@reduxjs/toolkit";
import portfolioSlices from "./slices/portfolioSlices";

const store = configureStore({
    reducer:{
        portfolio:portfolioSlices
    }
})
export default store;