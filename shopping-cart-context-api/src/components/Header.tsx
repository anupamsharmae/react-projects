import { useRef, use } from "react";
import CartModal from "./CartModal";
import { CartContext } from "../store/shoppingCartContext";


export default function Header() {
   const modal = useRef<HTMLDialogElement>(null);
   const {items} = use(CartContext);
   const cartQuantity = items.length;

   const handleOpenCartClick = () => {
      modal.current?.open();
   }

   let modalActions = <button>Close</button>;
   if (cartQuantity > 0) {
      modalActions = (
         <>
            <button>Close</button>
            <button>Checkout</button>
         </>
      );
   }
   return (
      <>
         <CartModal
            ref={modal}
            title="Your Cart"
            actions={modalActions}
         />
         <header id="main-header">
            <div id="main-title">
               <img src="vite.svg" alt="Elegant model" />
               <h1>Elegant Context</h1>
            </div>
            <p>
               <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
            </p>
         </header>
      </>
   )
}