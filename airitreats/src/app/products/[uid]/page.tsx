import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import ProductGrid from "@/components/Products/ProductGrid/ProductGrid";
import ProductContainer from "@/components/ProductContainer/ProductContainer";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
    const client = createClient();
    const page = await client
        .getByUID("category", params.uid)
        .catch(() => notFound());

    // let productData: any = await client.getAllByEveryTag([params.uid, "product"])

    // productData.map((product) => {
    //     console.log(product)
    // })
    return (
        <>
            <div>
                <SliceZone slices={page.data.slices} components={components} />
                {params.uid == 'all' ? <ProductContainer category={`product`} /> : <ProductContainer category={params.uid} />}
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
        title: `${page.data.meta_title} | Airi Treats`,
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