import "./sidebar.scss";

import { FaProductHunt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { PiUsersThreeLight } from "react-icons/pi";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <h2>Dashboard</h2>
      </div>
      <ul className="sidebar__collection">
        <li className="sidebar__item">
          <NavLink className={"sidebar__link "} to={"products"}>
            <FaProductHunt />
            <span>Products</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"users"}>
            <PiUsersThreeLight />
            <span>Users</span>
          </NavLink>
        </li>
      </ul>
      <button className="logout" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
