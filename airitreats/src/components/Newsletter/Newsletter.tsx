'use client'
import { useState, FormEvent } from "react";
import { Toaster, toast } from "sonner";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    // SUBSCRIBE EVENT HANDLER
    async function handleSubscribe(e: any) {
        e.preventDefault()
        if (validateEmail(email)) {
            subscribe(email).then((res) => {
                if (res.status == 200) {
                    toast.success(res.body)
                }
                else {
                    toast.error(res.body)
                }
            })
        }
        else {
            toast.error("Invalid Email")
        }

    }
    // MAILCHIMP ENDPOINT
    const subscribe = async (email: string) => {
        let load = toast.loading('Adding Email')
        const response = await fetch(`/api/newsletter`, {
            method: "POST",
            body: JSON.stringify({ email: `${email}` })
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
        <form onSubmit={handleSubscribe} >
            <div >
                <input
                    placeholder="What is your email address?"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                />
                {/* CHECK FOR INVALID EMAIL LATER */}
                <button
                    type="submit"

                >
                    Subscribe
                </button>
                <p>{email}</p>
            </div>
        </form>
    )

}