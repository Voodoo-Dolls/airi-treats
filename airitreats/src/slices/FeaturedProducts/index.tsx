import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ProductCard from "@/components/Products/ProductCard/ProductCard";

import styles from "./FeaturedProducts.module.scss"
import Slider from "@/components/Slider/Slider";

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
  let list = []
  slice.primary.product_list.map((item) => {
    list.push(item.product.uid)
  })
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
        <Slider list={list} />
      </div>
    </section >
  );
};

export default FeaturedProducts;
