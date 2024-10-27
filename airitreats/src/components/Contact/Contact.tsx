'use client'
import { useState } from "react"
import { Toaster, toast } from "sonner";


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

        <div style={{ background: "white" }}>
            <form onSubmit={handleSubmit} >
                {/* Email */}
                <div>
                    <p>Email</p>
                    <input
                        type="text"
                        placeholder="What is your email address?"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                    />
                </div>
                {/* Subject */}
                <div>
                    <p>Subject</p>
                    <input
                        type="text"
                        placeholder="What is your email address?"
                        onChange={(e) => setSubject(e.target.value)}
                        name="subject"
                    />
                </div>
                {/* Name */}
                <div>
                    <p>Name</p>
                    <input
                        type="text"
                        placeholder="What is your name?"
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                    />
                </div>
                {/* Message */}
                <div>
                    <p>Message</p>
                    <textarea
                        placeholder="What is your email address?"
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                    />
                </div>
                {/* CHECK FOR INVALID EMAIL LATER */}
                <button
                    type="submit"
                >
                    Send!
                </button>
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
