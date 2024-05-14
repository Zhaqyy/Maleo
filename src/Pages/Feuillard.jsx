import { PContact, PHero, PModel, PTable } from "../Components/ProductPage";
import h1 from "/product/Fh1.png";
import h2 from "/product/Fh2.png";
import h3 from "/product/Fh3.png";
import h4 from "/product/Fh4.png";

const productData = {
  title: "Feuillard",
  imageUrl: "/feui.png",
  features: [
    {
      title: "déclinaisons",
      detail:
        "acier (ow - rw) plastique (polyester - polypropylène) textile (fil à fil - composite - tissé)",
    },
  ],
  subtitle: "Feuillard",
};

const pageTitle = "Model of the feuillard";
const products = [
  { imageSrc: h1, title: "acier", link: "#", linktext: "Citation" },
  { imageSrc: h2, title: "polypropylene", link: "#", linktext: "Citation" },
  { imageSrc: h3, title: "textile", link: "#", linktext: "Citation" },
  { imageSrc: h4, title: "Polyester", link: "#", linktext: "Citation" },
];

const Feuillard = () => {
  // return <ProductsPage product={productData} />;
  return (
    <>
      <PHero product={productData} />
      <PModel modelTitle={pageTitle} products={products} />
      <PTable />
      <PHero
        product={{
          ...productData,
          title: "personnalize Feuillard",
          subtitle: null,
        }}
      />
      <PContact products={products}/>
    </>
  );
};

export default Feuillard;
