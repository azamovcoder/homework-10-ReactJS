import "./adminTop.scss";

import React, { useState } from "react";

import btnimg from "../../assets/img/btn.svg";

const AdminTop = ({ title }) => {
  return (
    <div className="menu_container">
      <div className="menu">
        <h2 className="title">{title}</h2>
        <div className="menu__btns">
          <div className="menu__btn">
            <img src={btnimg} alt="" />
          </div>
          <button className="menu__add__btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AdminTop;
