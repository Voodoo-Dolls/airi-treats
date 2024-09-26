import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from "./ProductGrid.module.scss"

export default function ProductGrid({ productData }) {
    return (
        <div className={`container ${styles.container}`}>
            {productData.map((product) => (
                <ProductCard product={product} key={product.uid} />
            ))}
        </div>
    )
}
