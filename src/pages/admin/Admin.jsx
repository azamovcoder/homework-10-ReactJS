import "./admin.scss";

import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "../../components/sidebar";

const Admin = () => {
  return (
    <div className="admin ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Admin;
