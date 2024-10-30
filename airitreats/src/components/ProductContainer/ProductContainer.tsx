'use client'

import { useState } from "react"
import ProductGrid from "@/components/Products/ProductGrid/ProductGrid";
import Pagination from "../Pagination/Pagination";
import { FaSortAlphaDown } from "react-icons/fa";
import styles from "./ProductContainer.module.scss"




interface props {
    category: string
}

// Prismic Filters, "my.{type}.dataField"
let filters = [["my.product.price", "asc"], ["my.product.price", "desc"], ["my.product.product_name", "asc"], ["my.product.product_name", "desc"]]


export default function ProductContainer({ category }: props) {
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const [fields, setFields] = useState(["my.product.price", "asc"])

    let handleFilter = (e: any) => {
        let index = e.target.value
        setFields(filters[index])
        setPage(1)
        // console.log(e.target.value)
    }
    return (
        <>
            <div className={styles.filterContainer}>
                {/* Sort */}
                <label htmlFor="filter" className={styles.label}>
                    <FaSortAlphaDown />
                    SortBy
                </label>
                <select name="filter" id="filter" onChange={handleFilter}>
                    <option value="0">Price Low To High</option>
                    <option value="1">Price High To Low</option>
                    <option value="2">Alphabetical (A-Z)</option>
                    <option value="3">Alphabetical (Z-A)</option>
                </select>
            </div>
            <ProductGrid tag={category} filter={fields} page={page} setMaxPage={setMaxPage} />
            {maxPage > 1 && <Pagination page={page} maxPage={maxPage} setPage={setPage} />}

        </>
    )
}
