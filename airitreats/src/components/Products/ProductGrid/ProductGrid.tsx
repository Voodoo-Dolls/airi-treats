'use client'
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'
import styles from "./ProductGrid.module.scss"
import { createClient } from "@/prismicio";
import Loading from '@/app/loading';



interface props {
    tag: string,
    filter: any[],
    page: number,
    setMaxPage: Function
}



export default function ProductGrid({ tag, filter, page, setMaxPage }: props) {
    const [product, setProduct] = useState<any>(null)
    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const product: any = await client.getByTag(tag, {
                // filters: [prismic.filter.any('document.tags', ['fruits'])],
                page: page,
                pageSize: 8,
                orderings: {
                    field: filter[0],
                    direction: filter[1]
                    // field: "my.product.price",
                    // direction: "asc"
                },
                graphQuery: `
                {
                    product{
                        product_name
                        price
                    }
                }
                `
            })
            // console.log(product)
            setMaxPage(product.total_pages)
            setProduct(product)
        };

        fetchData();
    }, [filter, page, setMaxPage, tag]);
    if (!product) return <Loading />

    return (
        <div className={`${styles.container} container`}>
            {product.results.map((product: any) => (
                <ProductCard uid={product.uid} key={product.uid} />
            ))}
        </div>
    )
}
