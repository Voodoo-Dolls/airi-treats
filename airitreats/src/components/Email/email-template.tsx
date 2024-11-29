
import {
    Body,
    Container,
    Head,
    Html,
    Img,
    Row,
    Section,
    Text,
} from "@react-email/components";


interface EmailTemplateProps {
    message: string,
    email: string,
    name: string,
    phone: string
}


export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name, message, email, phone
}) => (
    <Html>
        <Head />
        <Body style={main}>
            <Container style={container}>
                <Section>
                    <Img
                        src={`${process.env.VERCEL_URL}/images/logo.png`}
                        width="150"
                        height="150"
                        alt="Airi Treats"
                    />
                </Section>
                <Section style={{ paddingBottom: "20px" }}>
                    <Row>
                        <Text style={heading}>Here&apos;s what {name} wrote</Text>
                        <Text style={review}>{message}</Text>
                    </Row>
                    <Text style={paragraph}>Email: {email}</Text>
                    {phone && <Text style={paragraph}>Phone: {phone}</Text>}
                </Section>
            </Container>
        </Body>
    </Html >
);


const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    maxWidth: "100%",
};


const heading = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
};

const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
};

const review = {
    ...paragraph,
    padding: "24px",
    backgroundColor: "#f2f3f3",
    borderRadius: "4px",
};
