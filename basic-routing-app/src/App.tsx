import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Pages'
import Products from './Pages/Products'
import RootLayout from './Pages/RoutLayout'
import ErrorPage from './Pages/ErroPage'
import ProductDetailsPage from './Pages/ProductDetails'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: < ErrorPage />,
    children: [
      // { path: '', element: <Home /> },
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetailsPage /> },
    ]
  },
])

function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
