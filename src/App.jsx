/* eslint-disable no-unused-vars */
import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Overlay from "./Components/Overlay";
import { AnimatePresence } from "framer-motion";

//PAGES
const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Overlay />
        <AnimatePresence mode="wait">
          <Routes>
            <Route index exact path="/" element={<Home />}/>

            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
      {/* <Route component={NotFound} /> */}
    </>
  );
}

export default App;
