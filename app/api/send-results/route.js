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

        // 🔹 Format Email Content in HTML
        const emailContent = `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
                <h2 style="color: #2c3e50;">Your Self-Care Compass Results</h2>
                <p>Thank you for using the Self-Care Compass! Here are your top priority results:</p>
                
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

                <p style="color: #555;">We appreciate your journey toward self-care. If you have any questions, feel free to reply to this email!</p>
                <p><strong>The Self-Care Compass Team</strong></p>
            </div>
        `;

        // 🔹 Prepare Email Options
        const mailOptions = {
            from: '"Self-Care Compass" <info@youcontinuum.com>',
            to: email, // ✅ Sending to the user
            subject: "Your Self-Care Compass Results",
            html: emailContent, // ✅ Now using HTML instead of raw JSON
            replyTo: "info@youcontinuum.com" // ✅ Ensures replies come back to you
        };

        // 🔹 Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("❌ Email sending failed:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}