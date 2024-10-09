const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require("md5");
import { NextRequest, NextResponse } from "next/server";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
    // apiKey: "a32abf983b8e0790bc4824de341af935-us11",
    // server: "us11",
});

// export async function GET() {
//     const response = await mailchimp.ping.get();
//     return NextResponse.json(response)
// }


let listId = "96e5289e84"


export async function POST(req: NextRequest) {
    const email: { email: string, toLowerCase: Function } = await req.json()
    const subscriberHash = md5(email.toLowerCase());
    const response = await mailchimp.lists.addListMember(listId, {
        email_address: email.email,
        status: "subscribed",
    });
    console.log(response)
    return NextResponse.json(response)

}














// export async function GET() {
//     // const email: { email: string } = await req.json()
//     const response = await mailchimp.lists.addListMember(listId, {
//         email_address: subscribingUser.email,
//         status: "subscribed",
//         merge_fields: {
//             FNAME: subscribingUser.firstName,
//             LNAME: subscribingUser.lastName
//         }
//     });
//     console.log(response)
//     return NextResponse.json(response)

// }

