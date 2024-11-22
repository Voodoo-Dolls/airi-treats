import Newsletter from "@/components/Newsletter/Newsletter";
import Map from "./Map/Map";
import styles from "./Footer.module.scss"
import { FaInstagram, FaFacebookF, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.address}>
                    <Map />
                    {/* <div>
                    <h3> Come Find Us!</h3>
                    <div>
                        <FaMapMarkerAlt title="our store"/>
                        <p>13 Amherst Crescent, St. Albert, AB T8N 2P7</p>
                    </div>
                    
                    <div>
                        <FaPhone title="phone number"/>
                        <p>(XXX) XXX-XXXX</p>
                    </div>
                </div> */}
                </div>

                <div className={styles.community}>
                    <div className={styles.socialMedia}>
                        <h3>Follow Us</h3>
                        <p><a href="https://www.instagram.com/airitreats/" target="_blank"><FaInstagram title="our instagram" /></a></p>
                        <p><a href="https://www.facebook.com/profile.php?id=61553694755284" target="_blank"><FaFacebookF title="our facebook" /></a></p>

                    </div>
                    <div className={styles.subscription}>
                        <h3>Newsletter</h3>
                        <p>Do you want to know the latest deals, new arrivals, limited edition treats? Subscribe to our newsletter!</p>
                        <Newsletter />
                    </div>
                </div>

                <div className={styles.legalese}>

                    <a href="https://www.iubenda.com/privacy-policy/70842258">Privacy Policy</a>
                    <span>|</span>
                    <a href="https://www.iubenda.com/privacy-policy/70842258/cookie-policy">Cookie Policy</a>
                    <span>|</span>
                    <a href="https://www.iubenda.com/terms-and-conditions/70842258">Terms and Conditions</a>
                </div>
            </div>

        </footer>
    )
}
