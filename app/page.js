"use client";

import { useRouter } from "next/navigation";
import Image from 'next/image';
import Teamwork from '../public/ldpn-teamwork.png';
import Clarity from '../public/ldpn-clarity.png';
import Target from '../public/ldpn-target.png';
import Calculation from '../public/ldpn-calculation.svg';
import Mockup from '../public/ldpn-tool-mock.svg';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/what-to-expect");
  };

  return (
    <div className="w-full">
      
      {/* Lead Section */}
      <div className="max-w-7xl px-4 mx-auto pt-16 pb-16 flex flex-row">
        <div className="basis-1/2">
          <div className="max-w-xl">
              <h1 className="text-4xl font-normal text-evergreen-200 mb-4">
                What is the Life Domain Priority Number tool?
              </h1>
              <p className="text-white text-base font-light mb-6">
              A risk matrix is a tool commonly used in business quality management 
              principles to assess and prioritize risks by evaluating their likelihood 
              and impact. In the context of personal values, life domains, and current 
              circumstances, the risk matrix can serve as a framework to identify areas 
              in life requiring attention and to prioritize self-care strategies accordingly.
              </p>
              <div className="flex gap-4">
                <button onClick={handleStart} className="px-6 py-3 bg-evergreen-400 hover:bg-evergreen-500 active:bg-evergreen-600 text-white text-sm font-medium rounded-[40px] shadow hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 transition duration-150 ease-in-out">
                  Get started with the LDPN tool
                </button>
                <button className="px-4 py-2 text-sm text-white font-medium rounded-[40px] border-evergreen-200 border-solid border-2">
                  Learn More
                </button>
              </div>
          </div>
        </div>
        <div className="basis-1/2">
            <Image src ={Teamwork} alt="LDPN Teamwork" className="rounded-lg w-596"/>
        </div>
      </div>

      {/* Follow-Up Section */}
      <div className="bg-white">
        
        <div className="max-w-7xl px-4 mx-auto pt-16">
            <h2 className="text-3xl font-normal mb-4">
              Understanding the LDPN tool
            </h2>
            <p className="mb-6 text-base font-light">
              The Life Domain Priority Number tool is a risk matrix intended to help guide a start place for your value-based self-care journey with clarity and purpose. It’s easy to feel overwhelmed by the many areas of life that demand your attention, but knowing where to begin is often the hardest part. The LDPN tool simplifies this process by providing a focused and actionable starting point within the nine life domains.
            </p>
        </div>

        <div className="max-w-7xl px-4 mx-auto gap-12 flex flex-row mb-8">
          <div className="basis-1/2">
              <Image src ={Clarity} alt="Clarity with LDPN" className="rounded-lg"/>
          </div>
          <div className="basis-1/2">
            <h3 className="text-xl font-bold">
              Clarity Through Focus
            </h3>
            <p className="mb-6">
              Life is full of competing priorities, making it difficult to decide where to direct your energy. The LDPN Tool helps cut through the noise by pinpointing the life domain most in need of attention. This clarity allows you to focus on the area that will have the greatest impact on your overall well-being.
            </p>
          </div>
        </div>

        <div className="max-w-7xl px-4 mx-auto gap-12 flex flex-row pb-16">
          <div className="basis-1/2">
            <h3 className="text-xl font-bold">
              A Target Starting Point
            </h3>
            <p className="mb-4">
              Using a structured scoring system, the LDPN Tool evaluates the alignment between your current values and the domains in your life—such as relationships, career, health, or spirituality. It highlights the life domain at the highest risk or in the most misalignment, offering a clear and actionable starting point for your self-care efforts.
            </p>
            <p className="mb-4">
              By identifying where to begin, the LDPN Tool empowers you to take meaningful steps toward improving balance and well-being in your life. It’s the first step to aligning your self-care practices with your evolving values, ensuring that your efforts are intentional, impactful, and rooted in what matters most to you. The LDPN is calculated using your Values, Negative Impact, and Detection ratings...
            </p>
          </div>
          <div className="basis-1/2">
              <Image src ={Target} alt="Target Starting Point with LDPN" className="rounded-lg"/>
          </div>
        </div>

      </div>

      {/* LDPN Calculation Section */}
      <div className="bg-stone-50">
        <div className="grid place-content-center max-w-7xl mx-auto pt-16 text-center pb-16">
          <Image src = {Calculation} alt="LDPN Calculation Model" />
          <h4 className="text-xl font-bold">LDPN = Value x Impact x Detection</h4>
          <p>Here's a breakdown of how we model your LDPN score.</p>
        </div>
      </div>

      {/* Using the tool consistently */}
      <div className="bg-stone-700">
        <div className="max-w-7xl px-4 mx-auto pt-16 pb-16">
          <Image src = {Mockup} alt="LDPN Screen Mockup" className="pb-4"/>
          <h4 className="text-2xl mb-4 text-evergreen-200">Referring to the tool consistently</h4>
          <p className="mb-4 text-white">Higher LDPN indicate higher-priority domains that require immediate action, while lower scores suggest less critical domains. The LDPN tool helps prioritize efforts to mitigate the most significantly affected domains based on your personal values and their negative impact. The LDPN tool is intended to be used multiple times during The YOU Continuum, as values, beliefs, and needs change over time.</p>
          <p className="mb-6 text-white">The LDPN Tool does all the scoring for you and provides immediate results, showing you which zone you are currently in for each life domain!</p>
          <button onClick={handleStart} className="px-6 py-3 bg-evergreen-400 hover:bg-evergreen-500 active:bg-evergreen-600 text-white text-sm font-medium rounded-[40px] shadow hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 transition duration-150 ease-in-out">
            Get started with the LDPN tool
          </button>
        </div>
      </div>

    </div>
  );
}