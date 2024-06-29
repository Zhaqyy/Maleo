/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useInView, motion } from "framer-motion";
import "../Style/Component/Component.css";
import { useRef } from "react";
import { Swiper } from "./swiper";

const isMobile = window.innerWidth < 770;

export const ProductList = ({ products }) => {

  return (
    <Swiper products={products} variant={1} />
  );
};


export const ProductList2 = ({ products }) => {
 
  return (
    <Swiper products={products} variant={2} />

  );
};


export const ProductList3 = ({ products }) => {
 
  return (
    <Swiper products={products} variant={3} />

  );
};
