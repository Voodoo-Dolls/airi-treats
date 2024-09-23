
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import styles from "./Navbar.module.scss"






export default async function Navbar() {
    const client = createClient();
    const settings = await client.getSingle('settings')


    return (
        <nav>
            <ul className={styles.ul}>
                {/* Get Nav Links in Prismic from Settings */}
                {settings.data.links.map((data) => {
                    return (
                        <li key={data.label}><PrismicNextLink field={data.link}>{data.label}</PrismicNextLink></li>
                    )
                }
                )}
                {/* Snipcart Cart */}
                <li><a href="#" className="snipcart-checkout">Cart:<span className="snipcart-items-count"> </span></a></li>
            </ul>
        </nav>
    )
}
