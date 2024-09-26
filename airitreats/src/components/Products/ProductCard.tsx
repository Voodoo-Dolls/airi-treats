import Image from "next/image"
import styles from "./ProductCard.module.scss"



export default function ProductCard() {
    // const title = data.product_name
    // const price = data.product_price
    // const desc = data.product_description
    // const id = data.product_id
    // // Come back and check to see if you can use prismic image component
    // const image = data.main_image.url


    return (
        <div>
            <div className={styles.imageContainer}>
                <Image src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTlpuXR0utjtmyljXGkJFBxbp6CPDF-isNdA&s`} fill alt="" />
            </div>
            <div>
                <h2>Title</h2>
                <p>$4.00</p>
            </div>
            <div>
                Details
            </div>
            <button className="snipcart-add-item">Add to cart</button>
        </div>
        // <div className={styles.container}>
        //     <div className={styles.imageContainer}>
        //         <Image src={image} fill alt="" className={styles.image} sizes="(max-width: 1200px) 50vw, 33vw" />
        //     </div>
        //     <div>
        //         <h2>{title}</h2>
        //         <p>${price}</p>
        //     </div>
        //     <button className="snipcart-add-item"
        //         data-item-id={id}
        //         data-item-price={price}
        //         data-item-url="/products/gummies"
        //         data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        //         data-item-image={image}
        //         data-item-name={title}
        //     >
        //         Add to cart
        //     </button>
        // </div>
    )
}
