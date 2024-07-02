import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const {name, email, message} = await req.json();

    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'devflex.studio@gmail.com',
            subject: `Mail from ${name} - PUBG TradeHub`,
            react: EmailTemplate({ firstName: name, message: message, email: email }),
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({data, send: "Email sent succesfully", name, email, message});
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
