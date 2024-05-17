/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Overlay from "./Components/Overlay";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import logo from "/flogo.svg";
import "./App.css";

//PAGES
const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));
const Feuillard = lazy(() => import("./Pages/Feuillard"));

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

  // useEffect(() => {
  //   window.scrollTo(0, 0); // Reset scroll position on route change
  // }, [location.pathname]);

  return (
    <>
      <Suspense fallback={
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <img src={logo} alt="Loading..." />
        </div>
      }>
        <Header />
        <Overlay />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname} // Ensure uniqueness
            className="slideIn"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={transitionSpringPhysics}
          >
            {/* <img src={logo} alt="Logo" /> */}
          </motion.div>

          <motion.div
            className="slideOut"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={transitionSpringPhysics2}
          />

          <Routes location={location} key={location.pathname}>
            <Route index exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feuillard" element={<Feuillard />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
