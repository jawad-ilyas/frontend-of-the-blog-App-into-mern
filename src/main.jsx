import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignIn, SignUp, Home } from './pages/index.js'

import Store from './store/Store.js'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Protected } from './components/index.js'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: (
            <Protected authentication={true}>
              <Home />
            </Protected>
          )
        },
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
const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={client_id}>
      <Provider store={Store}>
        <RouterProvider router={router} >
          <App />
        </RouterProvider>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
