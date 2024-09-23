import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import ProductCard from "@/components/Products/ProductCard";
import styles from "./Category.module.scss"
type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
    const client = createClient();
    const page = await client
        .getByUID("category", params.uid)
        .catch(() => notFound());

    // My Stuff
    const product = await client.getByUID('product_list', "gummy-products")
    const slices = product.data.slices
    console.log(slices)
    return (
        <>
            <div className={styles.container}>
                {
                    slices.map((data) => (
                        <ProductCard data={data.primary} key={data.primary.product_id} />
                    ))
                }
            </div>
        </>
    )

}

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const client = createClient();
    const page = await client
        .getByUID("category", params.uid)
        .catch(() => notFound());

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType("category");



    return pages.map((page) => {
        return { uid: page.uid };
    });
}


