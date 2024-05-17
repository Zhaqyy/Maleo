/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Overlay from "./Components/Overlay";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import logo from "/flogo.svg";
import Home from "./Pages/Home.jsx";
import "./App.css";

//PAGES
// const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));
const Feuillard = lazy(() => import("./Pages/Feuillard"));

const isMobile = window.innerWidth < 770;
function App() {
  const location = useLocation();

  return (
    <>
      <Suspense
        fallback={
          !isMobile && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
              }}
            >
              <img src={logo} alt="Loading..." />
            </div>
          )
        }
      >
        <Header key="head" />
        <Overlay key="over" />
        <AnimatePresence mode="wait">
          <Transition />

          <Routes location={location} key={location.pathname}>
            <Route index exact path="/" element={<Home key="home" />} />
            <Route path="/contact" element={<Contact key="contact" />} />
            <Route path="/feuillard" element={<Feuillard key="feuillard" />} />
          </Routes>
        </AnimatePresence>
        <Footer key="foot" />
      </Suspense>
    </>
  );
}

export default App;

export const Transition = () => {
  const transitionSpringPhysics = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
    duration: 0.5,
    delay: 1,
  };
  const transitionSpringPhysics2 = {
    type: "spring",
    mass: 0.5,
    stiffness: 80,
    damping: 20,
    duration: 0.5,
  };

  return (
    <>
      <motion.div
        key="slideIn"
        className="slideIn"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={transitionSpringPhysics}
      >
        {/* <img src={logo} alt="Logo" /> */}
      </motion.div>

      <motion.div
        key="slideout"
        className="slideOut"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={transitionSpringPhysics2}
      />
    </>
  );
};
