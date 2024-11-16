import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./SectionTitle.module.scss"
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `SectionTitle`.
 */
export type SectionTitleProps = SliceComponentProps<Content.SectionTitleSlice>;

/**
 * Component for "SectionTitle" Slices.
 */
const SectionTitle = ({ slice }: SectionTitleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.sectionContainer}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.introWrapper}>
          {/* .introWrapper contains title, description 1 and description 2 */}
          <h2 className={styles.title}>{slice.primary.title}</h2>
          <div className={styles.descriptionContainer}>
            <PrismicRichText field={slice.primary.description} />
            <PrismicRichText field={slice.primary.description_one} />
            <PrismicRichText field={slice.primary.description_two} />
          </div>
        </div>
        <div className={styles.pListContainer}>
          <div className={styles.paragraphList}>
            <p>{slice.primary.list_intro}</p>
            {slice.primary.list.map((item, index) => (
              <li key={index}>{item.bulletlist}</li>
            ))}
          </div>
        </div>
        <div className={styles.freezeDryContainer}>
          <div className={styles.freezeDryIntro}>
            <h3 className={styles.freezeDry}><PrismicRichText field={slice.primary.paragraph_title} /></h3>
            <div className={styles.freezeDryDesc}>
              <p>{slice.primary.paragraph}</p>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <p><PrismicNextImage field={slice.primary.image} /></p>
          </div>
        </div>
        <div className={styles.twoParaContainer}>
          <div className={styles.paragraph2}>
            <p>{slice.primary.paragraph2}</p>
          </div>
          <div className={styles.paragraph3}>
            <PrismicRichText field={slice.primary.paragraph3} />
          </div>
        </div>
        <div className={styles.closingWrapper}>
          <div className={styles.closingParagraph}><PrismicRichText field={slice.primary.closing_paragraph} /></div>
          <div className={styles.closingButton}>
            ButtonHere
          </div>
        </div>
      </div>
    </section >
  );
};

export default SectionTitle;
