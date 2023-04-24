import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';




const router = createBrowserRouter([

  {path: '/', element: <RootLayout/>}
  
  ]);


const App = () => {
 
 return <RouterProvider router={router}/>;
};

export default App;
