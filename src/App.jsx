/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Overlay from "./Components/Overlay";
import { AnimatePresence } from "framer-motion";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

//PAGES
const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Header />
          <Overlay />
          <AnimatePresence mode="wait">
            <Routes>
              <Route index exact path="/" element={<Home />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </Suspense>
      </BrowserRouter>
      {/* <Route component={NotFound} /> */}
    </>
  );
}

export default App;
