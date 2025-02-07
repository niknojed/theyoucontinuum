"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Drawer from "../../components/Drawer"; // Import the Drawer Component

// Life Domain Icons
const domainIcons = {
  "Health & Wellness": "🧘‍♂️",
  "Spirituality & Beliefs": "🛐",
  "Career & Ambition": "💼",
  "Personal Growth & Education": "📚",
  "Finances": "💰",
  "Recreation & Leisure": "🎾",
  "Community & Contribution": "🤝",
  "Family & Relationships": "👨‍👩‍👧",
  "Environment & Home": "🏡",
};

export default function SummaryResultsPage() {
  const [priorityResults, setPriorityResults] = useState([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false); // State to control Drawer visibility
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const resultsRef = useRef(null); // Ref for PDF generation
  const router = useRouter();

  const impactZones = [
    {
      name: "Healthy Zone",
      range: [1, 25],
      definition: "All systems functioning well, requiring only basic maintenance and occasional reflection.",
      explanation: "You are thriving. Focus on reinforcing routines that support your health and well-being. Continue to honor your values and monitor those routines, remaining flexible when new needs arise."
    },
    {
      name: "Caution Zone",
      range: [26, 50],
      definition: "Some areas may need attention soon to prevent imbalances.",
      explanation: "Self-care isn’t one-size-fits-all—it’s about finding what works for YOU. Reflect on what changes may help you rebalance and maintain long-term well-being."
    },
    {
      name: "Action Zone",
      range: [51, 75],
      definition: "An imbalance is present. Adjustments are needed to realign with your well-being.",
      explanation: "Identify the areas where you're feeling the most strain. Focus on practical steps to shift back into balance and build habits that support your self-care."
    },
    {
      name: "Urgent Zone",
      range: [76, 100],
      definition: "There are significant stressors. Consider taking immediate steps to support yourself.",
      explanation: "Your well-being is under strain. Address key stress points now and seek out tools, support, and adjustments to stabilize your situation."
    },
    {
      name: "Crisis Zone",
      range: [101, Infinity],
      definition: "Your well-being is at risk. It's important to seek support and prioritize care.",
      explanation: "This level of stress or imbalance requires immediate attention. Prioritize actions that restore your well-being and seek professional or community support as needed."
    }
  ];

  useEffect(() => {
    const rankings = JSON.parse(localStorage.getItem("rankings")) || [];
    const impactScores = JSON.parse(localStorage.getItem("impactScores")) || {};
    const priorityDescriptions = {
      "Recreation & Leisure": "Self-care isn’t one-size-fits-all—it’s about finding what works for YOU. Taking time to enjoy life is essential for maintaining balance. This domain highlights hobbies, travel, relaxation, and other activities that bring you joy and help you recharge. Whether it’s a weekend getaway or spending time on a creative pursuit, recreation nurtures your well-being. When focusing on the Recreation & Leisure domain, take a moment to set meaningful goals. Think about what you want to achieve, what brings you the most joy, the specific steps you’ll take, and how you’ll keep yourself motivated and accountable. Identify what you will give up to more effectively focus on your personal self-care. Remember—this is your self-care journey, so it’s okay to take the scenic route.",
      "Health & Wellness": "Self-care isn’t one-size-fits-all—it’s about finding what works for YOU. Your physical and mental health lay the groundwork for your overall well-being. This domain covers fitness, nutrition, sleep, and self-care practices. Taking care of your body and mind ensures you feel energized and resilient, able to take on life’s challenges. When focusing on the Health & Wellness domain, take a moment to set meaningful goals. Think about what you want to achieve, the timeline for getting there, the specific steps you’ll take, and how you’ll keep yourself motivated and accountable. Identify what you will give up to more effectively focus on your personal self-care. Remember—this is your self-care journey, so it’s okay to take the scenic route.",
      "Career & Ambition": "Self-care isn’t one-size-fits-all—it’s about finding what works for YOU. Your career and job satisfaction play a crucial role in your life’s fulfillment. This domain focuses on professional development, work-life integration, income, and overall happiness in your occupation. Whether it’s advancing in your current career or transitioning to a new one, this domain helps you achieve alignment with your professional goals. When focusing on the Career & Ambitions domain, take a moment to set meaningful goals. Think about what you want to achieve, the timeline for getting there, the specific steps you’ll take, and how you’ll keep yourself motivated and accountable. Identify what you will give up to more effectively focus on your personal self-care. Remember—this is your self-care journey, so it’s okay to take the scenic route.",
      "Family & Relationships": "Self-care isn’t one-size-fits-all—it’s about finding what works for YOU. Relationships are at the heart of human experience. Family dynamics, romantic relationships, friendships, colleagues, and support networks shape your emotional landscape. This domain emphasizes the importance of connecting with others and maintaining healthy relationships. When focusing on the Family & Relationships domain, self-care isn’t just about “me time”; it’s also about creating meaningful “we time.” Whether you’re nurturing a lifelong bond or building new connections, it’s worth investing time and energy into the relationships that matter most. Identify what you will give up to more effectively focus on your personal self-care. Remember—this is your self-care journey, so it’s okay to take the scenic route.",
      "Personal Growth & Education": "Self-care isn’t one-size-fits-all—it’s about finding what works for YOU. Lifelong learning helps you grow intellectually and emotionally. This domain encourages skill development, creativity, self-improvement, and the pursuit of knowledge. Whether it's reading, attending workshops, or exploring new ideas, personal growth is a continuous journey. When focusing on the Personal Growth & Education domain, take a moment to set meaningful goals. Think about what you want to achieve, the timeline for getting there, the specific steps you’ll take, and how you’ll keep yourself motivated and accountable. Identify what you will give up to more effectively focus on your personal self-care. Remember—this is your self-care journey, so it’s okay to take the scenic route.",
      "Finances": "Self-care isn’t one-size-fits-all—it’s about finding what works for YOU. Your financial health has a major impact on your peace of mind and future stability. This domain includes managing your finances, budgeting, saving, investing, and debt management. Achieving financial security enables you to feel in control and empowers you to make informed life choices. When focusing on the Finances domain, take a moment to set meaningful goals. Think about what you want to achieve, the timeline for getting there, the specific steps you’ll take, and how you’ll keep yourself motivated and accountable. Identify what you will give up to more effectively focus on your personal self-care. Remember—this is your self-care journey, so it’s okay to take the scenic route.",
      "Spirituality & Beliefs": "Self-care isn’t one-size-fits-all—it’s about finding what works for YOU. Spiritual practices, values, and beliefs provide a sense of purpose and meaning. This domain focuses on connecting with your deeper self, engaging in religious or spiritual activities, and exploring what gives your life direction. Cultivating a sense of spirituality can help you navigate challenges and live with intention. When focusing on the Spirituality & Belief System domain, self-care isn’t just about activities or tangible outcomes; it’s also about creating meaningful purpose and unapologetic beliefs that bring YOU peace. Identify what you will give up to more effectively focus on your personal self-care. Remember—this is your self-care journey, so it’s okay to take the scenic route.",
      "Community & Contribution": "Self-care isn’t one-size-fits-all—it’s about finding what works for YOU. Giving back to others and being involved in your community enhances both personal growth and collective well-being. This domain covers volunteering, community involvement, and social responsibility. The impact you have on society contributes to your sense of purpose and belonging. When focusing on the Community & Contribution domain, take a moment to set meaningful goals. Think about what you want to achieve, what brings you the most joy, the specific steps you’ll take, and how you’ll keep yourself motivated and accountable. Identify what you will give up to more effectively focus on your personal self-care. Remember—this is your self-care journey, so it’s okay to take the scenic route.",
      "Environment & Home": "Self-care isn’t one-size-fits-all—it’s about finding what works for YOU. Your physical surroundings, both indoor and outdoor, play a key role in how you feel and thrive. This domain includes living conditions, home organization, safety, neighborhood, work environment, and your connection with nature. Whether it’s creating a peaceful home or reducing your environmental footprint, your environment supports your overall happiness and security. When focusing on the Environment & Home domain, take a moment to set meaningful goals. Think about what you want to achieve, the timeline for getting there, the specific steps you’ll take, and how you’ll keep yourself motivated and accountable. Identify what you will give up to more effectively focus on your personal self-care. Remember—this is your self-care journey, so it’s okay to take the scenic route."
    };

    const priorityTips = {
      "Health & Wellness": [
        "To boost your overall wellness, reflect on what you need the most. Consider the following suggestions:",
        "1. **Schedule Those Overdue Checkups**\nYes, this includes that dentist appointment you’ve been dodging. Are you prioritizing your physical and mental health? Have you found the right therapist? Are your screenings up to date? Catching things early is way easier than dealing with them later.",
        "2. **Tap Into Tech for Motivation**\nUse fitness apps, meditation tools, and food trackers to stay on top of your health. Bonus points if you actually use them!",
        "3. **Or Keep It Low-Tech**\nA simple habit tracker, journal, or accountability buddy can be just as effective as any app.",
        "4. **Stress Less, Laugh More**\nFind what relaxes you—whether it’s a hot bath, yoga, or laughing at your favorite show.",
        "5. **Spread the Love to Other Domains, Too**\nHealth influences everything. A workout with friends can also be social time. Planning meals helps both your nutrition and finances. Small habits lead to big results!",
        "Self-care is personal, so start small, make it fun, and remember—progress, not perfection."
      ],
    
      "Career & Work": [
        "To boost your overall wellness, reflect on what you need the most. Consider the following suggestions:",
        "1. **Check in on Your Career Path**\nUpdate your resume, revisit your professional goals, and check in with your mentors.",
        "2. **Leverage Tech to Stay Ahead**\nUse productivity apps, project management tools, and online learning platforms to grow your skills.",
        "3. **Go Old School When It Counts**\nUse a simple planner, schedule mentor meetings, or physically organize your workspace for better focus.",
        "4. **Stress Less, Aim Higher**\nSuccess should never come at the cost of burnout. Find ways to recharge and celebrate your wins.",
        "5. **Cross Over Into Other Domains**\nNetworking can enhance relationships, financial planning affects job security, and work-life balance impacts your home life.",
        "Self-care is personal, so start small, make it fun, and remember—progress, not perfection."
      ],
    
      "Family & Relationships": [
        "To boost your overall wellness, reflect on what you need the most. Consider the following suggestions:",
        "1. **Check in on Your Relationship Health**\nReconnect with loved ones. A simple message or call can go a long way.",
        "2. **Use Tech to Stay Close**\nVideo calls, shared calendars, and even online games can strengthen bonds despite distance.",
        "3. **Get Nostalgic with Connection**\nWrite letters, schedule in-person coffee dates, or start a family tradition.",
        "4. **Stress Less, Love More**\nCreate low-pressure ways to spend time with loved ones—like a walk, cooking together, or a casual chat.",
        "5. **Let Relationships Boost Other Domains**\nA strong support system improves mental health, career opportunities, and personal growth.",
        "Self-care is personal, so start small, make it fun, and remember—progress, not perfection."
      ],
    
      "Personal Growth & Education": [
        "To boost your overall wellness, reflect on what you need the most. Consider the following suggestions:",
        "1. **Schedule Time for Your Learning Goals**\nFinally start that course, book, or skill you’ve been meaning to explore.",
        "2. **Access Tech for Learning**\nTry educational apps, podcasts, or online courses to fit learning into your daily life.",
        "3. **Or Go Analog and Hands-On**\nJoin a book club, attend local workshops, or find a hands-on project to develop new skills.",
        "4. **Stress Less, Learn More**\nLearning should be enjoyable—incorporate topics that genuinely excite you.",
        "5. **Let Growth Fuel Other Areas of Life**\nNew skills can improve career success, relationships, and even finances.",
        "Self-care is personal, so start small, make it fun, and remember—progress, not perfection."
      ],
    
      "Finances": [
        "To boost your overall wellness, reflect on what you need the most. Consider the following suggestions:",
        "1. **Give Your Finances a Check-Up**\nRevisit your budget, track your spending, and make sure you’re financially secure.",
        "2. **Get Tech to Do the Heavy Lifting**\nUse budgeting apps, investment platforms, and automation tools to stay on track.",
        "3. **Keep It Simple, Stay Accountable**\nTry old-school budgeting with cash envelopes, spreadsheets, or regular financial check-ins.",
        "4. **Stress Less, Save More**\nFind ways to make financial planning feel rewarding—set clear goals and celebrate small wins.",
        "5. **Make Your Money Work Across the Board**\nSmart financial habits can free up resources for travel, education, and long-term security.",
        "Self-care is personal, so start small, make it fun, and remember—progress, not perfection."
      ],
    
      "Recreation & Leisure": [
        "To boost your overall wellness, reflect on what you need the most. Consider the following suggestions:",
        "1. **Dust Off Your Fun Goals**\nMake time for hobbies, travel, and creative pursuits that bring you joy.",
        "2. **Get a Digital Boost for Your Playtime**\nUse apps for travel planning, hobby inspiration, or outdoor adventures.",
        "3. **Or Go Completely Unplugged**\nTry board games, hiking, painting, or simply relaxing without screens.",
        "4. **Stress Less, Relax More**\nYour leisure time should be guilt-free. Schedule downtime just as you would other priorities.",
        "5. **Let Fun Fuel Other Areas of Life**\nHobbies improve relationships, mental health, and personal growth.",
        "Self-care is personal, so start small, make it fun, and remember—progress, not perfection."
      ],
    
      "Spirituality & Beliefs": [
        "To boost your overall wellness, reflect on what you need the most. Consider the following suggestions:",
        "1. **Reconnect with Your Inner Compass**\nReflect on your spiritual journey and values—what still resonates with you?",
        "2. **Use Tech to Find Your Zen**\nTry meditation apps, guided affirmations, or spiritual discussion groups.",
        "3. **Disconnect to Reconnect**\nJournaling, reading spiritual texts, or setting aside reflection time can be powerful practices.",
        "4. **Stress Less, Seek Peace**\nYour practice should bring you comfort—lean into what works for you.",
        "5. **Let Your Beliefs Enrich Other Areas**\nSpiritual grounding can improve relationships, personal growth, and overall well-being.",
        "Self-care is personal, so start small, make it fun, and remember—progress, not perfection."
      ],
    
      "Community & Contribution": [
        "To boost your overall wellness, reflect on what you need the most. Consider the following suggestions:",
        "1. **Check-In With Your Community Connection**\nFind local opportunities to volunteer, give back, or build stronger social ties.",
        "2. **Leverage Social Media for Good**\nUse your online presence to support causes, share knowledge, or organize positive initiatives.",
        "3. **Show Up**\nAttend community events, join local groups, or start small acts of kindness in your neighborhood.",
        "4. **Stress Less, Give Back**\nHelping others is a powerful way to shift focus and improve your own well-being.",
        "5. **Spread the Love and Watch It Multiply**\nStrong community connections enhance emotional well-being, career opportunities, and social impact.",
        "Self-care is personal, so start small, make it fun, and remember—progress, not perfection."
      ],
    
      "Environment & Home": [
        "To boost your overall wellness, reflect on what you need the most. Consider the following suggestions:",
        "1. **Tackle That Home Maintenance Checklist**\nDeclutter, organize, and fix small issues in your living space.",
        "2. **Tech Up Your Home Life**\nUse smart home gadgets to improve safety, sustainability, and comfort.",
        "3. **Low-Tech, High-Impact Changes**\nSimple practices like cleaning, organizing, or adding plants can enhance your space.",
        "4. **Stress Less, Clean More**\nA tidy home can promote mental clarity and reduce stress.",
        "5. **The Domino Effect of a Well-Cared-For Home**\nYour home environment affects productivity, relationships, and mental well-being.",
        "Self-care is personal, so start small, make it fun, and remember—progress, not perfection."
      ]
    };

    const calculatePriorityNumbers = () => {
      return rankings.map((ranking) => {
        const { domain: name, percentage } = ranking;
        const domainValue = percentage ? Math.ceil((percentage / 100) * 5) : 1;
        const impactScore = impactScores[name]?.impactScore || 1;
        const detectionScore = impactScores[name]?.detectionScore || 1;
        const priorityNumber = domainValue * impactScore * detectionScore;

        const zone = impactZones.find((z) => priorityNumber >= z.range[0] && priorityNumber <= z.range[1]);

        return {
          name,
          icon: domainIcons[name] || "❓",
          priorityNumber: isNaN(priorityNumber) ? 0 : priorityNumber,
          percentage: percentage || 0,
          impactZone: zone?.name || "Unknown Zone",
          zoneDescription: zone?.description || "No description available.",
          description: priorityDescriptions[name] || "No description available.",
          priorityTip: priorityTips[name] || ["No tips available for this domain."], // Assigning tips
        };
      });
    };

    const results = calculatePriorityNumbers()
      .sort((a, b) => b.priorityNumber - a.priorityNumber)
      .slice(0, 3);
    setPriorityResults(results);
  }, []);

  const handleDownloadPDF = async () => {
    if (!priorityResults.length) return;

    try {
        const pdf = new jsPDF("p", "mm", "a4");
        const margin = 10; // Left margin
        let yPosition = 20; // Initial y-position for content
        const pageHeight = 280; // Max height before adding new page

        // **Title**
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(20);
        pdf.text("Self-Care Compass Results", margin, yPosition);
        yPosition += 10;

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(12);
        pdf.text("Explore your prioritized domains, their impact, and improvement tips.", margin, yPosition);
        yPosition += 10;

        // **Loop Through Each Domain**
        priorityResults.forEach((result) => {
            if (yPosition > pageHeight) {
                pdf.addPage();
                yPosition = 20;
            }

            // **Find Impact Zone**
            const impactZone = impactZones.find(zone => zone.name === result.impactZone);

            // **Domain Title**
            pdf.setFont("helvetica", "bold");
            pdf.setFontSize(16);
            pdf.text(result.name, margin, yPosition);
            yPosition += 8;

            // **Domain Description**
            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(11);
            const descriptionLines = pdf.splitTextToSize(result.description, 180);
            pdf.text(descriptionLines, margin, yPosition);
            yPosition += descriptionLines.length * 5 + 3;

            // **Impact Zone Title**
            pdf.setFont("helvetica", "bold");
            pdf.setFontSize(13);
            pdf.text(`Impact Zone: ${impactZone ? impactZone.name : "Unknown Zone"}`, margin, yPosition);
            yPosition += 5;

            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(11);

            // **Impact Zone Definition**
            if (impactZone?.definition) {
                const definitionLines = pdf.splitTextToSize(`Definition: ${impactZone.definition}`, 180);
                pdf.text(definitionLines, margin, yPosition);
                yPosition += definitionLines.length * 5;
            }

            // **Impact Zone Explanation**
            if (impactZone?.explanation) {
                const explanationLines = pdf.splitTextToSize(`Explanation: ${impactZone.explanation}`, 180);
                pdf.text(explanationLines, margin, yPosition);
                yPosition += explanationLines.length * 5 + 5;
            }

            // **Space Before Tips**
            yPosition += 7;

            // **Tips for Improvement**
            pdf.setFont("helvetica", "bold");
            pdf.setFontSize(13);
            pdf.text("Tips for Improvement:", margin, yPosition);
            yPosition += 7;

            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(10);

            result.priorityTip.forEach((tip) => {
                if (yPosition > pageHeight) {
                    pdf.addPage();
                    yPosition = 20;
                }
                const bulletLines = pdf.splitTextToSize(`- ${tip}`, 180);
                pdf.text(bulletLines, margin, yPosition);
                yPosition += bulletLines.length * 5;
            });

            // **Divider Line**
            yPosition += 5;
            pdf.setDrawColor(150);
            pdf.setLineWidth(0.5);
            pdf.line(margin, yPosition, 200, yPosition);
            yPosition += 10;

            if (yPosition > pageHeight) {
                pdf.addPage();
                yPosition = 20;
            }
        });

        // **Save the PDF**
        pdf.save("Self-Care-Compass-Results.pdf");
    } catch (error) {
        console.error("Error generating PDF:", error);
    }
};

const handleEmailSubmit = async () => {
  console.log("Current Email Value:", email); // Debugging

  if (!email) {
    console.error("❌ Email is required but missing.");
    return;
  }

  const smtpData = {
    to: email,
    subject: "Your Self-Care Compass Results + The YOU Continuum Community",
    body: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
        <h2 style="color: #2c3e50;">Your Self-Care Compass Results</h2>
        <p>Thank you for your interest in The YOU Continuum! By now, you've received the results of your Self-Care Compass—your personal guide to identifying the life domain that needs your attention most right now.</p>
        <p>Your self-care journey starts here. But remember, life is an evolution. Your values shift, your needs change, and self-care isn’t a one-time fix—it’s an ongoing, dynamic process.</p>
        <p><strong>You are now part of a growing community focused on intentional, value-based self-care.</strong></p>
        <ul>
          <li>✅ <span style="color: #2E7562;">Blog updates exploring the intersections of values, self-care, and personal growth</span></li>
          <li>✅ <span style="color: #2E7562;">Exclusive resources to help you deepen your self-awareness and well-being</span></li>
          <li>✅ <span style="color: #2E7562;">Updates on the evolution of The YOU Continuum</span></li>
        </ul>
        <p>We’d also love to hear from you! There will be opportunities to provide feedback on tools and future iterations on The YOU Continuum, shaping this journey for yourself and others. Stay tuned for ways to get involved.</p>
        <p><strong>For now, take a moment to reflect on your Self-Care Compass results.</strong> What's one small step you can take today to align your actions with your values?</p>
        <p>We’re excited to be part of your journey. More to come soon!</p>
        <p><strong>Rachel Anderson & Team</strong></p>
      </div>
    `,
  };

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": "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", // Replace with your Brevo API Key
      },
      body: JSON.stringify({
        sender: { name: "Self-Care Compass", email: "info@youcontinuum.com" },
        to: [{ email: smtpData.to }],
        subject: smtpData.subject,
        htmlContent: smtpData.body,
      }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to send email: ${response.status} - ${errorMessage}`);
    }

    console.log("✅ Email sent successfully!");
    setEmailSubmitted(true);
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
};

  return (
    <div className="pt-[140px] max-w-7xl px-[24px] mx-auto p-6 flex flex-col items-center">
      <img 
          src="/self-care-hug.svg" 
          alt="Illustration of a heart being hugged" 
          className="max-w-[200px] object-contain"
      />
      <h1 className="font-andika text-2xl font-bold text-gray-800 mb-4">Your Self-Care Results</h1>
      <p className="font-ptSans text-[15px] text-stone-700 text-center max-w-xl mb-4">
      Explore your top domains to prioritize and enhance your focus. Assess their impact on your well-being and self-care, review improvement tips, and download your results for future reference. Revisit the Self-Care Compass to track your progress over time.
      </p>
      <div className="w-full max-w-lg mb-8">
  {emailSubmitted ? (
    <button 
      onClick={handleDownloadPDF} 
      className="font-ptSans mt-4 w-full text-center bg-evergreen-400 text-white py-2 rounded-[40px] hover:bg-evergreen-700 transition"
    >
      Download My Self-Care Results
    </button>
  ) : (
    <>
      {/* Label for Input Field */}
      <label htmlFor="email" className="font-ptSans font-bold text-gray-700 text-sm mb-2 block">
        Provide your email to receive access to your results.
      </label>

      {/* Email Input & Centered Button */}
      <div className="flex flex-col items-center w-full">
        <input 
          id="email"
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Your email address" 
          className="font-ptSans w-full px-4 py-2 border rounded-md mb-4"
        />
        <button 
          onClick={handleEmailSubmit} 
          className="w-full max-w-[180px] font-ptSans px-6 py-3 bg-evergreen-400 text-white text-sm font-medium rounded-[40px] shadow text-center"
        >
          Send My Results
        </button>
      </div>
    </>
  )}
</div>

      {/* Grid Layout for Top 3 Domains */}
<div className="w-full max-w-5xl space-y-6">

{/* First Domain (Full Width) */}
{priorityResults.length > 0 && (
  <div className="bg-white shadow-lg rounded-lg p-6 border border-brown-500">

    {/* Grid Layout - Two Columns */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Left Column - Priority Description */}
      <div>
      <span className="inline-flex items-center rounded-full bg-auburn-600 px-3 py-1 text-xs font-semibold text-white">
      #1 Area of Focus
    </span>
    
    <h2 className="font-andika text-[24px] font-bold text-gray-900 mt-4">
      {priorityResults[0].icon} {priorityResults[0].name}
    </h2>
    
        <p className="text-gray-700 text-[15px]">
          {priorityResults[0].description}
        </p>
      </div>

      {/* Right Column - Impact Zone Section */}
      <div>
        <div className="bg-stone-100 p-4 rounded-lg">
          <h3 className="text-[21px] font-bold text-stone-950 pb-2">
            {priorityResults[0].impactZone}
          </h3>
          <p className="text-[15px] text-stone-900 pb-4">
            <strong>Definition:</strong> {priorityResults[0].zoneDescription}
          </p>
          <p className="text-[15px] text-stone-900 pb-4">
            <strong>Explanation:</strong> This zone indicates that {priorityResults[0].name} requires{" "}
            {priorityResults[0].impactZone === "Crisis Zone"
              ? "urgent attention"
              : "a balanced approach"}.
          </p>
          {/* Button to open Drawer */}
          <button
              onClick={() => setDrawerOpen(true)}
              className="text-evergreen-600 font-semibold mt-2 inline-block underline"
            >
              View comparison to all Impact Zones →
            </button>
        </div>
      </div>
      
    {/* Drawer Component */}
    <Drawer
        title="Impact Zone Comparisons"
        content={
          <div className="space-y-6">
            {impactZones.map((zone, index) => (
              <div key={index} className="bg-stone-100 p-4 rounded-lg">
                <h3 className="font-semibold text-[24px] text-stone-950">{zone.name}</h3>
                <p className="text-sm text-stone-700 mb-4">
                  <strong>Definition:</strong> {zone.definition}
                </p>
                <p className="text-sm text-stone-700">
                  <strong>Explanation:</strong> {zone.explanation}
                </p>
              </div>
            ))}
          </div>
        }
        open={isDrawerOpen}
        setOpen={setDrawerOpen}
      />
    </div>
    <div>
        {/* Expandable Tips Section */}
        <details className="mt-6">
          <summary className="cursor-pointer text-brown-700 hover:underline text-[16px] font-semibold flex items-center">
            <span className="mr-2">👁️</span> Reveal to see tips on how to manage this domain
          </summary>
          {priorityResults[0]?.priorityTip?.length > 0 && (
            <div className="mt-2 text-sm text-gray-700 space-y-3">
              {priorityResults[0].priorityTip.map((tip, index) => (
                <p key={index}>{tip}</p>
              ))}
            </div>
          )}
        </details>
      </div>
  </div>
)}

{/* Second & Third Domains (Stacked Full Width) */}
{priorityResults.slice(1, 3).map((result, index) => (
  <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-300">
    <span className="inline-flex items-center rounded-full bg-gray-500 px-3 py-1 text-xs font-semibold text-white">
      #{index + 2} Area of Focus
    </span>
    <h2 className="font-andika text-[20px] font-bold text-gray-900 mt-4">
      {result.icon} {result.name}
    </h2>
    <p className="text-gray-700 mt-2">
      Download results to see more information about this domain along with your Impact Zone.
    </p>
  </div>
))}
</div>

      
    </div>
  );
}