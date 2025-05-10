import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
   cartIsVisible: false,
   notification: null,
   isFirstRender: true
}
const uiSlice = createSlice({
   name: 'ui',
   initialState: initialUIState,
   reducers: {
      toggle(state) {
         state.cartIsVisible = !state.cartIsVisible;
      },
      showNotification(state, action) {
         state.notification = {
            status: action.payload.status,
            title: action.payload.title,
            message: action.payload.message
         }
      },
      setFirstInitialRender(state, action){
         state.isFirstRender = action.payload
      }
   }
})
export const uiActions = uiSlice.actions;
export default uiSlice;