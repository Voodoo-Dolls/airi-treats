import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import ProductDetails from "@/components/Products/ProductDetails/ProductDetails";
import { notFound } from "next/navigation";



interface productData {
    data: {
        slices: productSlice[]
        category: string
    }
    uid: string
}

interface productSlice {
    primary: {
        product_id: string,
        product_name: string,
        product_price: number,
        product_description: [],
        main_image: {
            url: string
            alt: string
        }
    }
}

export default async function Page({ params }: { params: { productid: string, uid: string } }) {
    const { productid, uid } = params
    const client = createClient();
    // Grab Product Details Using URL Slug
    let productData: any = await client.getByUID("product", productid)
    console.log(productData)
    let slug = (productData.data.category.uid)

    if (uid != slug) {
        notFound()
    }
    return (
        <>
            <ProductDetails productData={productData} />
            {/* <SliceZone slices={productData.data.slices} components={components} />; */}
            {/* <p>Hi</p> */}
        </>
    )
    // return (
    //     <div className={`container`}>
    //         <ProductDetails productData={productData} />
    //     </div>
    // )
}