import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import { Login, Protected, SignUp } from './components/index.js'
import AllPosts from "./Pages/AllPosts.jsx"
import AddPost from "./Pages/AddPost.jsx"
import EditPost from "./Pages/EditPost.jsx"
import Post from "./Pages/Post.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: '/login',
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      }, {
        path: '/signup',
        element: (
          <Protected authentication={false}>
            <SignUp />
          </Protected>
        )
      }, {
        path: "/all-posts",
        element: (
          <Protected authentication>
            {" "}
            <AllPosts />
          </Protected>
        )
      },
      {
        path: "/add-post",
        element: (
          <Protected authentication>
            {" "}
            <AddPost />
          </Protected>
        )
      }, {
        path: '/edit-post/:slug',
        element: (
          <Protected authentication>
            {" "}
            <EditPost />
          </Protected>
        )
      },
      {
        path: '/post/:slug',
        element: <Post />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
