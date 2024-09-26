import Image from "next/image"
import styles from "./ProductCard.module.scss"
import { headerFont } from "@/app/layout"



export default function ProductCard({ product }) {
    // console.log(product.data.slices[0].primary)
    const { product_id, product_name, product_price, product_description, main_image } = product.data.slices[0].primary
    console.log(product_id)
    // const title = data.product_name
    // const price = data.product_price
    // const desc = data.product_description
    // const id = data.product_id
    // // Come back and check to see if you can use prismic image component
    // const image = data.main_image.url


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.bannerImage}> </div>
                <h1 className={`${headerFont.className} ${styles.h1}`}>{product_name}</h1>
                <p className={styles.p}>${product_price.toFixed(2)}</p>
            </div>
            <div className={styles.buttonWrapper}>
                <button className={`${styles.btn} ${styles.outline}`}>DETAILS</button>
                <button className={`${styles.btn} ${styles.fill}`}>ADD TO CART</button>
            </div>
        </div >

        // <div className={styles.container}>
        //     <div className={styles.imageContainer}>
        //         <Image src={image} fill alt="" className={styles.image} sizes="(max-width: 1200px) 50vw, 33vw" />
        //     </div>
        //     <div>
        //         <h2>{title}</h2>
        //         <p>${price}</p>
        //     </div>
        //     <button className="snipcart-add-item"
        //         data-item-id={id}
        //         data-item-price={price}
        //         data-item-url="/products/gummies"
        //         data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        //         data-item-image={image}
        //         data-item-name={title}
        //     >
        //         Add to cart
        //     </button>
        // </div>
    )
}
