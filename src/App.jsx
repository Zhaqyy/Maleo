/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useState, useEffect, useTransition } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// import Lenis from "lenis";
import { ReactLenis, useLenis } from 'lenis/react'
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
const Account = lazy(() => import("./Pages/Account"));

function debounce(fn, ms) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const breakpoints = [500, 770, 900, 1100, 1650, 2000]; // Define your breakpoints here

const useResizeRefresh = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      const newWidth = window.innerWidth;
      const crossedBreakpoint = breakpoints.some(
        (bp) =>
          (windowWidth < bp && newWidth >= bp) ||
          (windowWidth >= bp && newWidth < bp)
      );

      if (crossedBreakpoint) {
        window.location.reload();
      }

      setWindowWidth(newWidth);
    }, 1000);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return null;
};


function App() {
  const location = useLocation();
  useResizeRefresh();
  const [isPending, startTransition] = useTransition();
  const isMobile = window.innerWidth < 770;
  const lenis = useLenis(({ scroll, option={ duration: 1.8,
    syncTouch: true} }) => {
    // called every scroll
  })
 
  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense>
        <ReactLenis root>
          <Header />
          <Overlay />
          <Routes location={location} key={location.pathname} onChange={() => {
                startTransition(() => {
                  // trigger navigation update
                });
              }}>
            <Route index exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/who" element={<Who />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/feuillard" element={<Feuillard />} />
            <Route path="/cardboard" element={<Cardboard />} />
            <Route path="/sfilm" element={<Sfilm />} />
            <Route path="/tape" element={<Tape />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer />
          </ReactLenis>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
