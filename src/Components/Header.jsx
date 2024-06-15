import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";
import "../Style/Header.css";
// import logoW from "/logowhite.png"
import logoB from "/logoB.png";
import { ArrowBtn } from "./magnetBtn";
import { useMotionValueEvent, motion, useScroll } from "framer-motion";

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

  const parentVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-100%" },
  };

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
const [prevScroll, setPrevScroll] = useState(0);


function update(latest, prev) {
  if (latest < prev) {
    setHidden(false);
  } else if (latest > 100 && latest > prev) {
    setHidden(true);
  }
}

useMotionValueEvent(scrollY, "change", (latest) => {
  update(latest, prevScroll);
  setPrevScroll(latest);
});

  return (
    <motion.header className="header"
    variants={parentVariants}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.3,
        }}
    >
      <motion.nav
        className="nav container"
      >
        <NavLink to="/" className="nav__logo">
          <img src={logoB} alt="Logo" />
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/tape"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                BANDE
                {/* <Caret/> */}
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/cardboard"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                CARTON
                {/* <Caret/> */}
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/sfilm"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Film étirable
                {/* <Caret/> */}
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/feuillard"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Feuillard
                {/* <Caret/> */}
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/contact" className="nav__link nav__cta">
                Contactez-nous
                <ArrowBtn />
              </NavLink>
            </li>
          </ul>

          {/* Close */}
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
              />
            </svg>
          </div>
        </div>

        {/* Menu  */}
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="none"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
            />
          </svg>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;

export const Caret = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
