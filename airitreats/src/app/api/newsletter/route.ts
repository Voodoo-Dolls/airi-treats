const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require("md5");
import { NextRequest, NextResponse } from "next/server";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

// UPDATE LIST ID FOR CLIENT
let listId = "96e5289e84"


export async function POST(req: NextRequest) {
    const email: { email: string, toLowerCase: Function } = await req.json()
    const subscriberHash = md5(email.email.toLowerCase());
    // CHECK IF EMAIL IS SUBSCRIBED
    try {
        const response = await mailchimp.lists.getListMember(
            listId,
            subscriberHash
        );
        if (response.status == "subscribed") {
            return NextResponse.json({ body: 'Email is already subscribed', status: 500 })
        }

    } catch (e: any) {
        if (e.status === 404) {
            // SUBMIT
            try {
                const response = await mailchimp.lists.addListMember(listId, {
                    email_address: email.email,
                    status: "subscribed",
                });

                return NextResponse.json({ body: "Successfully Subscribed", status: 200 }, { status: 200 })
            }
            catch (e: any) {
                return NextResponse.json({ body: "Invalid Email", status: 500 }, { status: 500 })
            }
        }
    }
    return NextResponse.json({ body: "Error, Please Try Again Later", status: 400 }, { status: 400 })

}

