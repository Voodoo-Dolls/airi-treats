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
    }[]

}

interface productProps {
    uid: string

}


export default function ProductGrid({ productData }: Props) {
    console.log(productData)
    return (
        <div className={`container ${styles.container}`}>
            {productData.map((product: any) => (
                <ProductCard product={product} key={product.uid} />
            ))}
        </div>
    )
}
