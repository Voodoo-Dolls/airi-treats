'use client'

import { HiMenu } from "react-icons/hi";
import styles from "./MobileNav.module.scss"
import { useState, useRef, useEffect } from "react";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";
// React Icons
import { HiShoppingCart } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";



interface links {
    links: [{
        link: any,
        label: string
        position: string
    }]
}

export default function MobileNav({ links, logo }: any) {
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

    return (
        <>
            <div className={`container ${styles.container}`}>
                {/* Left Nav */}
                <div className={styles.left}>
                    {/* Hamburger Menu Toggle */}
                    <div onClick={() => setOpen(!open)} ref={menuRef}>
                        <HiMenu />
                    </div>
                    {/* Logo */}
                    <div className={styles.imageContainer}>
                        <Link href={"/"}>
                            <Image src={logo} alt={`Airitreats Logo`} fill />
                        </Link>
                    </div>
                </div>
                {/* Right Nav */}
                <div className={styles.right}>
                    {/* Search */}
                    <HiOutlineSearch />
                    {/* Snipcart */}
                    <a href="#" className="snipcart-checkout cartContainer">
                        <HiShoppingCart />
                        <span className="snipcart-items-count"></span>
                    </a>
                </div>

            </div>
            {/* Nav is toggled with the hamburger and receives its link from links prop */}
            <nav className={`${open && styles.active} ${styles.nav}`} ref={navRef}>
                <ul className={``}>
                    {/* Get Nav Links in Prismic from Settings Doc */}
                    {links.map((data: any) => {
                        return (
                            <li className={styles.link} key={data.label}>
                                <PrismicNextLink field={data.link} onClick={() => setOpen(false)}>{data.label}</PrismicNextLink>
                            </li>
                        )
                    }
                    )}
                </ul>
            </nav>
        </>
    )
}
