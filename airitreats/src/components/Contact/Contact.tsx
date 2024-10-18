'use client'

import { useState } from "react"


const initValues = {
    name: "",
    email: "",
    message: ""
}

const initstate = { values: initValues }
export default function Contact() {
    const [state, setState] = useState(initstate)
    const { values } = state

    const handleChange = ({ target }: any) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }));
    return (
        <>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={values.name} onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={values.email} onChange={handleChange} />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" value={values.message} onChange={handleChange} />
            </form>
            <div>
                <p>Name:{values.name}</p>
                <p>Email:{values.email}</p>
                <p>Message:{values.message}</p>
            </div>
        </>
    )
}
