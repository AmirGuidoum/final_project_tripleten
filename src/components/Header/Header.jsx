import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import newsexplorer from "../../assets/newsexplorer.svg";
import newsexplorerblack from "../../assets/newsexplorerblack.svg";
import logoutwhite from "../../assets/logoutwhite.svg";
import logoutblack from "../../assets/logoutblack.svg";

import menu from "../../assets/menu.svg";
import { useLocation } from "react-router-dom";

import "./Header.css";

function Header({
  isLoggedIn,
  userName,
  handleAddClickLogIn,
  handleLogout,
  handlenavigationmodal,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-news";
  return (
    <header className="header">
      <button
        className={
          isSavedPage
            ? "header__menu header__menu_saved-articles"
            : "header__menu"
        }
        onClick={handlenavigationmodal}
      ></button>
      <div
        className={
          isSavedPage
            ? "header__container header__container_signedin-page"
            : "header__container"
        }
      >
        <img
          className="header__logo"
          src={isSavedPage ? newsexplorerblack : newsexplorer}
          alt="Logo"
        />

        <nav className="header__auth-buttons">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header__home ${isSavedPage ? "header__link_black" : ""} ${
                isActive
                  ? isSavedPage
                    ? "header__link_active-black"
                    : "header__link_active-white"
                  : ""
              }`
            }
          >
            Home
          </NavLink>

          {isLoggedIn ? (
            <>
              <NavLink
                to="/saved-news"
                className={({ isActive }) =>
                  `header__saved ${isSavedPage ? "header__link_black" : ""} ${
                    isActive
                      ? isSavedPage
                        ? "header__link_active-black"
                        : "header__link_active-white"
                      : ""
                  }`
                }
              >
                Saved articles
              </NavLink>
              <button
                onClick={handleLogout}
                type="button"
                className="header__user"
              >
                {userName}
                <img
                  src={isSavedPage ? logoutblack : logoutwhite}
                  alt="log out"
                />
              </button>
            </>
          ) : (
            <button
              onClick={handleAddClickLogIn}
              type="button"
              className="header__signin"
            >
              Sign in
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
