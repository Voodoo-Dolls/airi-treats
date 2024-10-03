import ProductImage from "./ProductImage/ProductImage";
import ProductText from "./ProductText/ProductText";

import styles from "./ProductDetails.module.scss"


interface productSlice {
    primary: {
        product_id: number,
        product_name: string,
        product_price: number,
        product_description: [],
        main_image: {
            url: string
            alt: string
        }
    }
}

interface productProps {
    productData: {
        data: {
            slices: productSlice[]
            category: string
        }
        uid: string
    }
}

export default function ProductDetails({ productData }: productProps) {
    console.log(productData)
    const { product_name, product_price, product_description, main_image } = productData.data.slices[0].primary
    const productID = productData.uid

    return (
        <div className={styles.container}>
            <ProductImage mainImage={main_image} />
            <ProductText productName={product_name} productPrice={product_price} productDescription={product_description} productID={productID} />
        </div>
    )
}
