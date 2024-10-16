'use client'
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'
import styles from "./ProductGrid.module.scss"
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import Spinner from '@/components/Spinner/Spinner';



interface props {
    tag: string,
    filter: any[],
    page: number,
    setMaxPage: Function
}



export default function ProductGrid({ tag, filter, page, setMaxPage }: props) {
    const [product, setProduct] = useState<any>(null)
    const [field, direction] = filter
    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const product: any = await client.getByTag(tag, {
                page: page,
                pageSize: 4,
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
            setMaxPage(product.total_pages)
            setProduct(product)
        };

        fetchData();
    }, [filter, page]);
    if (!product) return <div>Loading</div>

    return (
        <div className={`container ${styles.container}`}>
            {product.results.map((product: any) => (
                <ProductCard uid={product.uid} key={product.uid} />
            ))}
        </div>
    )
}
