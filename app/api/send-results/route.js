import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { email, results } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // 🔹 Configure Nodemailer (Use Hostinger SMTP settings)
        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com", // ✅ Hostinger SMTP server
            port: 587, // ✅ Use 587 for TLS
            secure: false, // ✅ False for STARTTLS
            auth: {
                user: "info@youcontinuum.com", // ✅ Your Hostinger email
                pass: process.env.EMAIL_PASSWORD, // 🔑 Use environment variable instead of plaintext
            },
        });

        // 🔹 Format Email Content in HTML (Updated Message - No First Name)
const emailContent = `
<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; line-height: 1.6;">
    <h2 style="color: #2c3e50;">Your Self-Care Compass Results + The YOU Continuum Community</h2>
    
    <p>Thank you for your interest in The YOU Continuum! Attached, you’ll find the results of your Self-Care Compass—your personal guide to identifying the life domain that needs your attention most right now.</p>

    <p>Your self-care journey starts here. But remember, life is an evolution. Your values shift, your needs change, and self-care isn’t a one-time fix—it’s an ongoing, dynamic process. The YOU Continuum is here to help you navigate those shifts with clarity and intention.</p>

    <p>You are now part of a growing community focused on intentional, value-based self-care. You’ll be added to our listserv, where we’ll share:</p>

    <ul style="padding-left: 20px;">
        <li>✅ Blog updates exploring the intersections of values, self-care, and personal growth</li>
        <li>✅ Exclusive resources to help you deepen your self-awareness and well-being</li>
        <li>✅ Updates on the evolution of The YOU Continuum</li>
    </ul>

    <p>We’d also love to hear from you! There will be opportunities to provide feedback on tools and future iterations of The YOU Continuum, shaping this journey for yourself and others. Stay tuned for ways to get involved.</p>

    <p><strong>For now, take a moment to reflect on your Self-Care Compass results.</strong> What’s one small step you can take today to align your actions with your values?</p>

    <p>We’re excited to be part of your journey. More to come soon!</p>

    <p>With care,</p>
    <p><strong>Rachel Anderson & Team</strong></p>
</div>
`;

// 🔹 Prepare Email Options (Secure and Structured)
const mailOptions = {
from: '"Self-Care Compass" <info@youcontinuum.com>',
to: email, // ✅ Sending to the user
subject: "Your Self-Care Compass Results + The YOU Continuum Community",
html: emailContent, // ✅ Now using the updated email content
replyTo: "info@youcontinuum.com", // ✅ Ensures replies come back to you
headers: {
    "X-Priority": "3", // Normal priority
    "X-Mailer": "YOU Continuum Mail Service", // Identifies your email sender
}
};

        // 🔹 Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("❌ Email sending failed:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}