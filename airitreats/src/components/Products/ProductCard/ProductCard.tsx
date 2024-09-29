import Image from "next/image"
import styles from "./ProductCard.module.scss"
import { headerFont } from "@/app/layout"
import Link from "next/link"



export default function ProductCard({ product }) {
    const { product_id, product_name, product_price, product_description, main_image } = product.data.slices[0].primary
    const { category } = product.data


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.bannerImage}>
                    <Image src={main_image.url} fill alt="" />
                </div>
                <h1 className={`${headerFont.className} ${styles.h1}`}>{product_name}</h1>
                <p className={styles.p}>${product_price.toFixed(2)}</p>
            </div>
            <div className={styles.buttonWrapper}>
                <Link href={`/products/${category}/${product_id}`}>
                    <button className={`${styles.btn} ${styles.outline}`}>DETAILS</button>
                </Link>
                <button className={`${styles.btn} ${styles.fill} snipcart-add-item`}
                    data-item-id={product_id}
                    data-item-price={product_price}
                    data-item-url={`/products/${category}/${product_id}`}
                    data-item-description={product_description}
                    data-item-image={main_image.url}
                    data-item-name={product_name}
                >ADD TO CART</button>
            </div>
        </div >

    )
}
