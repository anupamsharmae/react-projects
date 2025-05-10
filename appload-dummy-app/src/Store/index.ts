import { configureStore } from "@reduxjs/toolkit";
import apploadSlice from "./appload-slice";


const store = configureStore({
   reducer: { 'appload': apploadSlice.reducer }
})
export default store;