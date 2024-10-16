'use client'
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'
import styles from "./ProductGrid.module.scss"
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import Spinner from '@/components/Spinner/Spinner';



interface props {
    tag: string,
    filter: any[]
}



export default function ProductGrid({ tag, filter }: props) {
    const [product, setProduct] = useState<any>(null)
    const [field, direction] = filter
    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const product: any = await client.getAllByTag(tag, {
                orderings: {
                    field: field,
                    direction: direction
                    // field: "my.product.price",
                    // direction: "asc"
                },
                graphQuery: `
                {
                    product{
                        price
                        product_name
                    }
                }
                `
            })
            console.log(product)
            setProduct(product);
        };

        fetchData();
    }, [filter]);
    if (!product) return <div>Loading</div>

    return (
        <div className={`container ${styles.container}`}>
            {product.map((product: any) => (
                <ProductCard uid={product.uid} key={product.uid} />
            ))}
        </div>
    )
}
