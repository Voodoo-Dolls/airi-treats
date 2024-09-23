import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductDetails`.
 */
export type ProductDetailsProps =
  SliceComponentProps<Content.ProductDetailsSlice>;

/**
 * Component for "ProductDetails" Slices.
 */
const ProductDetails = ({ slice }: ProductDetailsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for product_details (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProductDetails;
