import { createClient } from "@/prismicio";
import ProductDetails from "@/components/Products/ProductDetails/ProductDetails";


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