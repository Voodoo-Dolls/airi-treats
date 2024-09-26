
import { createClient } from "@/prismicio";

import ProductCard from '@/components/Products/ProductCard'
export default async function page() {
    const client = createClient();

    let data = await client.getAllByEveryTag(["gummies", "product"])
    let singleData = await client.getByUID("product", "1");

    console.log(singleData.data.slices[0]?.primary)
    return (
        <>

        </>
    )
}
