'use client'
import { useState } from "react";
import styles from "./Notification.module.scss"
import { IoIosClose } from "react-icons/io";


export default function Notification({ text }: any) {
    const [active, setActive] = useState(true);
    return (
        <>
            {active && <div className={`${styles.container}`}>
                <div className={`container ${styles.content}`}>
                    <p>
                        {text}
                    </p>
                    <IoIosClose onClick={() => {
                        setActive(false);
                    }} />
                </div>
            </div>}

        </>
    )
}
