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
      <div className={styles.imageContainer}>


        <PrismicNextImage
          field={slice.primary.banner_image}
          className={styles.banner}
          fill
          priority={true}
          sizes="100vw"
        />


        <div className={styles.desc}>
          <h2>
            {slice.primary.heading}
          </h2>
          <p>
            {slice.primary.description}
          </p>
        </div>
        {/* description ends */}

      </div>
      {/* banner ends */}

    </section>
  );
};

export default CategoryBanner;
