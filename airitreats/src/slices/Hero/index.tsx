import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./Hero.module.scss"
import { headerFont } from "@/app/layout";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (

    <section className={styles.hero}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.imageContainer}>
        <PrismicNextImage field={slice.primary.hero_image} className={styles.image} />
      </div>
      <div className={`container ${styles.textContainer}`}>
        <div>
          <h2 className={`${headerFont.className} ${styles.header}`}>
            {slice.primary.header[0].text}
          </h2>
          <PrismicRichText field={slice.primary.body_text} />
          <PrismicNextLink field={slice.primary.link_url}>
            {slice.primary.link_label}
          </PrismicNextLink>
        </div>
      </div>
    </section>

  );
};

export default Hero;
