"use client"; 

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { X } from "lucide-react"; // Importing Close Icon
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const lifeDomains = [
  { id: 1, label: "Health & Wellness", icon: "🧘‍♂️", description: "Your physical and mental health lay the groundwork for your overall well-being. This domain covers fitness, nutrition, sleep, and self-care practices. Taking care of your body and mind ensures you feel energized, resilient, and able to take on life’s challenges." 
  },
  { id: 2, label: "Spirituality & Beliefs", icon: "🛐", description: "Spiritual practices, values, and beliefs provide a sense of purpose and meaning. This domain focuses on connecting with your deeper self, engaging in religious or spiritual activities, and exploring what gives your life direction. Cultivating a sense of spirituality can help you navigate challenges and live with intention." },
  { id: 3, label: "Career & Ambition", icon: "💼", description: "Your career and job satisfaction play a crucial role in your life’s fulfillment. This domain focuses on professional development, work-life integration, income, and overall happiness in your occupation. Whether it’s advancing in your current career or transitioning to a new path, this domain helps you achieve alignment with your professional goals." },
  { id: 4, label: "Personal Growth & Education", icon: "📚", description: "Lifelong learning helps you grow intellectually and emotionally. This domain encourages skill development, creativity, self-improvement, and the pursuit of knowledge. Whether it's reading, attending workshops, or exploring new ideas, personal growth is a continuous journey." },
  { id: 5, label: "Finances", icon: "💰", description: "Your financial health has a major impact on your peace of mind and future stability. This domain includes managing your finances, budgeting, saving, investing, and debt management. Achieving financial security enables you to feel in control and empowers you to make informed life choices." },
  { id: 6, label: "Recreation & Leisure", icon: "🎾", description: "Taking time to enjoy life is essential for maintaining balance. This domain highlights hobbies, travel, relaxation, and other activities that bring you joy and help you recharge. Whether it’s a weekend getaway or spending time on a creative pursuit, recreation nurtures your well-being." },
  { id: 7, label: "Community & Contribution", icon: "🤝", description: "Giving back to others and being involved in your community enhances both personal growth and collective well-being. This domain covers volunteering, community involvement, and social responsibility. The impact you have on society contributes to your sense of purpose and belonging." },
  { id: 8, label: "Family & Relationships", icon: "👨‍👩‍👧", description: "Relationships are at the heart of human experience. Family dynamics, romantic relationships, friendships, and support networks shape your emotional landscape. This domain emphasizes the importance of connecting with others and maintaining healthy relationships." },
  { id: 9, label: "Environment & Home", icon: "🏡", description: "Your physical surroundings play a key role in how you feel and thrive. This domain includes living conditions, home organization, safety, and your connection with nature. Whether it’s creating a peaceful home or reducing your environmental footprint, your environment supports your overall happiness and security." },
];

// Detailed Content for Each Domain
const domainDetails = {
  1: {
    description: "Your physical and mental health lay the groundwork for your overall well-being.",
    image: "/images/health-wellness.jpg",
    content: [
      "Taking care of your body and mind ensures you feel energized, resilient, and able to take on life’s challenges.",
      "This domain covers fitness, nutrition, sleep, and self-care practices. Regular exercise, proper rest, and mindfulness can create a foundation for long-term wellness.",
      "When health is prioritized, other aspects of life—career, relationships, and ambitions—become more sustainable and fulfilling.",
    ],
  },
  2: {
    description: "Spiritual practices, values, and beliefs provide a sense of purpose and meaning.",
    image: "/images/spirituality.jpg",
    content: [
      "This domain focuses on connecting with your deeper self, engaging in religious or spiritual activities, and exploring what gives your life direction.",
      "Practicing gratitude, meditation, or religious rituals can contribute to inner peace and personal fulfillment.",
      "Spiritual alignment allows you to approach life with clarity, acceptance, and a sense of interconnectedness.",
    ],
  },
  3: {
    description: "Your career and job satisfaction play a crucial role in your life’s fulfillment.",
    image: "/images/career.jpg",
    content: [
      "This domain focuses on professional development, work-life balance, and career ambitions.",
      "Whether it’s advancing in your current role or transitioning to a new field, career alignment enhances both personal and financial well-being.",
      "Finding work that resonates with your values can create a deeper sense of purpose and success.",
    ],
  },
};


