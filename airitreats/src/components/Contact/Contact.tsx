'use client'
import { useState } from "react"
import { toast } from "sonner";
import styles from "./Contact.module.scss";


export default function Contact() {
    // States
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    // SUBMIT EVENT HANDLER
    async function handleSubmit(e: any) {
        e.preventDefault()
        // Checks for Valid Email and Not in Progress
        if (validateEmail(email) && !sending) {
            setSending(true)
            if (!sent) {
                // Sends params to endpoint for Resend API then displays results
                let res = await sendEmail(email, phone, name, message)
                if (res.status === 200) {
                    toast.success(res.message)
                    setSent(true)
                } else {
                    toast.error(res.message)
                    setSending(false)
                }
            } else {
                toast.warning("Sending in Progress")
            }
        } else if (sent) {
            toast.warning("Email Already Sent")
        } else {
            toast.warning("Error")
        }
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
    function validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (

        <>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div>
                    <h2>Contact Us</h2>
                    <p>We are open to suggestions and questions. Please feel free to contact us by filling in the form below.</p>
                </div>
                {/* Email */}
                <div>
                    <h3>*Email</h3>
                    <input
                        type="text"
                        placeholder="What is your email address?"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        required
                    />
                </div>
                {/* Subject */}
                <div>
                    <h3>Phone (Optional)</h3>
                    <input
                        type="tel"
                        placeholder="What is your phone number?"
                        onChange={(e) => setPhone(e.target.value)}
                        name="subject"
                    />
                </div>
                {/* Name */}
                <div>
                    <h3>*Name</h3>
                    <input
                        type="text"
                        placeholder="What is your name?"
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        required
                    />
                </div>
                {/* Message */}
                <div>
                    <h3>*Message</h3>
                    <textarea
                        placeholder="What's your message?"
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        minLength={20}
                        required
                    />
                </div>
                {/* CHECK FOR INVALID EMAIL LATER */}

                <div className={styles.buttonContainer}>
                    {!sent ?
                        <button
                            type="submit"
                            className="yellowBtn"
                        >
                            Let&apos;s Chat!
                        </button>
                        :
                        <button
                            disabled
                            className="yellowBtn"
                        >
                            Message Sent!
                        </button>
                    }
                </div>
            </form>


        </>

    )
}
