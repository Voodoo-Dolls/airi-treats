'use client'
import Image from "next/image"
import { createClient } from "@/prismicio";
import Link from "next/link"
import { headerFont } from "@/app/fonts"
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

    console.log(product)

    return (
        <Link href={product.url} className={styles.container}>
            {data.product_flag &&
                <div className={styles.flag}>
                    {data.flag_text}
                </div>
            }

            <div className={styles.imgContainer}>
                <Image src={data.main_image.url} fill alt="" sizes="300px" priority={false} />
            </div>
            <p className={styles.title}>{data.product_name}</p>
            <p className={styles.price}>${data.price.toFixed(2)}</p>


        </Link >


    )
}
