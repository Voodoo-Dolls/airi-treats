'use client'
import { useState } from "react"
import { Toaster, toast } from "sonner";
import styles from "./Contact.module.scss";


export default function Contact() {
    // States
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    // SUBMIT EVENT HANDLER
    async function handleSubmit(e: any) {
        e.preventDefault()
        // console.log(sendEmail(email, subject, name, message))
        toast.success("")
    }

    // RESEND ENDPOINT
    const sendEmail = async (email: string, subject: string, name: string, message: string) => {
        let load = toast.loading('Sending Email')
        let emailObj = {
            email: email,
            subject: subject,
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
                        <h3>Subject</h3>
                        <input
                            type="text"
                            placeholder="What is your email address?"
                            onChange={(e) => setSubject(e.target.value)}
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
                    >
                        Let's Chat!
                    </button>
                </div>
            </form>
            <div>
                <h2>Debugging</h2>
                <p>Name:{name}</p>
                <p>Subject:{subject}</p>
                <p>Email:{email}</p>
                <p>Message:{message}</p>
            </div>
        </div>


    )
}
