import { createContext, useState } from "react";
import { Item, ItemList } from "../models/models";
import { DUMMY_PRODUCTS } from "../assets/scripts/dummy-products";
export const CartContext = createContext<any>({
  items: [],
  addItemToCart: () => { },
  updateItemQty: () => { }
});

export default function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [shoppingCart, setShoppingCart] = useState<ItemList>({ items: [] });

  const handleAddItemToCart = (id: string) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === id);
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(product => product.id === id);
        updatedItems.push({
          id: id,
          name: product?.title || '',
          price: product?.price || 0,
          quantity: 1
        } as Item);
      }

      return {
        items: updatedItems
      }
    })
  }

  const handleUpdateCartItemQuantity = (productId: string, amount: number) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex((item) => item.id === productId);

      const updatedItem = { ...updatedItems[updatedItemIndex] };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems
      }
    })
  }


  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateItemQty: handleUpdateCartItemQuantity
  }

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  )
}