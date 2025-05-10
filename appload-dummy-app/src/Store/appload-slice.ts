import { createSlice } from "@reduxjs/toolkit";

const initApp = {
   appload: null
};

const apploadSlice = createSlice({
   name: 'appload',
   initialState: initApp,
   reducers: {
      setApploadData(state, action) {
         // console.log(state, action);
         state.appload = JSON.parse(JSON.stringify(action.payload.data));
      }
   }
})

export const apploadAction = apploadSlice.actions;
export default apploadSlice;