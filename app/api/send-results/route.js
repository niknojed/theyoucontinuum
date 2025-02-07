import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { email, results } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // 🔹 Configure Nodemailer with Brevo's SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,  // ✅ Use Brevo SMTP
            port: process.env.EMAIL_PORT,  // ✅ 587 for TLS
            secure: false, // ❌ Must be `false` for port 587 (TLS)
            auth: {
                user: process.env.EMAIL_USER,  
                pass: process.env.EMAIL_PASSWORD,  
            },
        });

        // 🔹 Format Email Content
        const emailContent = `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
                <h2 style="color: #2c3e50;">Your Self-Care Compass Results + The YOU Continuum Community</h2>
                <p>Thank you for your interest in The YOU Continuum! Attached, you’ll find the results of your Self-Care Compass—your personal guide to identifying the life domain that needs your attention most right now.</p>

                ${results.map(result => `
                    <div style="border-bottom: 1px solid #ddd; padding-bottom: 15px; margin-bottom: 20px;">
                        <h3 style="color: #16a085;">${result.icon} ${result.name}</h3>
                        <p><strong>Impact Zone:</strong> ${result.impactZone}</p>
                        <p><strong>Description:</strong> ${result.description}</p>
                        <p><strong>Priority Tips:</strong></p>
                        <ul style="padding-left: 20px;">
                            ${result.priorityTip.map(tip => `<li style="margin-bottom: 5px;">${tip}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}

                <p>✅ You are now part of a growing community focused on intentional, value-based self-care.</p>
                <p>We’ll share blog updates, exclusive resources, and insights on The YOU Continuum’s evolution.</p>

                <p style="color: #555;">We’re excited to be part of your journey. More to come soon!</p>
                <p><strong>Rachel Anderson & Team</strong></p>
            </div>
        `;

        // 🔹 Prepare Email Options
        const mailOptions = {
            from: process.env.EMAIL_FROM,  // ✅ Uses Brevo sender email
            to: email,
            subject: "Your Self-Care Compass Results + The YOU Continuum Community",
            html: emailContent,
            replyTo: "info@youcontinuum.com",  // ✅ Ensures replies come back to you
        };

        // 🔹 Send the Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "✅ Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("❌ Email sending failed:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}