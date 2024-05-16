/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";

import Overlay from "./Components/Overlay";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Transition from "./Components/Transition";
import TransContact from "./Pages/Contact";
import logo from "/flogo.svg";
// import logo from "/logowhite.png";

//PAGES
const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));
const Feuillard = lazy(() => import("./Pages/Feuillard"));

// const THome =  Transition(Home);
// // const TContact = Transition(Contact);
// const TFeuillard = Transition(Feuillard);

function App() {
  const location = useLocation();

  const transitionSpringPhysics = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
    duration: 2,
    delay: 1,
  };
  const transitionSpringPhysics2 = {
    type: "spring",
    mass: 0.5,
    stiffness: 80,
    damping: 20,
    duration: 2,
  };

  return (
    <>
      <Suspense>
        <Header />
        <Overlay />
        <AnimatePresence mode="wait" >
          <motion.div
            className="slideIn"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={transitionSpringPhysics}
          >
            <img src={logo} />
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
      {/* <Route component={NotFound} /> */}
    </>
  );
}

export default App;
