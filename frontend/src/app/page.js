"use client"
import React from "react"
import Link from "next/link"
import aboutImg from "./assets/aboutimg (1).jpg"
import contactImg from "./assets/contact.jpg"
import Image from "next/image"
import "./globals.css"

export default function Home() {
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
    <div className="h-screen w-full bg-white flex justify-center items-center">
         <video
         src="/video/demovideo.mp4"
         className="h-full w-full border-0 border-slate-500"
         loop
         controls
         />
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