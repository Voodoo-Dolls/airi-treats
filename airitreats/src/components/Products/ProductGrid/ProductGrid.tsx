import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from "./ProductGrid.module.scss"


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
interface Props {
    productData: {
        uid: string,
        data: {
            slices: productSlice[]
            category: string
        }
    }[]

}

export default function ProductGrid({ productData }: Props) {
    return (
        <div className={`container ${styles.container}`}>
            {productData.map((product) => (
                <ProductCard product={product} key={product.uid} />
            ))}
        </div>
    )
}
