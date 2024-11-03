import {configureStore} from "@reduxjs/toolkit"
import blogReducer from "../store/authSlice"

export const store=configureStore({
    reducer:blogReducer
})