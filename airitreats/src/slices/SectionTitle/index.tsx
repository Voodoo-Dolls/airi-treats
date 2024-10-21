import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./SectionTitle.module.scss"
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
        <h2 className={styles.title}>{slice.primary.title}</h2>
        <div className={`${styles.description}`}>
          <p>{slice.primary.description}</p>
        </div>
        <div>
          {slice.primary.list.map((item) => (
            <p>{item.bulletlist}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;
