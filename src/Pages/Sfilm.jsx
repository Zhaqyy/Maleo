import { useLayoutEffect } from "react";
import { PContact, PHero, PModel2, Pwrap } from "../Components/ProductPage";
import h1 from "/product/sf1.png";
import h2 from "/product/sf2.png";
import h3 from "/product/sf3.png";

import p1 from "/product/sfilm.png";
import p2 from "/product/sm2.png";

const productData = {
  title: "Film étirable",
  imageUrl: "/product/sfilm.png",
  features: [
    {
      title: "composition",
      detail:
        "film polyéthylène",
    },
    {
      title: "couleur",
      detail:
        "transparent - noir - blanc - autres - couleurs opaque",
    },
    {
      title: "DIMENSIONS",
      detail:
        "largeur 125 - 450MM / longueur 150m - 270M - 300M",
    },
    {
      title: "epaisseur",
      detail:
        "13-15-17-20-23-30",
    },
    {
      title: "conditionnement",
      detail:
        "6 bobines / carton - palette de 180 bobines",
    },
  ],
  subtitle: "Film Étirable MANUEL",
};

const pageTitle = "COULEUR DE LA Film étirable";
const pageTitle2 = "MODÈLE DE Film étirable";
const products = [
  { imageSrc: h1, title: "transparent", linktext: "Citation" },
  { imageSrc: h2, title: "noir", linktext: "Citation" },
  { imageSrc: h3, title: "blanc", linktext: "Citation" }
];
const products2 = [
  { imageSrc: p1, title: "MANUEL", linktext: "Citation" },
  { imageSrc: p2, title: "machine", linktext: "Citation" },
];


const isMobile = window.innerWidth < 770;

const order = {
  PHeros: 0,
  PHeroe: 0.145,

  PModel1s: 0.2,
  // PModel1e: 0.23,

  // PModel2s: 0.24,
  // PModel2e: 0.39,

  // PModel3s: 0.46,

  PContacte: 0.79,

  end: 1,
};

const timeline = [
  order.PHeros,
  order.PHeroe,
  order.PModel1s,
  // order.PModel1e,
  // order.PModel2s,
  // order.PModel2e,

  // order.PModel3s,
  order.PContacte,
  order.end,
];

const Morder = {
  PHeros: 0,
  PHeroe: 0.21,

  PModel1s: 0.25,
  // PModel1e: 0.24,

  // PModel2s: 0.25,
  // PModel2e: 0.445,

  // PModel3s: 0.51,

  PContacte: 0.84,

  end: 1,
};

const Mtimeline = [
  Morder.PHeros,
  Morder.PHeroe,
  Morder.PModel1s,
  // Morder.PModel1e,
  // Morder.PModel2s,
  // Morder.PModel2e,

  // Morder.PModel3s,
  Morder.PContacte,
  Morder.end,
];

const bgSequence = [
  `var(--bg-white)`,
  `var(--bg-white)`,

  `var(--bg-black)`,
  `var(--bg-black)`,

  // `var(--bg-white)`,
  // `var(--bg-white)`,

  // `var(--bg-black)`,

  `var(--bg-black)`,

  // `var(--bg-white)`,
];


const Sfilm = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Pwrap bgSequence={bgSequence} timeline={isMobile ? Mtimeline : timeline}>

      <PHero product={productData} />
      <PModel2 modelTitle={pageTitle} products={products} />
      <PModel2 modelTitle={pageTitle2} products={products2} />
      <PHero
        product={{
          ...productData,
          title: "personnalize Film étirable",
          subtitle: null,
          imageUrl: "/product/sfilm2.png",
        }}
        theme="dark"
      />
      <PContact products={products2} products2={products} theme="dark" />
      </Pwrap>
    </>
  );
};

export default Sfilm;
