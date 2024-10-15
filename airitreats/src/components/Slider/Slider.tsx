'use client'

import ProductCard from "../Products/ProductCard/ProductCard"

export default function Slider({ list }) {
    return (
        <>
            {list.map((uid, index) => {
                return (
                    <ProductCard uid={uid} key={index} />
                )
            }
            )}
        </>
    )
}
