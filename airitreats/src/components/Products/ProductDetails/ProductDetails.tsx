
import ProductImage from "./ProductImage/ProductImage";
import ProductText from "./ProductText/ProductText";

import styles from "./ProductDetails.module.scss"


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

interface productProps {
    productData: {
        data: {
            slices: productSlice[]
            category: string
        }
        uid: string
    }
}

export default function ProductDetails({ productData }: any) {

    const { product_name, price, description, main_image } = productData.data

    return (
        <div className={`${styles.container} container`}>
            <ProductImage mainImage={main_image} />
            <ProductText productName={product_name} productPrice={price} productDescription={description} />
        </div>
    )
}
