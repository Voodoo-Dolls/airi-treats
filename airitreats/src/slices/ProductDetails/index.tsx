import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ProductDetailsComponent from "@/components/Products/ProductDetails/ProductDetails";

/**
 * Props for `ProductDetails`.
 */
export type ProductDetailsProps =
  SliceComponentProps<Content.ProductDetailsSlice>;

/**
 * Component for "ProductDetails" Slices.
 */
const ProductDetails = ({ slice }: ProductDetailsProps): JSX.Element => {
  const { product_name, product_price, product_description, main_image } = slice.primary
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`container`}
    >
      <ProductDetailsComponent productData={slice.primary} />
    </section>
  );
};

export default ProductDetails;
