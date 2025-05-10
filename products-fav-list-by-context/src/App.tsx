import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Products from './containers/products'
import Favourites from './containers/favorites'
import RootLayout from './containers/root-layout'
import ProductsContextProvider from './context/products'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Products /> },
      { path: 'favorites', element: <Favourites /> }
    ]
  }
])

function App() {

  return (
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
  )
}

export default App