export default function CircularCarousel() {
  const containerRef = useRef(null);
  const [selectedDomain, setSelectedDomain] = useState(lifeDomains[0]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const sheetRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.children;
    const radius = 306;
    const angleStep = (2 * Math.PI) / lifeDomains.length;

    Array.from(items).forEach((item, i) => {
      const angle = i * angleStep - Math.PI / 2;
      gsap.to(item, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        duration: 1,
      });
    });
  }, []);

  const openSheet = () => {
    setIsSheetOpen(true); // Ensure the state updates immediately
  
    setTimeout(() => {
      gsap.to(sheetRef.current, { y: "0%", duration: 0.5, ease: "power3.out" });
    }, 0); // Delay animation until the next render
  };

  const closeSheet = () => {
    gsap.to(sheetRef.current, { y: "100%", duration: 0.4, ease: "power3.in", onComplete: () => setIsSheetOpen(false) });
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-white px-6 md:px-12">
      <h2 className="font-andika text-xl md:text-2xl font-bold md:font-bold text-stone-950 mb-4">
        Discover the Nine Life Domains
      </h2>
      <p className="font-ptSans text-stone-950 text-center max-w-3xl mb-10">
        Life is constantly changing, and understanding the evolving aspects of your personal well-being can help you lead a more fulfilled life.
      </p>

      {/* DESKTOP: Circular Carousel */}
      <div className="hidden md:flex relative items-center justify-center w-[600px] h-[600px] mt-8">
        {/* Background Circle */}
        <div 
            className="absolute w-full h-full rounded-full" 
            style={{ background: "radial-gradient(64.64% 64.64% at 48.94% 17.55%, #C3D7CA 0%, #273E33 100%)" }}
        ></div>

        {/* Circular Positioned Icons */}
        <div ref={containerRef} className="absolute w-full h-full flex items-center justify-center">
          {lifeDomains.map((domain) => (
            <div
              key={domain.id}
              className="absolute flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedDomain(domain)}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 flex bg-white items-center justify-center text-xl rounded-full shadow-lg border-2 transition-transform
                  ${selectedDomain.id === domain.id
                    ? "border-amber-500 bg-amber-50 scale-110"
                    : "border-evergreen-300 hover:border-evergreen-500 hover:bg-evergreen-100"}`}
              >
                {domain.icon}
              </div>

              {/* Label (Only Active One is Visible) */}
              <div
                className={`mt-2 px-3 py-1 text-white text-xs font-semibold rounded-full transition-opacity ${
                  selectedDomain.id === domain.id ? "bg-amber-600 opacity-100" : "opacity-0"
                }`}
              >
                {domain.label}
              </div>
            </div>
          ))}
        </div>

        {/* Center Content Card */}
        <div className="absolute w-96 bg-white p-10 rounded-lg shadow-lg text-center">
          <h3 className="font-andika text-xl font-bold text-gray-900">{selectedDomain.label}</h3>
          <p className="font-ptSans text-[15px] text-stone-900 mt-2">{selectedDomain.description}</p>
          <button 
            onClick={openSheet}
            className="mt-4 px-6 py-2 bg-evergreen-600 text-white rounded-full shadow-md hover:bg-evergreen-700"
          >
            Learn More
          </button>

        </div>
      </div>

      {/* MOBILE: Swiper Slider */}
      <div className="block md:hidden w-full max-w-md">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{ 
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ 
            clickable: true, 
            el: ".swiper-pagination"
          }}
        >
          {lifeDomains.map((domain) => (
            <SwiperSlide key={domain.id} className="px-12 py-8">
              <div className="bg-evergreen-50 rounded-2xl shadow-lg px-6 py-8 text-center">
                <div className="text-4xl">{domain.icon}</div>
                <h3 className="text-xl font-bold mt-4">{domain.label}</h3>
                <p className="text-gray-700 mt-2">{domain.description}</p>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev text-evergreen-400"></div>
          <div className="swiper-button-next text-evergreen-400"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>

      {/* Bottom Sheet (Overlay Panel) */}
      {isSheetOpen && (
        <div 
          ref={sheetRef}
          className="fixed bottom-0 left-0 w-full h-[calc(100%-16px)] bg-white shadow-lg rounded-t-2xl p-6 z-50 transform translate-y-full"
        >
          {/* Close Button */}
          <button 
            onClick={closeSheet} 
            className="absolute top-4 right-6 text-gray-700 hover:text-gray-900 text-2xl"
          >
            <X size={28} />
          </button>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center">{selectedDomain.label}</h2>
            <img src={domainDetails[selectedDomain.id]?.image} alt={selectedDomain.label} className="w-full max-h-60 object-cover mt-4 rounded-lg shadow-md" />
            {domainDetails[selectedDomain.id]?.content.map((para, index) => (
              <p key={index} className="text-gray-700 mt-4 text-center">{para}</p>
            ))}
          </div>

        </div>
      )}
    </section>
  );
}