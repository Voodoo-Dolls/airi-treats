
import { createClient } from "@/prismicio";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";
import styles from "./Header.module.scss"
import { headerFont } from "@/app/fonts";
import MobileNav from "./Mobile Nav/MobileNav";
import Notification from "./Notification/Notification";

// import { headerFont } from "@/app/layout";
// import { useState, useEffect } from 'react'



export default async function Header() {
    const client = createClient();

    const settings = await client.getSingle('settings')
    return (
        <>
            <header className={styles.header}>
                <h1 className="sr-only">{settings.data.site_title}</h1>
                {/* <Link href={"/"}>
                <h1 className={`${headerFont.className} `}>{settings.data.site_title}</h1>
            </Link> */}
                {settings.data.notification && <Notification text={settings.data.notification_text} />}
                <Navbar links={settings.data.links} logo={settings.data.site_logo.url} />
                <MobileNav links={settings.data.links} logo={settings.data.site_logo.url} />
            </header>
        </>
    )
}
