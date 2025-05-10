import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import { useEffect } from 'react'
import Notification from './components/UI/Notification'
import { fetchCartData, sendCartData } from './store/cart-action'
import { uiActions } from './store/ui-slice';

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const isFirstRender = useSelector(state => state.ui.isFirstRender);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if(isFirstRender){
      dispatch(uiActions.setFirstInitialRender(false));
      return;
    }

    if(cart.changed){
      dispatch(sendCartData(cart))
    }

  }, [cart, dispatch, isFirstRender])

  return (
    <>
    {notification && (
      <Notification
      status={notification.status}
      title={notification.title}
      message={notification.message}
      />)}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
