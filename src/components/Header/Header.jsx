import React from "react";
import { Link } from "react-router-dom";
import newsexplorer from "../../assets/newsexplorer.svg";
import "./Header.css";
function Header({ handleAddClickLogIn }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={newsexplorer} alt="Logo" />
        </Link>
        <div className="header__auth-buttons">
          <button type="button" className="header__home">
            Home
          </button>
          <button
            onClick={handleAddClickLogIn}
            type="button"
            className="header__signin"
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
