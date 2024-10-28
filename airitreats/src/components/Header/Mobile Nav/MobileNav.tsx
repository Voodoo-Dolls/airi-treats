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
import { HiShoppingCart } from "react-icons/hi";




interface links {
    links: [{
        link: any,
        label: string
        position: string
    }]
}

export default function MobileNav({ links, logo }: any) {
    console.log(usePathname())
    // Hamburger Menu State
    const [open, setOpen] = useState(true)
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
    console.log(links)
    return (
        <>
            <div className={`${styles.container}`}>
                {/* Hamburger Menu Toggle */}
                <div onClick={() => setOpen(!open)} ref={menuRef}>
                    {open ? <IoClose /> : <HiMenu />}
                </div>
                {/* Logo */}
                <div className={styles.imageContainer}>
                    <Link href={"/"}>
                        <Image src={logo} alt={`Airitreats Logo`} fill />
                    </Link>
                </div>
            </div>
            {/* Nav is toggled with the hamburger and receives its link from links prop */}
            <nav className={`${open && styles.active} ${styles.nav}`} ref={navRef}>
                <a href="#"
                    className={`snipcart-checkout ${styles.cartLink}`}
                    onClick={() => {
                        setOpen(!open)
                    }}>
                    <button className={`yellowBtn ${styles.cart}`}>
                        <HiShoppingCart />
                        Your Cart:&nbsp; <span className="snipcart-items-count"> </span>
                    </button>
                </a>
                <div className={styles.linksSection}>
                    <h2>Explore Categories</h2>
                    <ul className={``}>
                        {/* Get Nav Links in Prismic from Settings Doc */}
                        {links.map((data: any) => {
                            if (data.position == "Category") {
                                return (
                                    <li className={styles.link} key={data.label}>
                                        <PrismicNextLink field={data.link} onClick={() => setOpen(false)} className={`${data.link.url == usePathname() && styles.active}`}><span className={styles.underline}>&gt;</span> {data.label}</PrismicNextLink>
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
