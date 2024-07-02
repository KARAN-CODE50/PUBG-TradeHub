import * as React from 'react';

interface EmailTemplateProps {
  firstName: string,
  message: string,
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, message, email
}) => (
  <div>
    <h1>You have recieved a mail from {firstName}</h1>
    <h2>Sender's Email: {email}</h2>
    <p>Message: {message}</p>
  </div>
);
