'use client'

import { useState } from "react"
import ProductGrid from "@/components/Products/ProductGrid/ProductGrid";
import Pagination from "../Pagination/Pagination";




interface props {
    category: string
}

// Prismic Filters, "my.{type}.dataField"
let filters = [["my.product.price", "asc"], ["my.product.price", "desc"], ["my.product.product_name", "asc"], ["my.product.product_name", "desc"]]

export default function ProductContainer({ category }: props) {
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(5)
    const [fields, setFields] = useState(["my.product.price", "asc"])

    let handleFilter = (e: any) => {
        let index = e.target.value
        setFields(filters[index])
        // console.log(e.target.value)
    }
    return (
        <>
            <label htmlFor="filter">Filter By</label>
            <select name="filter" id="filter" onChange={handleFilter}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <ProductGrid tag={`gummies`} filter={fields} page={page} setMaxPage={setMaxPage} />
            {maxPage > 1 && <Pagination page={page} maxPage={maxPage} setPage={setPage} />}

        </>
    )
}
