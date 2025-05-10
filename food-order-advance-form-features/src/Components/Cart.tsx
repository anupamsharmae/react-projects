import { use } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/cart-context";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
   const cartCtx = use(CartContext);
   const userProgressCtx = use(UserProgressContext);

   const cartTotal = cartCtx.items.reduce((total, item) => total + (item.price * item.quantity), 0);

   function handleCloseCart() {
      userProgressCtx.hideCart();
   }

   function handleShowCheckout(){
      userProgressCtx.showCheckout();
   }


   return (
      <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
         <h2>Your Cart</h2>
         <ul>
            {cartCtx.items.map(item => (
               <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onDecrease={() => cartCtx.addItem(item)}
                  onIncrease={() => cartCtx.removeItem(item.id)}
               />
            ))}
         </ul>
         <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
         <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            {cartCtx.items.length > 0 && <Button onClick={handleShowCheckout}>Go to checkout</Button>}
         </p>
      </Modal>
   )
}