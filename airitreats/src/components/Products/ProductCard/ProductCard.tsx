import Image from "next/image"
import { createClient } from "@/prismicio";
import Link from "next/link"
import { headerFont } from "@/app/fonts"
import styles from "./ProductCard.module.scss"
import { useEffect, useState } from "react";



export default function ProductCard({ uid }: any) {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const product = await client.getByUID("product", uid)
            setProduct(product);
        };

        fetchData();
    }, []);
    if (!product) return <div>Loading...</div>
    // console.log(product)
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
