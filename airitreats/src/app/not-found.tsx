// imports
import Link from "next/link";
import styles from "./NotFound.module.scss";
import Image from "next/image";

export default function Notfound() {
    return (
        <div className={styles.error}>
            <div>
                <Image src={`/images/404.png`} width={150} height={150} alt={"Empty wrapper with a fly coming out of it"} />
                <h2>404 Page Not Found</h2>
                <p>Could not find the page you were looking for</p>
                <Link href={"/"} className={`yellowBtn`}>
                    Go Back Home
                </Link>
            </div>

        </div>

    )
}