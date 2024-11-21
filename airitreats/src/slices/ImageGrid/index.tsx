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
      <div className={styles.sectionContainer}>
        <div className={styles.catTitleContainer}>
          <h2 className={styles.categoryTitle}>{slice.primary.section_title}</h2>
        </div>

        <div className={styles.card}>
          {slice.primary.repeatable_card.map((item, index) => (
            // repeatable card
            <div className={styles.cardContents} key={index}>
              <div className={styles.imgContainer}>
                {/* card image */}
                <PrismicNextImage field={item.image_card} className={styles.img} />
              </div>
              {/* card title */}
              <div className={styles.titleContainer}>
                <h3 className={styles.cardTitle}>{item.heading}</h3>
              </div>
              {/* card content */}
              <p className={styles.cardDescription}>{item.body_text}</p>
              <div className={styles.catLinkContainer}>
                <PrismicNextLink field={item.category_link} className="yellowBtn">
                  {item.category_link_label}
                </PrismicNextLink>
                {/* <p className={styles.catLink}><PrismicNextLink field={item.category_link}>
                  {item.category_link_label}
                </PrismicNextLink></p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ImageGrid;
