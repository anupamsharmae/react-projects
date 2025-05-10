import { initStore } from "./store";

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

const configStore = () => {
   const actions = {
      'TOGGLE_FAV': (currState, prodId) => {
         console.log(currState);
         const prodIndex = currState.products.findIndex(prod => prod.id === prodId);
         const newFavStatus = !currState.products[prodIndex].isFavorite;
         const updatedState = [...currState.products];
         updatedState[prodIndex] = {
            ...currState.products[prodIndex],
            isFavorite: newFavStatus
         }
         return { products: updatedState }
      }
   }

   initStore(actions, { products: products });
}

export default configStore;