import { createClient } from "@/prismicio";
import styles from "./Map.module.scss"
import { HiMapPin } from "react-icons/hi2";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";



export default async function Map() {
    const client = createClient()
    const details = await client.getSingle("footer")
    // console.log(details)
    return (
        <>
            <div className={`${styles.mapContainer}`}>
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.3453439170416!2d-113.50105682277649!3d53.56945297235495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02395e6eebc97%3A0xbbc74ad142909e90!2sNAIT%20L%20building!5e0!3m2!1sen!2sca!4v1728859425183!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                >
                </iframe> */}
            </div>
            <div className="text">
                <h2>
                    Come Find Us!
                </h2>
                {/* Address */}
                <div className={styles.detail}>
                    <HiMapPin />
                    <p>
                        {details.data.address}
                    </p>
                </div>
                {/* Phone */}
                <div className={styles.detail}>
                    <BiSolidPhoneCall />
                    <p>
                        {details.data.address}
                    </p>
                </div>
                {/* Email */}
                <div className={styles.detail}>
                    <MdEmail />
                    <p>
                        {details.data.address}
                    </p>
                </div>

            </div>
        </>
    )
}

