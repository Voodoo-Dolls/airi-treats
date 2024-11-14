'use client'
import Image from "next/image"
import { createClient } from "@/prismicio";
import Link from "next/link"
import styles from "./ProductCard.module.scss"
import { useEffect, useState } from "react";
import ProductSpinner from "@/components/Spinner/ProductSpinner/ProductSpinner";



export default function ProductCard({ uid }: any) {
    const [product, setProduct] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const product: any = await client.getByUID("product", uid)
            setProduct(product);
        };

        fetchData();
    }, [uid]);
    if (!product) return <ProductSpinner />

    const { data } = product



    return (
        <Link href={product.url} className={styles.container}>
            {data.product_flag &&
                <div className={styles.flag}>
                    {data.flag_text}
                </div>
            }

            <div className={styles.imgContainer}>
                <Image src={data.main_image.url} fill alt={`Picture of ${data.product_name}`} sizes="300px" priority={false} />
                {!data.product_available && <div className={styles.sold}>SOLD OUT</div>}
            </div>
            <h3 className={styles.title}>{data.product_name}</h3>
            {/* Checks if product is available then renders proper p tag */}
            <p className={styles.price}>${data.price.toFixed(2)}</p>


        </Link >


    )
}
