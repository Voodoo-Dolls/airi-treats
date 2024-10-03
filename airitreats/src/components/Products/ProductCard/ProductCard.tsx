import Image from "next/image"
import styles from "./ProductCard.module.scss"
import { headerFont } from "@/app/layout"
import Link from "next/link"

interface productSlice {
    primary: {
        product_id: number,
        product_name: string,
        product_price: number,
        product_description: string,
        main_image: {
            url: string
        }
    }
}

interface productProps {
    product: {
        data: {
            slices: productSlice[]
            category: string
        }
    }
}

export default function ProductCard({ product }: productProps) {
    const { product_id, product_name, product_price, main_image } = product.data.slices[0].primary

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
            </div>
        </div >

    )
}
