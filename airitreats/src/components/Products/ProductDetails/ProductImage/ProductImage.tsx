import React from 'react'
import styles from "./ProductImage.module.scss"
import Image from 'next/image'

interface imageProps {
    mainImage: {
        url: string;
        alt: string;
    }
}


export default function ProductImage({ mainImage }: imageProps) {
    console.log(mainImage)
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={mainImage.url} fill alt={mainImage.alt} className={styles.image} />
            </div>
        </div>
    )
}
