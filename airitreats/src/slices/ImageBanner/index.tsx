import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./ImageBanner.module.scss"


/**
 * Props for `ImageBanner`.
 */
export type ImageBannerProps = SliceComponentProps<Content.ImageBannerSlice>;

/**
 * Component for "ImageBanner" Slices.
 */
const ImageBanner = ({ slice }: ImageBannerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.microBanner}>
        <div className={styles.textContainer}>
          <h2>{slice.primary.heading}</h2>
          <p>{slice.primary.body}</p>
        </div>
        <PrismicNextImage field={slice.primary.banner_image} className={styles.banner} />
      </div>
    </section>
  );
};

export default ImageBanner;
