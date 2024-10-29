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
const Hero = ({ slice }: HeroProps): JSX.Element => {

  return (

    <section className={styles.hero}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.imageContainer}>
        <PrismicNextImage field={slice.primary.hero_image} className={styles.image} />
        <div className={`${styles.textContainer}`}>
          <h2>{slice.primary.header}</h2>
          <div className={styles.bodyContainer}>
            <p>{slice.primary.body_text}</p>
            <PrismicNextLink field={slice.primary.link_url} className={`yellowBtn`}>
              {slice.primary.link_label}
            </PrismicNextLink>
          </div>
          {/* <div className={styles.buttonContainer}>
          </div> */}
        </div>
      </div>



    </section>

  );
};

export default Hero;
