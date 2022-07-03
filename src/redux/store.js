import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./word"
import wordsReducer from "./save"

export default configureStore({
    reducer:{
        word : wordReducer,
        save : wordsReducer
    }
});