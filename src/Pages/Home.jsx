/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import "../Style/Home/Home.css";
import React, { lazy, useLayoutEffect } from "react";
import "../Style/Component/Component.css";
import { BlogSec } from "../Components/Common";
import h1 from "/h1.png";
import h2 from "/h2.png";
import h3 from "/h3.png";

const Hero = lazy(() => import("../HomeComponents/Hero.jsx"));

const ScaleSection = lazy(() =>
  import("../HomeComponents/Scale.jsx").then((module) => ({
    default: module.ScaleSection,
  }))
);
const Vid = lazy(() =>
  import("../HomeComponents/Scale.jsx").then((module) => ({
    default: module.Vid,
  }))
);
const Product = lazy(() =>
  import("../HomeComponents/Product.jsx").then((module) => ({
    default: module.Product,
  }))
);
const LogoDisp = lazy(() =>
  import("../HomeComponents/Product.jsx").then((module) => ({
    default: module.LogoDisp,
  }))
);

const blogPosts = [
  {
    date: "April 1, 2024",
    category: "Category",
    imgSrc: h1,
    link: null,
    title:
      "Environmental impact of packaging: Strategies to reduce waste and promote sustainability",
  },
  {
    date: "April 5, 2024",
    category: "Category",
    imgSrc: h2,
    link: null,
    title: "10 tips for safe and efficient packaging",
  },
  {
    date: "April 7, 2024",
    category: "Category",
    imgSrc: h3,
    link: null,
    title: "How to Choose the Right Masking Tape for Your Packaging Needs",
  },
  // Add more blog post objects as needed
];

export default function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Hero />
        <ScaleSection />
        <Vid />
        <Product />
        <BlogSec posts={blogPosts} />
        <LogoDisp />
    </>
  );
}
