"use client"
import React, { useState, useRef, useEffect } from "react"
import CountUp from 'react-countup';
import Link from "next/link"
import Image from "next/image"
import aboutImg from "./assets/aboutimg (1).jpg"
import contactImg from "./assets/contact.jpg"
import appointImg from "./assets/appointimg.jpg"
import "./globals.css"

export default function Home() {
  const [isTrustSectionVisible, setIsTrustSectionVisible] = useState(false);
  const trustSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTrustSectionVisible(true);
          // Disconnect observer after first trigger to prevent multiple triggers
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Adjust trigger point slightly earlier
      }
    );

    if (trustSectionRef.current) {
      observer.observe(trustSectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
    {/* adding box images and link */}
    <div id="hero" className="h-screen w-full grid place-content-center select-none">
        {/* phase one */}
        <div>
            <p className="text-slate-200 font-normal text-lg tracking-wide">𝒲𝑒 𝒞𝒶𝓇𝑒 𝐹𝑜𝓇 𝒴𝑜𝓊</p>
        </div>
        
        {/* phase two */}
        <div className="mt-[30px]">
            <p className="text-4xl font-bold text-slate-100 tracking-wider">Medvault Health Care</p>
        </div>

        {/* phase three */}
        <div className="mt-[30px]">
            <p className="text-lg font-normal text-slate-200 tracking-wide">𝒟𝒾𝓇𝑒𝒸𝓉 𝒫𝓇𝒾𝓋𝒶𝓉𝑒 𝒞𝒶𝓇𝑒</p>
        </div>

        {/* pahse four-link */}
        <div>
            <Link href="/about" className="mt-[40px] h-[50px] w-[200px] rounded-full bg-green-800 flex justify-center items-center hover:scale-105 hover:tracking-widest transition-all ease-in-out duration-200">
                <p className="text-white font-normal tracking-wider hover:tracking-widest transition-all ease-in-out duration-200">Get Started</p>
            </Link>
        </div>
    </div>

    {/* adding about us section */}
    <div className="h-screen w-full bg-white flex justify-center items-center gap-10 selection:bg-rose-300">
         {/* pahse-1 image */}
         <div id="box" className="w-[600px] h-[600px] flex justify-center items-center">
          <Image src={aboutImg} alt="about image" className="h-[580px] w-[580px] border-0 border-slate-500" />
         </div>

          {/* pahse-2 about us sec */}
          <div className="w-[700px]">
          <h2 className="text-3xl text-[#0A3D62] font-bold mb-4">About Us</h2>
          <p className="text-lg text-[#2C3E50]">MedVault is a simple and secure healthcare platform made to bring patients and doctors closer.</p>
          <br />
          <p className="text-lg text-[#2C3E50]">We want to make medical care easy for everyone by helping people connect with trusted doctors, book appointments without stress, and keep their health records safe in one place.</p>
          <br />
          <p className="text-lg text-[#2C3E50]">Our aim is to remove the confusion around healthcare and give patients a clear, reliable, and caring experience. At MedVault, we believe good health starts with trust, and we are here to make sure you get the care you need at the right time.</p>
          <br />
          {/* add about link */}
          <div className="h-[40px] w-[250px] rounded-full bg-green-800 border-0 border-green-800 flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-200">
            <Link href="/about" className="h-full w-full flex justify-center items-center text-slate-100 tracking-wider font-normal hover:text-white hover:tracking-widest transition-all ease-in-out duration-200">𝓔𝔁𝓹𝓵𝓸𝓻𝓮 𝓜𝓸𝓻𝓮</Link>
          </div>
         </div>
    </div>

    {/* adding fancy video */}
    <div className="h-screen w-full bg-white flex justify-center items-center gap-35">

          {/* text sec */}
         <div className="w-[500px]">
          <h2 className="text-3xl text-[#0A3D62] font-bold mb-4">Welcome to MedVault</h2>
          <br />
          <p className="text-[#2C3E50] font-normal text-lg">Discover how MedVault is transforming healthcare with technology.</p>
          <br />
          <p className="text-[#2C3E50] font-normal text-md">
            At MedVault, we believe in blending technology with healthcare. This video gives you a glimpse into the dedication and precision of our medical experts. Our goal is to make advanced healthcare simple, accessible, and trustworthy for everyone.
          </p>
         </div>

         {/* video sec */}
         <div id="led" className="h-[500px] w-[700px] overflow-hidden flex justify-center pt-[75px]">
              <div className="w-[570px]">
                <video
                 src="/video/homevideo.mp4"
                 className="w-full border-0 border-slate-500 flex justify-center items-center"
                 loop
                 autoPlay
                 muted
                />
              </div>
         </div>
    </div>

    {/* appointment sec */}
    <div className="h-screen w-full bg-white flex justify-center items-center gap-10">
         {/* phase 1 image sec */}
          <div id="box" className="w-[600px] h-[600px] flex justify-center items-center">
            <Image src={appointImg} alt="about image" className="h-[580px] w-[580px] border-0 border-slate-500" />
          </div>
          
          {/* phase 2 text sec */}
          <div className="w-[700px]">
            <h2 className="text-3xl text-[#0A3D62] font-bold mb-4">Book an Appointment</h2>
            <p className="text-lg text-[#2C3E50]">Scheduling an appointment with a healthcare professional is now easier than ever with MedVault. Our user-friendly platform allows you to quickly find and book appointments with trusted doctors in your area.</p>
            <br />
            <p className="text-lg text-[#2C3E50]">Simply browse through our list of qualified healthcare providers, select a convenient time slot, and confirm your appointment in just a few clicks. Whether you need a routine check-up or specialized care, MedVault connects you with the right medical professionals to meet your needs.</p>
            <br />
            <p className="text-lg text-[#2C3E50]">Experience hassle-free healthcare scheduling with MedVault and take the first step towards better health today.</p>
            <br />
            {/* add appointment link */}
            <div className="h-[40px] w-[250px] rounded-full bg-green-800 border-0 border-green-800 flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-200">
              <Link href="/book" className="h-full w-full flex justify-center items-center text-slate-100 tracking-wider font-normal hover:text-white hover:tracking-widest transition-all ease-in-out duration-200">𝓔𝔁𝓹𝓵𝓸𝓻𝓮 𝓜𝓸𝓻𝓮</Link>
            </div>
          </div>
    </div>

    {/* Trust Section */}
    <div ref={trustSectionRef} className="h-screen w-full bg-white">

      {/* phase one heading */}
          <div className="h-[350px] w-full grid place-content-center gap-5">
            <div>
            <h2 className="text-3xl text-[#0A3D62] font-bold mb-4 text-center">Why Choose MedVault?</h2>
            </div>

      {/* phase two paragraph */}
            <div className="w-[800px] text-center">
              <p className="text-lg text-[#2C3E50]">At MedVault, your health and trust come first. We work with verified doctors and follow strict security to keep your records safe. Thousands of patients use MedVault every day to find the right doctor, book appointments quickly, and manage their health without stress. With us, you can be sure that your care is in safe hands.</p>
            </div>
          </div>

          {/* phase three adding countup sec */}
          <div className="h-[350px] w-full grid place-content-center">
            <section className="bg-transparent py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div>
          <h2 className="text-4xl font-bold text-teal-600">
            <CountUp end={10000} duration={5} start={isTrustSectionVisible ? undefined : 0} />+
          </h2>
          <p className="text-gray-600">Patients Served</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-teal-600">
            <CountUp end={500} duration={5} start={isTrustSectionVisible ? undefined : 0} />+
          </h2>
          <p className="text-gray-600">Doctors Onboard</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-teal-600">
            <CountUp end={99} duration={5} start={isTrustSectionVisible ? undefined : 0} />%
          </h2>
          <p className="text-gray-600">Data Security</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-teal-600">
            <CountUp end={24} duration={5} start={isTrustSectionVisible ? undefined : 0} />/7
          </h2>
          <p className="text-gray-600">Support</p>
        </div>

      </div>
    </section>
          </div>

          {/* end div of trust sec */}
          </div>

    {/* famous doctors sec */}
    <div className="h-screen w-full flex justify-center items-center">
      <div>
        <p>Hello</p>
      </div>
    </div>

    {/* adding contact us section */}
    <div className="h-screen w-full bg-white flex justify-center items-center gap-10 selection:bg-rose-300">
    
          {/* pahse-1 about us sec */}
          <div className="w-[700px]">
          <h2 className="text-3xl text-[#0A3D62] font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-[#2C3E50]">We are always here to help you. If you have any questions, need support, or want to know more about MedVault, feel free to reach out to us.</p>
          <br />
          <p className="text-lg text-[#2C3E50]">You can connect with us by email or phone, and our team will be happy to assist you.</p>
          <br />
          <p className="text-lg">
            📧 Email: <Link href="mailto:akshayraj3435@gmail.com" className="text-[#2C3E50]">akshayraj3435@gmail.com</Link>
            <br />
            📞 Phone: <Link href="tel:+91 9142158588" className="text-[#2C3E50]">+91 91421 58588</Link>
          </p>
          <br />
          {/* add contact link */}
          <div className="h-[40px] w-[250px] rounded-full bg-green-800 border-0 border-green-800 flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-200">
            <Link href="/contact" className="h-full w-full flex justify-center items-center text-slate-100 tracking-wider font-normal hover:text-white hover:tracking-widest transition-all ease-in-out duration-200">𝓔𝔁𝓹𝓵𝓸𝓻𝓮 𝓜𝓸𝓻𝓮</Link>
          </div>
         </div>

         {/* pahse-2 image */}
         <div id="box" className="w-[600px] h-[600px] flex justify-center items-center">
          <Image src={contactImg} alt="contact image" className="w-[580px] h-[580px] border-0 border-slate-500" />
         </div>
    </div>
    </>
    )
}