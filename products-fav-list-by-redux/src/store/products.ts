import { createSlice } from "@reduxjs/toolkit";

const products = [{
   id: 'p1',
   title: 'Red Scarf',
   description: 'A pretty red scarf.',
   isFavorite: false
},
{
   id: 'p2',
   title: 'Blue T-Shirt',
   description: 'A pretty blue t-shirt.',
   isFavorite: false
},
{
   id: 'p3',
   title: 'Green Trousers',
   description: 'A pair of lightly green trousers.',
   isFavorite: false
},
{
   id: 'p4',
   title: 'Orange Hat',
   description: 'Street style! An orange hat.',
   isFavorite: false
}];


const productSlice = createSlice({
   name: 'products',
   initialState: products,
   reducers: {
      toggleFav(state, action) {
         const prodIndex = state.findIndex(prod => prod.id === action.payload);
         state[prodIndex].isFavorite = !state[prodIndex].isFavorite;
      }
   }
})

export const productAction = productSlice.actions;
export const productReducer = productSlice.reducer