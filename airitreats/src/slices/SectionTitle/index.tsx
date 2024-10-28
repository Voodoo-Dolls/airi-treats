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
    >
      <div className={styles.container}>
        <div className={styles.introWrapper}>
          <h2 className={styles.title}>{slice.primary.title}</h2>
          <div className={styles.description}>
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        <div className={styles.paragraphList}>
          <p>{slice.primary.list_intro}</p>
          {slice.primary.list.map((item) => (
            <p>{item.bulletlist}</p>
          ))}
        </div>
        <div className={styles.freezeDry}>
          <h3><PrismicRichText field={slice.primary.paragraph_title} /></h3>
        </div>
        <div className={styles.freezeDryDesc}>
          <p>{slice.primary.paragraph}</p>
        </div>
        <div className={styles.imgContainer}>
          <PrismicNextImage field={slice.primary.image} />
        </div>
        <div className={styles.paragraph2}>
          <p>{slice.primary.paragraph2}</p>
        </div>
        <div className={styles.paragraph3}>
          <PrismicRichText field={slice.primary.paragraph3} />
        </div>
        <div className={styles.closingWrapper}>
          <div className={styles.closingParagraph}><PrismicRichText field={slice.primary.closing_paragraph} /></div>
          <div className={styles.closingButton}>
            ButtonHere
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;
