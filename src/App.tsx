import React from 'react';
import { Cart } from './Components/Cart';
import './App.css';
import { HomePage } from './Components/HomePage';
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { ContextProvider } from './Components/CartContext';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<HomePage />
    },
    {
      path:'/cart',
      element:<Cart/>
    }
  ])
  return (
    <div className="App">
      <ContextProvider>
      <RouterProvider router={router} />
      
      </ContextProvider>
      
    </div>
  );
}

export default App;
