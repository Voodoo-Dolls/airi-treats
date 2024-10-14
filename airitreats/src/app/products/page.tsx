
import ProductGrid from "@/components/Products/ProductGrid/ProductGrid";
import { createClient } from "@/prismicio";


export default async function page() {
    const client = createClient();

    let data: any = await client.getAllByEveryTag(["product", "product"])
    // let singleData = await client.getByUID("product", "1");

    return (
        <div>
            <div className="container">
                <h2>All Products</h2>

            </div>
            <ProductGrid productData={data} />
        </div>
    )
}
