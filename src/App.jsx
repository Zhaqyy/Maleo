/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import Overlay from "./Components/Overlay";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import logo from "/flogo.svg";
import "./App.css";

//PAGES
const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));
const Who = lazy(() => import("./Pages/Who"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const BlogPost = lazy(() => import("./Pages/Blog/BlogPost"));
const Feuillard = lazy(() => import("./Pages/Feuillard"));
const Cardboard = lazy(() => import("./Pages/Cardboard"));
const Sfilm = lazy(() => import("./Pages/Sfilm"));
const Tape = lazy(() => import("./Pages/Tape"));
const Privacy = lazy(() => import("./Pages/Privacy"));
const Terms = lazy(() => import("./Pages/Terms"));


function debounce(fn, ms) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const breakpoints = [500 ,770, 900, 1100, 1650, 2000]; // Define your breakpoints here

const useResizeRefresh = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      const newWidth = window.innerWidth;
      const crossedBreakpoint = breakpoints.some(
        (bp) => (windowWidth < bp && newWidth >= bp) || (windowWidth >= bp && newWidth < bp)
      );

      if (crossedBreakpoint) {
        window.location.reload();
      }

      setWindowWidth(newWidth);
    }, 1000);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return null;
};


function App() {
  const location = useLocation();
  useResizeRefresh();

  const isMobile = window.innerWidth < 770;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      syncTouch: true,

    })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  }, [])

  return (
    <>
      <Suspense
      >
        <Header key="head" />
        <Overlay key="over" />
        <AnimatePresence mode="wait">

          <Routes location={location} key={location.pathname}>
            <Route index exact path="/" element={<Home key="home" />} />
            <Route path="/contact" element={<Contact key="contact" />} />
            <Route path="/who" element={<Who key="who" />} />
            <Route path="/blog" element={<Blog key="blog" />} />
            <Route path="/post/:id" element={<BlogPost key="blog Post" />} />
            <Route path="/feuillard" element={<Feuillard key="feuillard" />} />
            <Route path="/cardboard" element={<Cardboard key="cardboard" />} />
            <Route path="/sfilm" element={<Sfilm key="stretch film" />} />
            <Route path="/tape" element={<Tape key="Tape" />} />
            <Route path="/privacy" element={<Privacy key="Privacy" />} />
            <Route path="/terms" element={<Terms key="Terms" />} />
          </Routes>
        </AnimatePresence>
        <Footer key="foot" />
      </Suspense>
    </>
  );
}

export default App;
