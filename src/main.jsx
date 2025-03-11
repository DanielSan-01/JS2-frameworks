import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ProductOverview, SpecificProduct, Contact, Cart, Checkout } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <ProductOverview />,
      },
      {
        path: 'shop',
        element: <ProductOverview />,
      },
      {
        path: 'shop/:id',
        element: <SpecificProduct />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)