import Newsletter from "@/components/Newsletter/Newsletter";
import styles from "./Footer.module.scss"
import { FaInstagram, FaFacebookF } from "react-icons/fa";

import Link from "next/link";
export default function Footer() {


    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* <div className={styles.address}> */}
                {/* <Map /> */}
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
                {/* </div> */}

                <div className={styles.community}>
                    <div>
                        {/* <Map /> */}

                        <div className={styles.socialMedia}>
                            <h3>Follow Us</h3>
                            <p><Link href="https://www.instagram.com/airitreats/" target="_blank"><FaInstagram title="our instagram" className={styles.socialicon} /></Link></p>
                            <p><Link href="https://www.facebook.com/profile.php?id=61553694755284" target="_blank"><FaFacebookF title="our facebook" className={styles.socialicon} /></Link></p>
                        </div>

                    </div>

                    <div className={styles.subscription}>
                        <h3>Newsletter</h3>
                        <p>Do you want to know the latest deals, new arrivals, limited edition treats? Subscribe to our newsletter!</p>
                        <Newsletter />
                    </div>
                </div>

                <div className={styles.legalese}>

                    <Link href={`/privacy-policy.txt`} target="_blank">Privacy Policy</Link>
                    <span>|</span>
                    <Link href={`/cookie-policy.txt`} target="_blank">Cookie Policy</Link>
                </div>
            </div>

        </footer>
    )
}
