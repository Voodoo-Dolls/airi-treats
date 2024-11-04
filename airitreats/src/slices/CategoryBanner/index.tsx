import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

// imports
import styles from "./CategoryBanner.module.scss";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `CategoryBanner`.
 */
export type CategoryBannerProps =
  SliceComponentProps<Content.CategoryBannerSlice>;

/**
 * Component for "CategoryBanner" Slices.
 */
const CategoryBanner = ({ slice }: CategoryBannerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <PrismicNextImage field={slice.primary.banner_image} />
      </div>
      
      <h2>
        {slice.primary.heading}
      </h2>

      <p>
        {slice.primary.description}
      </p>

    </section>
  );
};

export default CategoryBanner;
