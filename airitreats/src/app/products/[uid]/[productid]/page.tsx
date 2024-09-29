import { createClient } from "@/prismicio";
import ProductDetails from "@/components/Products/ProductDetails/ProductDetails";


export default async function Page({ params }: { params: { productid: string } }) {
    let productid = params.productid
    const client = createClient();
    // Grab Product Details Using URL Slug
    let productData = await client.getByUID("product", productid)
    return (

        <div className={`container`}>
            <ProductDetails productData={productData} />
        </div>



    )
}