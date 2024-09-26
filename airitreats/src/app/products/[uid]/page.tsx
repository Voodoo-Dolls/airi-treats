import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import ProductGrid from "@/components/Products/ProductGrid/ProductGrid";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
    const client = createClient();
    const page = await client
        .getByUID("category", params.uid)
        .catch(() => notFound());

    let productData = await client.getAllByEveryTag([params.uid, "product"])


    // productData.map((product) => {
    //     console.log(product)
    // })
    return (
        <>
            <div className="container">
                <h2>This is the {params.uid} page.</h2>
            </div>
            <ProductGrid productData={productData} />
        </>
    )
    return <SliceZone slices={page.data.slices} components={components} />;
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