'use client'
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import styles from "./Navbar.module.scss"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";






export default function Navbar({ links, logo }: any) {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])



    return (
        <div className={`${styles.container} container`}>
            <div className={styles.imageContainer}>
                <Link href={"/"}>
                    <Image src={logo} alt={`Airitreats Logo`} fill priority sizes="80px" />
                </Link>
            </div>
            <nav>
                <ul className={styles.ul}>
                    {/* Get Nav Links in Prismic from Settings */}
                    {links.map((data: any) => {
                        return (
                            <li key={data.label}><PrismicNextLink field={data.link}>{data.label}</PrismicNextLink></li>
                        )
                    }
                    )}
                    {/* Snipcart Cart */}

                    <li><a href="#" className="snipcart-checkout">Cart:&nbsp;{isClient ? <span className="snipcart-items-count"> </span> : ''}</a></li>
                </ul>
            </nav>
        </div>
    )
}
