import { EmailTemplate } from "@/components/Email/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;



export async function POST(req: NextRequest) {
    const { email, name, message, phone } = await req.json();
    // console.log(email, message);
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['edmontonwebweavers@gmail.com'],
            subject: "Airitreats",
            react: EmailTemplate({ email, name, message, phone }),
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }

}
