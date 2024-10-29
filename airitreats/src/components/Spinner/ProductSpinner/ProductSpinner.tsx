import styles from "./ProductSpinner.module.scss"

export default function ProductSpinner() {
    return (
        <>
            <div className={styles.imgContainer}>
                <h2>Loading...</h2>
            </div>
        </>
    )
}
