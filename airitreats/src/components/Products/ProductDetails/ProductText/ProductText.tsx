'use client'
import { headerFont } from "@/app/layout"
import styles from "./ProductText.module.scss"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

export default function ProductText({ productName, productDescription, productPrice, productID }) {
    const [quantity, setQuantity] = useState(5);
    const pathname = usePathname()


    const handleQuantity = (x) => {
        let newQuantity = quantity + x
        if (newQuantity <= 0) {
            newQuantity = 1
        }
        setQuantity(newQuantity)

    }


    return (
        <div className={styles.container}>
            <h2 className={headerFont.className}>
                {productName}
            </h2>
            <p>
                ${productPrice.toFixed(2)}
            </p>
            <p>
                {productDescription[0].text}
            </p>
            <div className={styles.quantity}>
                <h3>Quantity</h3>
                <button onClick={() => { handleQuantity(-1) }}>-</button>
                <p>{quantity}</p>
                <button onClick={() => { handleQuantity(1) }}>+</button>
            </div>
            <button
                className="snipcart-add-item"
                data-item-id={productID}
                data-item-name={productName}
                data-item-price={productPrice}
                data-item-url={pathname}
                data-item-description={productDescription}
                data-item-quantity={quantity}
            >
                Add to Cart
            </button>
            <p>Current pathname: {pathname}</p>
        </div>
    )
}
