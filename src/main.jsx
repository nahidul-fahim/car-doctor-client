import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/router';
import AuthContext from './Context/AuthContext/AuthContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1140px] mx-auto'>
    <AuthContext>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthContext>
  </div>,
)