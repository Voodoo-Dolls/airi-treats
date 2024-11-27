import { EmailTemplate } from "@/components/Email/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;



export async function POST(req: NextRequest) {
    const { email, name, message, phone } = await req.json();
    try {
        if (name == "" || email == "") {
            throw new Error("Missing Fields")
        }
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['edmontonwebweavers@gmail.com'],
            subject: "Airi Treats",
            react: EmailTemplate({ email, name, message, phone }),
        });
        return NextResponse.json({ message: "Email Sent!", status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: "Email Failed", status: 400 });
    }

}
