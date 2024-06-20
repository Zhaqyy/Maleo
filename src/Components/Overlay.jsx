// import React from 'react'
import "../Style/Component/Component.css";


const Overlay = () => {
// const  scrollpos = '#product' || '#contact-form'
  return (
    <aside>
      <span className="over-cont">
        <p><span><a href="/Contact">Instagram</a></span> X <span><a href="/Contact">Contact</a></span></p>
      </span>
      <span className="over-scroll">
        <p><a href={'#footer'}
        //  onClick={Lenis.scrollTo("#product")}
         >descendre</a></p>
      </span>
    </aside>
  );
};

export default Overlay;
