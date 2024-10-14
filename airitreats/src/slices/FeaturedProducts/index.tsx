import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import ProductCard from "@/components/Products/ProductCard/ProductCard";

/**
 * Props for `FeaturedProducts`.
 */
export type FeaturedProductsProps =
  SliceComponentProps<Content.FeaturedProductsSlice>;

/**
 * Component for "FeaturedProducts" Slices.
 */

// Make Product Call
const getProduct = async (id: string) => {
  const client = createClient()
  const data = await client.getByUID("product", id)
  console.log(data)
  return data
}
// FeaturedProductsProps
const FeaturedProducts = ({ slice }: any): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>
        {slice.primary.heading}
      </h2>
      {slice.primary.product_list.map((item: { product: { uid: string; }; }) => {
        let uid = item.product.uid
        getProduct(uid)
        // console.log(item)
        return (
          <p>Hello</p>
          // <ProductCard product={getProduct(uid)} />
        )
      }
      )
      }
    </section >
  );
};

export default FeaturedProducts;
