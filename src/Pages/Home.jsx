/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import "../Style/Home/Home.css";
import React, { lazy, useLayoutEffect } from "react";
import "../Style/Component/Component.css";
import { BlogSec } from "../HomeComponents/HomeBlogSection.jsx";
import { blogData } from "../Pages/Blog/blogData.js";


const Hero = lazy(() => import("../HomeComponents/Hero.jsx"));

const ScaleSection = lazy(() =>
  import("../HomeComponents/Scale.jsx").then((module) => ({
    default: module.ScaleSection,
  }))
);
// const Vid = lazy(() =>
//   import("../HomeComponents/Scale.jsx").then((module) => ({
//     default: module.Vid,
//   }))
// );
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


export default function Home() {

  return (
    <>
        <Hero />
        <ScaleSection />
        {/* <Vid /> */}
        <Product />
        <BlogSec posts={blogData} />
        <LogoDisp />
    </>
  );
}
