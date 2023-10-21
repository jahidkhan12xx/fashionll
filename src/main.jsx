import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import PublicRoutes from './Routes/Public/PublicRoutes'
import Provider from './Provider/Provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider>
   <RouterProvider router={PublicRoutes}></RouterProvider>
   </Provider>
  </React.StrictMode>,
)
