"use client"; // Ensure client-side rendering

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const lifeDomains = [
  { id: 1, label: "Health & Wellness", icon: "🧘‍♂️", description: "Your physical and mental health lay the groundwork for your overall well-being. This domain covers fitness, nutrition, sleep, and self-care practices. Taking care of your body and mind ensures you feel energized, resilient, and able to take on life’s challenges." },
  { id: 2, label: "Spirituality & Beliefs", icon: "🛐", description: "Spiritual practices, values, and beliefs provide a sense of purpose and meaning. This domain focuses on connecting with your deeper self, engaging in religious or spiritual activities, and exploring what gives your life direction. Cultivating a sense of spirituality can help you navigate challenges and live with intention." },
  { id: 3, label: "Career & Ambition", icon: "💼", description: "Your career and job satisfaction play a crucial role in your life’s fulfillment. This domain focuses on professional development, work-life integration, income, and overall happiness in your occupation. Whether it’s advancing in your current career or transitioning to a new path, this domain helps you achieve alignment with your professional goals." },
  { id: 4, label: "Personal Growth & Education", icon: "📚", description: "Lifelong learning helps you grow intellectually and emotionally. This domain encourages skill development, creativity, self-improvement, and the pursuit of knowledge. Whether it's reading, attending workshops, or exploring new ideas, personal growth is a continuous journey." },
  { id: 5, label: "Finances", icon: "💰", description: "Your financial health has a major impact on your peace of mind and future stability. This domain includes managing your finances, budgeting, saving, investing, and debt management. Achieving financial security enables you to feel in control and empowers you to make informed life choices." },
  { id: 6, label: "Recreation & Leisure", icon: "🎾", description: "Taking time to enjoy life is essential for maintaining balance. This domain highlights hobbies, travel, relaxation, and other activities that bring you joy and help you recharge. Whether it’s a weekend getaway or spending time on a creative pursuit, recreation nurtures your well-being." },
  { id: 7, label: "Community & Contribution", icon: "🤝", description: "Giving back to others and being involved in your community enhances both personal growth and collective well-being. This domain covers volunteering, community involvement, and social responsibility. The impact you have on society contributes to your sense of purpose and belonging." },
  { id: 8, label: "Family & Relationships", icon: "👨‍👩‍👧", description: "Relationships are at the heart of human experience. Family dynamics, romantic relationships, friendships, and support networks shape your emotional landscape. This domain emphasizes the importance of connecting with others and maintaining healthy relationships." },
  { id: 9, label: "Environment & Home", icon: "🏡", description: "Your physical surroundings play a key role in how you feel and thrive. This domain includes living conditions, home organization, safety, and your connection with nature. Whether it’s creating a peaceful home or reducing your environmental footprint, your environment supports your overall happiness and security." },
];

export default function CircularCarousel() {
  const containerRef = useRef(null);
  const [selectedDomain, setSelectedDomain] = useState(lifeDomains[0]);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.children;
    const radius = 350; // Moves icons closer to the edge
    const angleStep = (2 * Math.PI) / lifeDomains.length;

    Array.from(items).forEach((item, i) => {
      const angle = i * angleStep - Math.PI / 2; // Start from the top
      gsap.to(item, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        duration: 1,
      });
    });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-white px-6 md:px-12">
      <h2 className="font-andika text-xl md:text-2xl font-bold md:font-bold text-stone-950 mb-4">
        Discover the Nine Life Domains
      </h2>
      <p className="font-ptSans text-stone-950 text-center max-w-3xl mb-10">
        Life is constantly changing, and understanding the evolving aspects of your personal well-being can help you lead a more fulfilled life.
      </p>

      {/* DESKTOP: Circular Carousel */}
      <div className="hidden md:flex relative items-center justify-center w-[700px] h-[700px]">
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
              className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl shadow-lg cursor-pointer transition-transform hover:scale-110 border-2 border-evergreen-300 hover:border-evergreen-500 hover:bg-evergreen-100"
              onClick={() => setSelectedDomain(domain)}
            >
              {domain.icon}
            </div>
          ))}
        </div>

        {/* Center Content Card */}
        <div className="absolute w-96 bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-gray-900">{selectedDomain.label}</h3>
          <p className="text-[14px] text-stone-600 mt-2">{selectedDomain.description}</p>
          <button className="mt-4 px-6 py-2 bg-evergreen-600 text-white rounded-full shadow-md hover:bg-evergreen-700">
            Explore More
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
          className="custom-swiper"
        >
          {lifeDomains.map((domain) => (
            <SwiperSlide key={domain.id} className="px-12 py-8">
              <div className="bg-evergreen-50 rounded-2xl shadow-lg px-6 py-8 text-center">
                <div className="text-4xl">{domain.icon}</div>
                <h3 className="text-xl font-bold mt-4">{domain.label}</h3>
                <p className="text-gray-700 mt-2">{domain.description}</p>
                <button className="mt-4 px-6 py-2 bg-evergreen-600 text-white rounded-full shadow-md hover:bg-evergreen-700">
                  Explore More
                </button>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev text-evergreen-400"></div>
            <div className="swiper-button-next text-evergreen-400"></div>

            {/* Custom Pagination */}
            <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}