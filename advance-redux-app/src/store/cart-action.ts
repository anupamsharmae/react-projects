import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
   return async (dispatch) => {
      const fetchData = async () => {
         const response = await fetch('https://react-redux-631cf-default-rtdb.firebaseio.com/cart.json');
         if(!response.ok){
            throw new Error('Could not fetch the cart data!!');
         }

         const data = await response.json();
         return data;
      }

      try{
         const cartData = await fetchData();
         dispatch(cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity
         }))

      }catch(error){
         dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: error.message || 'Sending cart data failed!!'
         }))
      }
   }
}

export const sendCartData = (cart) => {
   return async (dispatch) => {
      dispatch(uiActions.showNotification({
         status: 'pending',
         title: 'Sending...',
         message: 'Sending the cart data!'
      }))

      const sendRequest = async () => {
         const repsonse = await fetch('https://react-redux-631cf-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify({
               items: cart.items || [],
               totalQuantity: cart.totalQuantity
            })
         });
         if (!repsonse.ok) {
            throw new Error('Sending cart data failed!');
         }
      }

      try {

         await sendRequest();

         dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Send cart data successfully!'
         }))
      } catch (error) {
         dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: error.message || 'Sending cart data failed!!'
         }))
      }

   }
}