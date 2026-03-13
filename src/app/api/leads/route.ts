import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { plotSize, location, name, phone } = body;

        // 1. Basic Validation
        if (!name || !phone || !plotSize || !location) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 2. Notify Builder via Email
        // Replace with the builder's actual email
        const builderEmail = process.env.BUILDER_EMAIL || 'your-email@example.com';

        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from: 'Leads <onboarding@resend.dev>',
                to: builderEmail,
                subject: `New Lead: ${name} is interested!`,
                html: `
                    <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                        <h2 style="color: #d4af37;">New Project Inquiry</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Plot Size:</strong> ${plotSize}</p>
                        <p><strong>Preferred Location:</strong> ${location}</p>
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                        <p style="font-size: 12px; color: #666;">This lead was captured from your website's "Get Quote" form.</p>
                    </div>
                `,
            });
        }

        // 3. (Optional) Log to Database could go here
        console.log('Lead processed:', { name, phone, plotSize, location });

        return NextResponse.json({ success: true, message: 'Lead captured successfully' });

    } catch (error) {
        console.error('Lead submission error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
