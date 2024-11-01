'use client'

import ProductText from "./ProductText/ProductText";
import Image from 'next/image'
import styles from "./ProductDetails.module.scss"
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";





export default function ProductDetails({ productData }: any) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (x: number) => {
        let newQuantity = quantity + x
        if (newQuantity <= 0) {
            newQuantity = 1
        }
        setQuantity(newQuantity)

    }
    // console.log(productData.data)
    const { product_name, price, description, main_image } = productData.data
    console.log(main_image)
    return (
        <div className={`${styles.container}`}>
            <div className={styles.imageContainer}>
                <PrismicNextImage field={main_image} className={styles.mainImage} />
                <h2>{product_name}</h2>
            </div>
            <h3 className={styles.price}>${price.toFixed(2)}</h3>
            <div className={`container`}>
                <PrismicRichText field={description} />
            </div>
            <div className={`${styles.quantity} container`}>
                <h3>Quantity</h3>
                <div className={styles.controls}>
                    <button onClick={() => { handleQuantity(-1) }}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => { handleQuantity(1) }}>+</button>
                </div>
                <button
                    className="snipcart-add-item yellowBtn"
                    data-item-id={product_name}
                    data-item-name={product_name}
                    data-item-price={price}
                    data-item-url={main_image.url}
                    data-item-description={description[0].text}
                    data-item-quantity={quantity}
                >
                    Add to Cart
                </button>
            </div>

        </div>
    )
}
