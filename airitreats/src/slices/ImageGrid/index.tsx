import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./ImageGrid.module.scss"

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
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
      <div className={`container ${styles.cardContainer}`}>
        <h2>{slice.primary.section_title}</h2>
        {slice.primary.repeatable_card.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imgContainer}>
              {/* card image */}
              <PrismicNextImage field={item.image_card} className={styles.img} />
            </div>
            {/* card title */}
            <h3 className={styles.cardTitle}>{item.heading}</h3>
            {/* card content */}
            <p className={styles.cardContent}>{item.body_text}</p>
            <p className={styles.catLink}><PrismicNextLink field={item.category_link}>
              {item.category_link_label}
            </PrismicNextLink></p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ImageGrid;
