import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ProductCard from "@/components/Products/ProductCard/ProductCard";

import styles from "./FeaturedProducts.module.scss"

/**
 * Props for `FeaturedProducts`.
 */
export type FeaturedProductsProps =
  SliceComponentProps<Content.FeaturedProductsSlice>;

/**
 * Component for "FeaturedProducts" Slices.
 */

// FeaturedProductsProps
const FeaturedProducts = ({ slice }: any): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <div className="container">
        <h2>
          {slice.primary.heading}
        </h2>
        <div className={styles.slider}>
          {slice.primary.product_list.map((item: { product: { uid: string; }; }) => {
            let uid = item.product.uid
            return (
              <ProductCard uid={uid} />
            )
          }
          )
          }
        </div>
      </div>
    </section >
  );
};

export default FeaturedProducts;
