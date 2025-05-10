import { createContext, useState } from "react";

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

export interface Product {
   id: string;
   title: string;
   description: string;
   isFavorite: boolean;
}

interface ProductsContextType {
   products: Product[];
   toggleFav: (id: string) => void;
}

export const ProductsContext = createContext<ProductsContextType>({
   products: [],
   toggleFav: () => { }
});

export default function ProductsContextProvider({ children }: { children: React.ReactNode }) {
   const [productList, setProductList] = useState(products);

   function toggleFav(prodId: string) {
      setProductList((prevProds) => {
         const prodIndex = prevProds.findIndex(prod => prod.id === prodId);
         const newFavStatus = !prevProds[prodIndex].isFavorite;
         const updatedState = [...prevProds];
         updatedState[prodIndex] = {
            ...prevProds[prodIndex],
            isFavorite: newFavStatus
         }
         return updatedState;
      })
   }

   const ctx = {
      products: productList,
      toggleFav
   }

   return (
      <ProductsContext.Provider value={ctx} >
         {children}
      </ProductsContext.Provider >
   )
}