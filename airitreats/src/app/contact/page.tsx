import Contact from "@/components/Contact/Contact";
import styles from "./ContactUs.module.scss"

export default async function ContactUs() {
    return (
        <div className={styles.container}>
            <Contact />
            <div className={styles.hoursContainer}>
                <h2>Hours of Operation</h2>
                <div>
                    <h3>Monday to Friday</h3>
                    <p>9:00 A.M. to 5:00 P.M.</p>
                </div>
                <div>
                    <h3>Saturday and Sunday</h3>
                    <p>10:00 A.M. to 6:00 P.M.</p>
                </div>
                <div>
                    <p>We’d love to see you! Check out our <a href="https://www.instagram.com/airitreats/" target="_blank">Instagram</a> or <a href="https://www.facebook.com/profile.php?id=61553694755284" target="_blank">Facebook</a> for the latest updates.</p>
                </div>
            </div>



        </div>

    )
}