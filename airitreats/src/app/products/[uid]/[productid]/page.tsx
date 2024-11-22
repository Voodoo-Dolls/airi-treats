import { Metadata } from "next";
import { createClient } from "@/prismicio";
import ProductDetails from "@/components/Products/ProductDetails/ProductDetails";
import { notFound } from "next/navigation";

type Params = { productid: string };



export default async function Page({ params }: { params: { productid: string, uid: string } }) {
    const { productid, uid } = params
    const client = createClient();
    // Grab Product Details Using URL Slug
    let productData: any = await client.getByUID("product", productid).catch(() => notFound());
    let slug = (productData.data.category.uid)
    if (uid != slug) {
        notFound()
    }

    // console.log(productData)
    console.log(params)
    console.log(slug)
    return (
        <>
            <ProductDetails productData={productData} />
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
        .getByUID("product", params.productid)
        .catch(() => notFound());
    return {
        title: page.data.meta_title || page.data.product_name,
        description: page.data.meta_description,
    };
}