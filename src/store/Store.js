import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/authSlice/authSlice"

const Store = configureStore({
    reducer: {
        auth: AuthSlice
    }
})

export default Store