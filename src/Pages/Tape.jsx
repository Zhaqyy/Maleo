import { useLayoutEffect } from "react";
import {
  PContact,
  PHero,
  PModel,
  PModel2,
  PTable,
  Pwrap,
} from "../Components/ProductPage";
import h1 from "/product/ts1.png";
import h2 from "/product/ts2.png";
import h3 from "/product/ts3.png";
import h4 from "/product/ts4.png";

import p1 from "/product/tc1.png";
import p2 from "/product/tc2.png";
import p3 from "/product/tc3.png";

import m1 from "/product/tm1.png";
import m2 from "/product/tm2.png";
import m3 from "/product/tm3.png";
import m4 from "/product/tm4.png";
import m5 from "/product/tm5.png";

const productData = {
  title: "BANDE",
  imageUrl: "/product/tape.png",
  features: [
    {
      title: "déclinaisons",
      detail:
        "PVC, Polypropylène Acrylique, hot melt, solvant, solvant, papier kraft, masking",
    },
    {
      title: "couleur",
      detail: "transparent - havane - blanc - autres couleurs",
    },
    {
      title: "DIMENSIONS",
      detail: "largeur 48 - 75mm / longueur 66 - 100 - 1000m",
    },
    {
      title: "conditionnement",
      detail: "36 rouleaux / carton - palette de 2160 rouleaux",
    },
    {
      title: "dévidoirs",
      detail: "plastique - acier",
    },
  ],
  subtitle: "Ruban adhésif neutre & imprimé",
};

const pageTitle = "TAILLE DE LA BANDE";
const pageTitle2 = "MODÈLE DE BANDE";
const products = [
  { imageSrc: h1, title: "12 mm", linktext: "Citation" },
  { imageSrc: h2, title: "19 mm", linktext: "Citation" },
  { imageSrc: h3, title: "50 mm", linktext: "Citation" },
  { imageSrc: h4, title: "75 mm", linktext: "Citation" },
];
const products2 = [
  { imageSrc: p1, title: "transparent", linktext: "Citation" },
  { imageSrc: p2, title: "Havane", linktext: "Citation" },
  { imageSrc: p3, title: "white", linktext: "Citation" },
];
const products3 = [
  { imageSrc: m1, title: "PP solvant    25-28-32m", linktext: "Citation" },
  { imageSrc: m2, title: "PP acrylique 25-28-32-35m", linktext: "Citation" },
  { imageSrc: m3, title: "PP hot melt 25-28m", linktext: "Citation" },
  { imageSrc: m4, title: "Pvc 33m", linktext: "Citation" },
  { imageSrc: m5, title: "papier kraft", linktext: "Citation" },
];

const isMobile = window.innerWidth < 770;

const order = {
  PHeros: 0,
  PHeroe: 0.1,

  PModel1s: 0.2,
  PModel1e: 0.25,

  PModel2s: 0.26,
  PModel2e: 0.39,

  PModel3s: 0.46,

  PContacte: 0.825,

  end: 0.9,
};

const timeline = [
  order.PHeros,
  order.PHeroe,
  order.PModel1s,
  order.PModel1e,
  order.PModel2s,
  order.PModel2e,

  order.PModel3s,
  order.PContacte,
  order.end,
];

const Morder = {
  PHeros: 0,
  PHeroe: 0.145,

  PModel1s: 0.16,
  PModel1e: 0.26,

  PModel2s: 0.27,
  PModel2e: 0.345,

  PModel3s: 0.51,

  PContacte: 0.76,

  end: 1,
};

const Mtimeline = [
  Morder.PHeros,
  Morder.PHeroe,
  Morder.PModel1s,
  Morder.PModel1e,
  Morder.PModel2s,
  Morder.PModel2e,

  Morder.PModel3s,
  Morder.PContacte,
  Morder.end,
];

const bgSequence = [
  `var(--bg-white)`,
  `var(--bg-white)`,

  `var(--bg-black)`,
  `var(--bg-black)`,

  `var(--bg-white)`,
  `var(--bg-white)`,

  `var(--bg-black)`,

  `var(--bg-black)`,

  `var(--bg-white)`,
];

const Tape = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Pwrap bgSequence={bgSequence} timeline={isMobile ? Mtimeline : timeline}>
        <PHero product={productData} theme={"light"} />

        <PModel modelTitle={pageTitle} products={products} theme={"dark"} />
        <PModel2 modelTitle={pageTitle2} products={products2} theme={"light"} />
        <PModel2
          modelTitle={pageTitle2}
          products={products3}
          model={false}
          theme={"dark"}
        />
        <PHero
          product={{
            ...productData,
            title: "personnalize BANDE",
            subtitle: null,
            imageUrl: "/product/tape2.png",
          }}
          theme="dark"
        />
        <PContact products={products3} products2={products2} theme="dark" />
        <PTable product={productData} set="tape" />
      </Pwrap>
    </>
  );
};

export default Tape;
