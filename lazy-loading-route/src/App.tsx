import { createBrowserRouter, LoaderFunctionArgs, RouterProvider } from 'react-router'
import './App.css'
import RootLayout from './pages/Root'
import Home from './pages/Home'
// import Post from './pages/Post'
// import Blog, { loader as blogLoader } from './pages/Blog'
import { lazy, Suspense } from 'react'


// const postLoader = (args: any) => import('./pages/Post').then(module => module.loader(args));
const PostPage = lazy(() => import('./pages/Post'));
const BlogPage = lazy(() => import('./pages/Blog'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: <Suspense fallback={<p>Loading ... </p>}><BlogPage /></Suspense>,
            loader: () => import('./pages/Blog').then(module => module.loader())
          },
          {
            path: ':id',
            element:<Suspense fallback={<p>Loading ... </p>}><PostPage /></Suspense>,
            loader: (args: LoaderFunctionArgs) => import('./pages/Post').then(module => module.loader(args))
          }
        ]
      },
      // {
      //   path: 'posts', element: (
      //     (<Suspense fallback={<p>Loading ... </p>}>
      //       <BlogPage />
      //     </Suspense>)
      //   ),
      //   loader: () => import('./pages/Blog').then(module => module.loader())
      // },
      // {
      //   path: 'posts/:id', element: (
      //     (<Suspense fallback={<p>Loading ... </p>}>
      //       <PostPage />
      //     </Suspense>)
      //   ),
      //   loader: (args: any) => import('./pages/Post').then(module => module.loader(args))
      // }
    ]
  }
])


function App() {

  return <RouterProvider router={routes} />
}

export default App
