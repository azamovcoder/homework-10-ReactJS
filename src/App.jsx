import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";

import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import { Fragment } from "react";
import Login from "./pages/login/Login";
import Products from "./pages/admin/products/Products";
import React from "react";
import { ToastContainer } from "react-toastify";
import Users from "./pages/admin/users/Users";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="products" element={<Products />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
