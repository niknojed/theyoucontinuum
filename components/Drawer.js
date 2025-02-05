"use client";

import { useEffect, useRef } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';
import gsap from "gsap";

export default function Drawer({ title, content, imageUrl, open, setOpen }) {
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (open) {
      // Slide in the drawer
      gsap.fromTo(
        drawerRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power2.out" }
      );

      // Fade in background overlay
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
     } else {
        console.log("Drawer closing - Animating out");
  
        // Slide out animation
        gsap.to(drawerRef.current, {
          x: "100%",
          duration: 0.4,
          ease: "power2.inOut",
        });
  
        // Fade out overlay
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={setOpen} className="fixed inset-0 z-[1050]">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel ref={drawerRef} className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700 bg-white shadow-xl">
              
              {/* Header Section */}
              <div className="flex items-start justify-between px-8 md:px-16 py-4 border-b border-gray-200">
                <DialogTitle className="font-andika text-lg font-bold text-gray-900">{title}</DialogTitle>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-2.5" />
                  <span className="sr-only">Close panel</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Drawer Content */}
              <div ref={contentRef} className="relative font-ptSans px-8 md:px-16 py-4 space-y-4 overflow-y-auto max-h-[80vh]">
                
                {/* Optional Image */}
                {imageUrl && (
                  <div className="w-full flex justify-start">
                    <Image 
                      src={imageUrl} 
                      alt="Example" 
                      width={500} 
                      height={300} 
                      className="w-[250px]"
                    />
                  </div>
                )}

                {/* Ensure content is an array before mapping */}
                {(Array.isArray(content) ? content : [content]).map((paragraph, index) => (
                  <p key={index} className="text-stone-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}