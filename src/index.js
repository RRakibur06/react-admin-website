import React from 'react';
import ReactDOM from 'react-dom';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import List from './pages/List';
import Single from './pages/Single';
import New from './pages/New';
import Login from './pages/Login';
import { productInputs, userInputs } from './data';
import { DarkModeContextProvider } from "./context/darkModeContext";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="users">
        <Route index element={<List />} />
        <Route path=":userId" element={<Single />} />
        <Route
          path="new"
          element={<New inputs={userInputs} title="Add New User" />}
        />
      </Route>
      <Route path="products">
        <Route index element={<List />} />
        <Route path=":productId" element={<Single />} />
        <Route
          path="new"
          element={<New inputs={productInputs} title="Add New Product" />}
        />
      </Route>
    </Route>
))

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <RouterProvider router={router} />
    </DarkModeContextProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);