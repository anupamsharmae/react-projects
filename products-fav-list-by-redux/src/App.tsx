import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Products from './containers/products'
import Favourites from './containers/favorites'
import RootLayout from './containers/root-layout'
import { Provider } from 'react-redux'
import store from './store'

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
