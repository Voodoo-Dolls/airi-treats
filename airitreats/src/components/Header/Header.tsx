
import { createClient } from "@/prismicio";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";
import styles from "./Header.module.scss"
// import { useState, useEffect } from 'react'
export default async function Header() {
    const client = createClient();

    const settings = await client.getSingle('settings')

    // // Hydration
    // const [isClient, setIsClient] = useState(false)
    // useEffect(() => {
    //     setIsClient(true)
    // }, [])

    return (
        <header className={styles.container}>
            <Link href={"/"}>
                <h1>{settings.data.site_title}</h1>
            </Link>
            <Navbar />
        </header>
    )
}
