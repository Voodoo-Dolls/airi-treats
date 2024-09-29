import React from 'react'
import styles from "./ProductImage.module.scss"
import Image from 'next/image'
export default function ({ mainImage, productGallery }) {
    console.log()
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={mainImage.url} fill alt='' className={styles.image} />
            </div>
        </div>
    )
}
