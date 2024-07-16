import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        // Ensure EmailTemplate returns a React element
        const emailContent = EmailTemplate({ firstName: name, message: message, email: email });

        if (!emailContent) {
            throw new Error('Email content is invalid');
        }

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'devflex.studio@gmail.com',
            subject: `Mail from ${name} - PUBG TradeHub`,
            react: emailContent,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ data, send: "Email sent successfully", name, email, message });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
