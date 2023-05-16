import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/header/logo.png";
import icon1 from "../../assets/images/header/icon1.png";
import icon2 from "../../assets/images/header/icon2.png";
import icon3 from "../../assets/images/header/icon3.png";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__image">
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="header__navbar">
        <div className="navbar__list">
          <div className="navbar__item">
            <img
              className="icon1"
              src={icon1}
              alt="icon1"
            />
            {/* <span className="badge badge--red">
              <span>5</span>
            </span> */}
          </div>
          <div className="navbar__item">
            <img
              className="icon2"
              src={icon2}
              alt="icon2"
            />
          </div>
          <div className="navbar__item">
            <img
              className="icon3"
              src={icon3}
              alt="icon3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
