// import React from 'react'
import "../Style/Component/Component.css";


const Overlay = () => {
  return (
    <aside>
      <span className="over-cont">
        <p><span><a href="/Contact"  onClick="lenis.scrollTo('/Contact')">Instagram</a></span> X <span><a href="/Contact"  onClick="lenis.scrollTo('/Contact')">Contact</a></span></p>
      </span>
      <span className="over-scroll">
        <p><a href="#product"  onClick='scrollTo(#product)'>descendre</a></p>
      </span>
    </aside>
  );
};

export default Overlay;
