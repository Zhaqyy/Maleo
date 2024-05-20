import { useLayoutEffect } from "react";
import { PContact, PHero, PModel, PTable } from "../Components/ProductPage";
import h1 from "/product/Fh1.png";
import h2 from "/product/Fh2.png";
import h3 from "/product/Fh3.png";
import h4 from "/product/Fh4.png";

const productData = {
  title: "Cardboard",
  imageUrl: "/feui.png",
  features: [
    {
      title: "déclinaisons",
      detail:
        "simple - double - triple cannelures, boite poste - papier kraft",
    },
  ],
  subtitle: "caisses américaines",
};

const pageTitle = "Model of the cardboard";
const products = [
  { imageSrc: h1, title: "acier", link: "#", linktext: "Citation" },
  { imageSrc: h2, title: "polypropylene", link: "#", linktext: "Citation" },
  { imageSrc: h3, title: "textile", link: "#", linktext: "Citation" },
  { imageSrc: h4, title: "Polyester", link: "#", linktext: "Citation" },
];

const Cardboard = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PHero product={productData} />
      <PModel modelTitle={pageTitle} products={products} />
      <PTable />
      <PHero
        product={{
          ...productData,
          title: "personnalize Cardboard",
          subtitle: null,
        }}
      />
      <PContact products={products} />
    </>
  );
};

export default Cardboard;
