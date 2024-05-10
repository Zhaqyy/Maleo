import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";
import "../Style/Header.css";
import logoW from "/logowhite.png"
import { ArrowBtn } from "./magnetBtn";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <img src={logoW} alt="" />
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Tape
                <Caret/>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/news"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Cardboard
                <Caret/>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about-us"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Stretch Film
                <Caret/>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/favorite"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Strapping
                <Caret/>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Contact" className="nav__link nav__cta">
                Contact Us
                <ArrowBtn/>
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            {/* <IoClose /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          {/* <IoMenu /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="none" strokeLinecap="round" strokeWidth="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/></svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;


export const Caret = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

  )
}
