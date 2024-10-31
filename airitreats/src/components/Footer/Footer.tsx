import Newsletter from "@/components/Newsletter/Newsletter";
import Map from "./Map/Map";
import styles from "./Footer.module.scss"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


export default function Footer() {

    return (
        <footer className={styles.footer}>
            {/* <Map /> */}
            <div className={styles.placeholder}>
                <p> Map placeholder here</p>
                <p> and contact details here</p>
            </div>
            <div className={styles.socialMedia}>
                <h3>Follow Us</h3>
                <p><a href="https://www.instagram.com/airitreats/" target="_blank"><FaInstagram /></a></p>
                <p><a href="https://www.facebook.com/profile.php?id=61553694755284" target="_blank"><FaFacebookF /></a></p>

            </div>

            <div className={styles.subscription}>
                <h3>Newsletter</h3>
                <p>Do you want to know the latest deals, new arrivals, limited edition treats? Subscribe to our newsletter!</p>
                <Newsletter />
            </div>

            <div className={styles.legalese}>
                <a href="">Privacy Policy</a>
                <span>|</span>
                <a href="">Terms and Conditions</a>
            </div>

        </footer>
    )
}
