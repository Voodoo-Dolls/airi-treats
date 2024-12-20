'use client'
import styles from "./MobileNav.module.scss"
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
// React Icons
import { RiShoppingBasketLine } from "react-icons/ri";







export default function MobileNav({ links, logo }: any) {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    // Hamburger Menu State
    const [open, setOpen] = useState(false)
    const navRef: any = useRef(null)
    const menuRef: any = useRef(null)
    // Handle Menu Toggle on outside click
    const handleOutsideClick = (e: any) => {
        if (!navRef.current.contains(e.target) && !menuRef.current.contains(e.target)) {
            setOpen(false)
        }

    };
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        // Cleanup function
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    let path = usePathname()
    return (
        <>
            <div className={`${styles.container}`}>
                {/* Logo */}
                <div className={styles.imageContainer}>
                    <Link href={"/"}>
                        <Image src={logo} alt={`Airitreats Logo`} fill priority sizes="80px" />
                    </Link>
                </div>
                {/* Hamburger Menu Toggle */}
                <div onClick={() => setOpen(!open)} ref={menuRef}>
                    {open ? <IoClose /> : <HiMenu />}
                </div>
            </div>
            {/* Nav is toggled with the hamburger and receives its link from links prop */}
            <nav className={`${open && `${styles.active} noScroll`} ${styles.nav}`} ref={navRef}>
                <h2 className="sr-only">Mobile Navigation</h2>
                <a href="#"
                    className={`snipcart-checkout ${styles.cartLink}`}
                    onClick={() => {
                        setOpen(!open)
                    }}>
                    <button className={`yellowBtn ${styles.cart}`}>
                        <RiShoppingBasketLine />
                        Your Cart:&nbsp;
                        {isClient ? <span className="snipcart-items-count"> </span> : ''}

                    </button>
                </a>
                <div className={styles.linksSection}>
                    <p>Explore Categories</p>
                    <ul className={``}>
                        {/* Get Nav Links in Prismic from Settings Doc */}
                        {links.map((data: any) => {
                            if (data.position == "Category") {
                                return (
                                    <li className={styles.link} key={data.label}>
                                        <PrismicNextLink field={data.link} onClick={() => setOpen(false)} className={`${data.link.url == path && styles.active}`}><span className={styles.underline}>&gt;</span> {data.label}</PrismicNextLink>
                                    </li>
                                )
                            }
                        }
                        )}
                    </ul>
                </div>
                <div className={styles.linksSection}>
                    <p>Learn More</p>
                    <ul className={``}>
                        {/* Get Nav Links in Prismic from Settings Doc */}
                        {links.map((data: any) => {
                            if (data.position != "Category") {
                                return (
                                    <li className={styles.link} key={data.label}>
                                        <PrismicNextLink field={data.link} onClick={() => setOpen(false)} className={`${data.link.url == path && styles.active}`}><span className={styles.underline}>&gt;</span> {data.label}</PrismicNextLink>
                                    </li>
                                )
                            }
                        }
                        )}
                    </ul>
                </div>

            </nav>
        </>
    )
}
function setIsClient(arg0: boolean) {
    throw new Error("Function not implemented.");
}

