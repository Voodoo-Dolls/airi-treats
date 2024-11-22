// imports
import Link from "next/link";
import styles from "./NotFound.module.scss";

export default function Notfound() {
    return(
        <div className={styles.error}>
            <div>
                <h2> Page not found</h2>
                <p>could not find the page you where looking for</p>
                <p>

                <Link href={"/"} className={styles.yellowBtn}> 
                    Go back home
                </Link>
                </p>
            </div>
            
        </div>
        
    )
}