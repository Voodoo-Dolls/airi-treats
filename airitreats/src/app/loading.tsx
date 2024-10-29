import Image from "next/image"
import styles from "./Loading.module.scss"

export default function Loading() {
    return (
        <div className={styles.loading}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src="/images/Image.png" fill alt="Loading Image Icon" />
                </div>
                <h2>Loading...</h2>
            </div>
        </div>
    )
}
