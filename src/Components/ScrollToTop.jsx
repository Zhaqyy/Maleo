import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
 function scroll() {
   window.scrollTo({ top:0, left:0, behavior: "instant" });
 }

  useLayoutEffect(() => {
   scroll()
  }, [pathname]);

  return null;
}