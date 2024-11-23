'use client'
import { useState } from "react"
import { Toaster, toast } from "sonner";
import styles from "./Contact.module.scss";


export default function Contact() {
    // States
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    // SUBMIT EVENT HANDLER
    async function handleSubmit(e: any) {
        e.preventDefault()
        console.log(sendEmail(email, phone, name, message))
        toast.success("")
    }

    // RESEND ENDPOINT
    const sendEmail = async (email: string, phone: string, name: string, message: string) => {
        let load = toast.loading('Sending Email')
        let emailObj = {
            email: email,
            phone: phone,
            name: name,
            message: message
        }
        const response = await fetch(`/api/send`, {
            method: "POST",
            body: JSON.stringify(emailObj)
        })
        toast.dismiss(load)
        return response.json()
    }
    // EMAIL VALIDATION
    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    return (

        <div className={styles.contactContainer}>
            <div className={styles.contactForm}>
                <div className={styles.contactIntro}>
                    <h2>Contact Us</h2>
                    <p>We are open to suggestions and questions. Please feel free to contact us by filling in the form below.</p>
                </div>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <div className={styles.fieldContainer}>
                        {/* Email */}
                        <div>
                            <h3>Email</h3>
                            <input
                                type="text"
                                placeholder="What is your email address?"
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                            />
                        </div>
                        {/* Subject */}
                        <div>
                            <h3>Phone</h3>
                            <input
                                type="phone"
                                placeholder="What is your phone number?"
                                onChange={(e) => setPhone(e.target.value)}
                                name="subject"
                            />
                        </div>
                        {/* Name */}
                        <div>
                            <h3>Name</h3>
                            <input
                                type="text"
                                placeholder="What is your name?"
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                            />
                        </div>
                        {/* Message */}
                        <div>
                            <h3>Message</h3>
                            <textarea
                                placeholder="What is your email address?"
                                onChange={(e) => setMessage(e.target.value)}
                                name="message"
                            />
                        </div>
                        {/* CHECK FOR INVALID EMAIL LATER */}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button
                            type="submit"
                            className="yellowBtn"
                        >
                            Let&apos;s Chat!
                        </button>
                    </div>
                </form>
            </div>

            <div className={styles.hoursContainer}>
                <h2>Hours of Operation</h2>
                <div>
                    <h3>Monday to Friday</h3>
                    <p>9:00 A.M. to 5:00 P.M.</p>
                </div>
                <div>
                    <h3>Saturday and Sunday</h3>
                    <p>10:00 A.M. to 6:00 P.M.</p>
                </div>
                <div>
                    <p>We’d love to see you! Check out our <a href="https://www.instagram.com/airitreats/" target="_blank">Instagram</a> or <a href="https://www.facebook.com/profile.php?id=61553694755284" target="_blank">Facebook</a> for the latest updates.</p>
                </div>
            </div>
            {/* <div>
                <h2>Debugging</h2>
                <p>Name:{name}</p>
                <p>Phone:{phone}</p>
                <p>Email:{email}</p>
                <p>Message:{message}</p>
            </div> */}


        </div>



    )
}
