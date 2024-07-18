import { PContact, PHero, PModel, PTable, Pwrap } from "../Components/ProductPage";
import h1 from "/product/Fh1.png";
import h2 from "/product/Fh2.png";
import h3 from "/product/Fh3.png";
import h4 from "/product/Fh4.png";

const productData = {
  title: "Feuillard",
  imageUrl: "/product/feui.png",
  features: [
    {
      title: "déclinaisons",
      detail:
        "acier (ow - rw) plastique (polyester - polypropylène) textile (fil à fil - composite - tissé)",
    },
  ],
  subtitle: "Feuillard",
};

const pageTitle = "Type de feuillard";
const products = [
  { imageSrc: h1, title: "acier", linktext: "Citation" },
  { imageSrc: h2, title: "Polypropylène", linktext: "Citation" },
  { imageSrc: h3, title: "textile", linktext: "Citation" },
  { imageSrc: h4, title: "Polyester", linktext: "Citation" },
];


const isMobile = window.innerWidth < 770;

const order = {
  PHeros: 0,
  PHeroe: 0.145,

  PModel1s: 0.155,
  PModel1e: 0.345,

  PHero2s: 0.56,
  end: 1,
};

const timeline = [
  order.PHeros,
  order.PHeroe,
  order.PModel1s,
  order.PModel1e,

  order.PHero2s,

  order.end,
];

const Morder = {
  PHeros: 0,
  PHeroe: 0.15,

  PModel1s: 0.16,
  PModel1e: 0.295,

  PHero2s: 0.65,
  end: 1,
};

const Mtimeline = [
  Morder.PHeros,
  Morder.PHeroe,

  Morder.PModel1s,
  Morder.PModel1e,
 
  Morder.PHero2s,

  Morder.end,
];

const bgSequence = [
  `var(--bg-white)`,
  `var(--bg-white)`,

  `var(--bg-black)`,
  `var(--bg-black)`,

  `var(--bg-white)`,

  `var(--bg-white)`,
];


const Feuillard = () => {

  return (
    <>
    <Pwrap bgSequence={bgSequence} timeline={isMobile ? Mtimeline : timeline}>

      <PHero product={productData} />
      <PModel modelTitle={pageTitle} products={products} />
      <PTable product={productData}  set="feuillard" />
      <PHero
        product={{
          ...productData,
          title: "Feuillards personnalisés",
          subtitle: null,
        }}
      />
      <PContact products={products} />
      </Pwrap>
    </>
  );
};

export default Feuillard;
