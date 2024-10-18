import Newsletter from "@/components/Newsletter/Newsletter";
import Map from "./Map/Map";
import styles from "./Footer.module.scss"




export default function Footer() {

    return (
        <footer className={styles.footer}>
            {/* <Map /> */}

            <Newsletter />
        </footer>
    )
}
