import { use, useActionState } from "react";
import { CartContext } from "../store/cart-context";
import { currencyFormatter } from "../util/formatting";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import ErrorMessage from "./ErrorMessage";

const checkoutUrl = 'http://localhost:3000/orders';
const requestConfig = {
   method: 'POST',
   headers: {
      'Content-Type': 'application/json'
   },
   body: null
}


export default function Checkout() {
   const cartCtx = use(CartContext);
   const userProgressCtx = use(UserProgressContext);

   const { data, error, sendRequest, clearData } = useHttp(checkoutUrl, requestConfig)

   const cartTotal = cartCtx.items.reduce((total, item) => total + (item.price * item.quantity), 0);


   function handleClose() {
      userProgressCtx.hideCheckout();
   }

   function handleFinish() {
      userProgressCtx.hideCheckout();
      cartCtx.clearCart();
      clearData();
   }

   async function checkoutAction(_prevState, fd) {

      const customerData = Object.fromEntries(fd.entries());

      await sendRequest(JSON.stringify({
         order: {
            items: cartCtx.items,
            customer: customerData
         }
      }))
   }

   const[formState, formAction, pending] = useActionState(checkoutAction, null)


   let actions = (
      <>
         <Button type="button" textOnly onClick={handleClose}>Close</Button>
         <Button >Submit Order</Button>
      </>
   );
   if (pending) {
      actions = <span>Sending order data...</span>
   }

   if (data && !error) {
      return (
         <Modal open={userProgressCtx.progress === 'checkout'}>
            <h2>Success!</h2>
            <p>Your order was submitted successfully.</p>
            <p>We will get back to you with more details via email within the next few minutes.</p>
            <p className="modal-actions">
               <Button onClick={handleFinish}>Okay</Button>
            </p>
         </Modal>
      )
   }

   return (
      <Modal open={userProgressCtx.progress === 'checkout'}>
         <form action={formAction}>
            <h2>Checkout</h2>
            <p>Total amount: {currencyFormatter.format(cartTotal)}</p>
            <Input type="text" id="name" label="Full Name" />
            <Input type="email" id="email" label="Email Address" />
            <Input type="text" id="street" label="Street" />
            <div className="control-row">
               <Input label="Postal code" type="text" id="postal-code" />
               <Input label="City" type="text" id="city" />
            </div>
            {error && <ErrorMessage title="Failed to submit order" message={error} />}
            <p className="modal-actions">
               {actions}
            </p>
         </form>
      </Modal>
   )
}