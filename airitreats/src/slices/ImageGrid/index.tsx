import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./ImageGrid.module.scss"

import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `ImageGrid`.
 */
export type ImageGridProps = SliceComponentProps<Content.ImageGridSlice>;

/**
 * Component for "ImageGrid" Slices.
 */
const ImageGrid = ({ slice }: ImageGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <div className={`contianer ${styles.cardContainer}`}>
        <h2>{slice.primary.section_title}</h2>
        {slice.primary.repeatable_card.map((item) => (
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <PrismicNextImage field={item.image_card} className={styles.img} />
            </div>
            <h3>{item.heading}</h3>
            <p>{item.body_text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
