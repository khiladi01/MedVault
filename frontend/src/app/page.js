"use client"
import React from "react"
import logo from "./assets/logo/medvaultlogo.png"
import Image from "next/image"
import "./globals.css"

export default function Home() {
  return (
    <>
    {/* adding images */}
    <div className="h-screen w-full bg-white flex justify-between items-center">
      {/* phase-1 big promo logo */}
      <div id="boxone" className="h-screen w-[500px] border-[2px] border-slate-200 flex justify-center items-center ">
         <div id="boxtwo" className="h-[700px] w-[450px] border-2 border-slate-200 flex justify-center items-center "><Image src={logo} alt="logo image" className="h-[600px] w-[400px] border-2 border-slate-200" /></div>
    </div>
      {/* phase-2 big promo logo */}
      <div id="boxone" className="h-screen w-[500px] border-[2px] border-slate-200 flex justify-center items-center ">
         <div id="boxtwo" className="h-[700px] w-[450px] border-2 border-slate-200 flex justify-center items-center "><Image src={logo} alt="logo image" className="h-[600px] w-[400px] border-2 border-slate-200" /></div>
    </div>
      {/* phase-3 big promo logo */}
      <div id="boxone" className="h-screen w-[500px] border-[2px] border-slate-200 flex justify-center items-center ">
         <div id="boxtwo" className="h-[700px] w-[450px] border-2 border-slate-200 flex justify-center items-center "><Image src={logo} alt="logo image" className="h-[600px] w-[400px] border-2 border-slate-200" /></div>
    </div>
    </div>

    {/* adding about us section */}
    <div className="h-screen w-full bg-white flex justify-center items-center gap-10">
         {/* pahse-1 image */}
         <div className="w-[550px]">
          <Image src={logo} alt="about image" className="h-[600px] w-full border-[15px] border-slate-500" />
         </div>

          {/* pahse-2 about us sec */}
          <div className="w-[700px]">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">Hello This Is Software Engineer, I am working on this project called MedVault. This is a healthcare management system that allows users to book appointments with doctors, manage their health records, and more. The project is built using Next.js and React, and it aims to provide a seamless user experience for managing healthcare needs.</p>
         </div>
    </div>

    {/* adding contact us section */}
    <div className="h-screen w-full bg-white flex justify-center items-center gap-10">

          {/* pahse-1 about us sec */}
          <div className="w-[700px]">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">Hello This Is Software Engineer, I am working on this project called MedVault. This is a healthcare management system that allows users to book appointments with doctors, manage their health records, and more. The project is built using Next.js and React, and it aims to provide a seamless user experience for managing healthcare needs.</p>
         </div>

         {/* pahse-2 image */}
         <div className="w-[550px]">
          <Image src={logo} alt="contact image" className="h-[600px] w-full border-[15px] border-slate-500" />
         </div>
    </div>
    </>
    )
}
