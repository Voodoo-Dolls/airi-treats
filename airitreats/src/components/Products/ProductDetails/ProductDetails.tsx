import ProductImage from "./ProductImage/ProductImage";
import ProductText from "./ProductText/ProductText";

import styles from "./ProductDetails.module.scss"

export default function ProductDetails({ productData }) {
    const { product_name, product_price, product_description, main_image, product_gallery } = productData.data.slices[0].primary
    const productID = productData.uid
    console.log(productData)
    return (
        <div className={styles.container}>
            <ProductImage mainImage={main_image} productGallery={product_gallery} />
            <ProductText productName={product_name} productPrice={product_price} productDescription={product_description} productID={productID} />
        </div>
    )
}
