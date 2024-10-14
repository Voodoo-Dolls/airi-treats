import Image from "next/image"
import styles from "./ProductCard.module.scss"

import Link from "next/link"
import { headerFont } from "@/app/fonts"
// import { headerFont } from "@/app/layout"

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
        uid: string,
        url: string,
        data: {
            slices: any
        }

    }
}



export default function ProductCard({ product }: productProps) {
    const { product_name, product_price, main_image } = product.data.slices[0].primary
    // console.log(product)


    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={main_image.url} fill alt="" />
            </div>
            <p className={styles.title}>{product_name}</p>
            <p className={styles.price}>${product_price.toFixed(2)}</p>

            <Link href={`${product.url}`}>
                <button className={`${styles.btn} ${styles.outline}`}>DETAILS</button>
            </Link>

        </div >

    )
}
