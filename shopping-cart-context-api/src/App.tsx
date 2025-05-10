import './App.css'
import { DUMMY_PRODUCTS } from './assets/scripts/dummy-products';
import Header from './components/Header';
import Shop from './components/Shop';
import Product from './components/Product';
import CartContextProvider from './store/shoppingCartContext';



function App() {



  return (
    <>
      <CartContextProvider>
        <Header />
        <Shop>
          {
            DUMMY_PRODUCTS.map((product) => (
              <li key={product.id}>
                <Product {...product} />
              </li>
            ))
          }
        </Shop>
      </CartContextProvider>
    </>
  )
}

export default App
