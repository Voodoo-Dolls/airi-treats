import * as React from 'react';

interface EmailTemplateProps {
    message: string,
    email: string,
    name: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name, message, email
}) => (
    <div>
        <p>Hi my name is: {name}</p>
        <p>{message}</p>
        <p>From: {email}</p>
    </div>
);
