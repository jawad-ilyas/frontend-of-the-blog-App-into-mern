import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignIn, SignUp } from './pages/index.js'

import Store from './store/Store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "signin",
          element: <SignIn />
        },
        {
          path: "signup",
          element: <SignUp />
        },
      ]

    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
