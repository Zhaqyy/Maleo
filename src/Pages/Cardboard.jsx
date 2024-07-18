import { PContact, PHero, PModel, Pwrap } from "../Components/ProductPage";
import h1 from "/product/cb1.png";
import h2 from "/product/cb2.png";
import h3 from "/product/cb3.png";

const productData = {
  title: "CARTON",
  imageUrl: "/product/cardb.png",
  features: [
    {
      title: "déclinaisons",
      detail:
        "simple - double - triple cannelures, boite poste - papier kraft",
    },
  ],
  subtitle: "caisses américaines",
};

const pageTitle = "Types de cannelures";
const products = [
  { imageSrc: h1, title: "simple cannelures", linktext: "Citation" },
  { imageSrc: h2, title: "double cannelures", linktext: "Citation" },
  { imageSrc: h3, title: "triple cannelures", linktext: "Citation" }
];


const isMobile = window.innerWidth < 770;

const order = {
  PHeros: 0,
  PHeroe: 0.165,

  PModel1s: 0.175,
  PModel1e: 0.45,

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
  PHeroe: 0.169,

  PModel1s: 0.18,
  PModel1e: 0.4,

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


const Cardboard = () => {

  return (
    <>
    <Pwrap bgSequence={bgSequence} timeline={isMobile ? Mtimeline : timeline}>
      <PHero product={productData} />
      <PModel modelTitle={pageTitle} products={products} />
      <PHero
        product={{
          ...productData,
          title: "Carton personnalisé et sur mesure",
          subtitle: null,
        }}
      />
      <PContact products={products} />
      </Pwrap>
    </>
  );
};

export default Cardboard;
