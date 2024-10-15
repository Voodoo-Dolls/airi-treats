'use client'
import { SpinnerCircularFixed } from 'spinners-react';
import styles from "./Spinner.module.scss"
export default function Spinner() {
    return (
        <div className={styles.container}>
            <SpinnerCircularFixed size={50} thickness={180} speed={100} color="rgba(57, 122, 172, 1)" secondaryColor="rgba(255, 255, 255, 1)" />
        </div>
    )
}
