'use client'
import { PrismicNextLink } from "@prismicio/next";
import styles from "./Navbar.module.scss"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiShoppingBasketLine } from "react-icons/ri";





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
            <nav className={styles.nav}>
                <h2 className="sr-only">Main Navigation</h2>
                <ul className={styles.ul}>
                    {/* Get Nav Links in Prismic from Settings */}
                    {links.map((data: any) => {
                        if (data.position == "Front") {
                            return (
                                <li key={data.label}><PrismicNextLink field={data.link}>{data.label}</PrismicNextLink></li>
                            )
                        }
                    }
                    )}
                    <li className={styles.dropContainer}>
                        Explore Categories
                        <ul className={styles.dropContent}>
                            {links.map((data: any) => {
                                if (data.position == "Category") {
                                    return (
                                        <li key={data.label}>
                                            <PrismicNextLink field={data.link}>
                                                <span className={styles.underline}>&gt;</span> {data.label}
                                            </PrismicNextLink>
                                        </li>
                                    )
                                }
                            }
                            )}
                        </ul>
                    </li>
                    {/* Snipcart Cart */}

                    <li>
                        <a href="#" className={`snipcart-checkout ${styles.cart}`}>
                            <RiShoppingBasketLine />&nbsp;{isClient ? <span className="snipcart-items-count"> </span> : ''}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
