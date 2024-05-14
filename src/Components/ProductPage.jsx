/* eslint-disable react/prop-types */

import "../Style/ProductPage.css";
import { ProductList } from "./Common";


// const ProductsPage = ({ product, products }) => {
//   const { title, imageUrl, features, subtitle } = product;

//   return (
//     <>
//       <PHero title={title} imageUrl={imageUrl} features={features} subtitle={subtitle} />
//       <PModel modelTitle={title} products={products} />
//     </>
//   );
// };

// export default ProductsPage;

export const PHero = ({ product }) => {
  const { title, imageUrl, features, subtitle } = product;
  return (
    <section className="prodHero">
      <h1 className="hollow">{title}</h1>
      <div className="pInfo">
        <div>
          <img src={imageUrl} alt={title} />
        </div>
        <div className="pFeature">
          <ul>
            {features && features.map((feature, index) => (
              <li key={index}>
                <h5>{feature.title}</h5>
                <h6>{feature.detail}</h6>
              </li>
            ))}
          </ul>
          <h3>{subtitle}</h3>
        </div>
      </div>
    </section>
  );
};

export const PModel = ({ modelTitle, products }) => {
  return (
    <section className="pModel">
      <div className="pModelHeader">
        <h1 className="pModelTitle hollow">{modelTitle}</h1>
      </div>
      <div className="pModelContent">
        <ProductList products={products} />
      </div>
    </section>
  );
};
