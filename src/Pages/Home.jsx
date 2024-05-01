/* eslint-disable no-unused-vars */
import Scene from "../Scene/Scene";
import "../Style/Home/Home.css";
import logo from '/logodark.png'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-head">
          <h1 className="hollow">
            QUALITY
            <br />
            PACKAGING
            <br />
            TO
          </h1>
          <video autoPlay loop muted playsInline>
            <source src="hero.webm" type="video/webm" />
            <source src="hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-cta">
          <h3>
            PROTECT
            <br />
            YOUR
            <br />
            PRODUCTS
          </h3>
          <button>QUOTE NOW</button>
        </div>
        <img src={logo} />
      </section>
      <section id="canvasWrapper">
        <Scene/>
      </section>
    </>
  );
}
