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
const Cardboard = lazy(() => import("./Pages/Cardboard"));

function App() {
  const location = useLocation();

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
  const isMobile = window.innerWidth < 770;
  // fallback={
  //   !isMobile && (
  //     <div
  //       style={{
  //         position: "fixed",
  //         top: 0,
  //         left: 0,
  //         width: "100vw",
  //         height: "100vh",
  //         backgroundColor: "black",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         zIndex: 9999,
  //       }}
  //     >
  //       <img src={logo} loading="eager" alt="Loading..." />
  //     </div>
  //   )
  // }

  return (
    <>
      <Suspense
        fallback={
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
            <img src={logo} loading="eager" alt="Loading..." />
          </div>
        }
      >
        <Header key="head" />
        <Overlay key="over" />
        <AnimatePresence mode="wait">
          {/* <motion.div
            key="slideIn"
            className="slideIn"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={transitionSpringPhysics}
          ></motion.div>

          <motion.div
            key="slideout"
            className="slideOut"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={transitionSpringPhysics2}
          /> */}

          <Routes location={location} key={location.pathname}>
            <Route index exact path="/" element={<Home key="home" />} />
            <Route path="/contact" element={<Contact key="contact" />} />
            <Route path="/feuillard" element={<Feuillard key="feuillard" />} />
            <Route path="/cardboard" element={<Cardboard key="cardboard" />} />
          </Routes>
        </AnimatePresence>
        <Footer key="foot" />
      </Suspense>
    </>
  );
}

export default App;
