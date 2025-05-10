import { createContext, useReducer } from "react";
import { Item } from "../models/models";
import { DUMMY_PRODUCTS } from "../assets/scripts/dummy-products";

export const CartContext = createContext<any>({
  items: [],
  addItemToCart: () => { },
  updateItemQty: () => { }
});

function addItemToCart(prevState, payload) {
  const updatedItems = [...prevState.items];
  const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === payload);
  const existingCartItem = updatedItems[existingCartItemIndex];

  if (existingCartItem) {
    const updatedItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + 1,
    };
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    const product = DUMMY_PRODUCTS.find(product => product.id === payload);
    updatedItems.push({
      id: payload,
      name: product?.title || '',
      price: product?.price || 0,
      quantity: 1
    } as Item);
  }

  return {
    items: updatedItems
  }
}

function updateItemCart(prevState, {productId, amount}) {
  const updatedItems = [...prevState.items];
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
}


function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    return addItemToCart(state, action.payload)
  } else if (action.type === 'UPDATE_ITEM') {
    return updateItemCart(state, action.payload)
  }
  return state;
}



export default function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [shoppingCartState, setShoppingCartDispatcher] = useReducer(shoppingCartReducer, { items: [] })

  const handleAddItemToCart = (id: string) => {

    setShoppingCartDispatcher({
      type: 'ADD_ITEM',
      payload: id
    })
  }

  const handleUpdateCartItemQuantity = (productId: string, amount: number) => {
    setShoppingCartDispatcher({
      type: 'UPDATE_ITEM',
      payload: {
        productId,
        amount
      }
    })
  }


  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQty: handleUpdateCartItemQuantity
  }

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  )
}