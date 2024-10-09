'use client'
import { useState, FormEvent } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);

    async function handleSubscribe(e) {
        e.preventDefault()
        if (validateEmail(email)) {
            const response = await fetch(`/api/newsletter`, {
                method: "POST",
                body: JSON.stringify({ email: `${email}` })
            })
        }
        else {
            setIsValid(false);
        }

    }

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
                    type="email"
                    placeholder="What is your email address?"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                />
                {!isValid && (
                    <p>Hello</p>
                )}
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