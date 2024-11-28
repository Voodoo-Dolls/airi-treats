import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./Hero.module.scss"
import { headerFont } from "@/app/fonts";
// import { headerFont } from "@/app/layout";

/**
 * Props for `Hero`.
 */


export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: any): JSX.Element => {

  return (

    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.hero}>
        <link rel="preload" as="image" href="/images/hero.webp" />
        <div className="container">
          <div className={`${styles.textContainer}`}>
            <h2>{slice.primary.header}</h2>
            <p>{slice.primary.body_text}</p>
            <PrismicNextLink field={slice.primary.link_url} className={`yellowBtn`}>
              {slice.primary.link_label}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;
