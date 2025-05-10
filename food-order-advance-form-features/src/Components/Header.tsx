import { use } from 'react';
import logoImg from '../assets/react.svg';
import Button from './UI/Button';
import { CartContext } from '../store/cart-context';
import { UserProgressContext } from '../store/UserProgressContext';

export default function Header() {
   const cartCtx = use(CartContext);
   const userProgressCtx = use(UserProgressContext);

   const totalCartCount = cartCtx.items.reduce((total, item) => total + item.quantity, 0)

   function handleShowCart(){
      userProgressCtx.showCart()
   }

   return (
      <header id='main-header'>
         <div id='title'>
            <img src={logoImg} alt="logo image" width={20} />
            <h1 >React Food</h1>
         </div>
         <nav>
            <Button type="button" textOnly onClick={handleShowCart}>Cart ({totalCartCount})</Button>
         </nav>
      </header>
   )
}