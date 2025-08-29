"use client"

import Image from "next/image";
import aboutImg from "../assets/aboutpageimg.webp";
import cardioImg from "../assets/cardiologist.jpg"
import neuroImg from "../assets/neurologist.jpg";
import orthoImg from "../assets/orthopady.jpg";
import docOne from "../assets/doctorimg/docImgone.avif";
import docTwo from "../assets/doctorimg/docImgtwo.jpg";
import docThree from "../assets/doctorimg/docImgthree.webp";
import docFour from "../assets/doctorimg/docImgfour.avif";
import docFive from "../assets/doctorimg/docImgfive.avif";
import docSix from "../assets/doctorimg/docImgsix.avif";
import docSeven from "../assets/doctorimg/docImgseven.jpg";
import docEight from "../assets/doctorimg/docImgeight.webp";
import docNine from "../assets/doctorimg/docImgnine.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return(
        <>
        <div className="h-screen w-full bg-white select-none">
            {/* phase one heading */}
             <div className="pt-10">
                <h2 className="text-2xl text-center sm:text-3xl text-[#0A3D62] font-bold tracking-wide mb-4">About Us Medvault</h2>
             </div>
             {/* phase two headline */}
             <div className="text-base text-center sm:text-lg text-[#2C3E50]">
                <p>Building trust in healthcare through technology and care.</p>
             </div>
             {/* adding image and paragraph */}
             <div className="h-[500px] w-full flex justify-center items-center">
                  {/* adding left side image */}
  <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-center gap-10 select-none px-4 sm:px-6 lg:px-12 py-10">
  {/* phase-1 image */}
  <div id="box" className="w-full max-w-[600px] h-auto flex justify-center items-center">
    <Image 
    src={aboutImg} 
    alt="contact image" 
    className="w-full max-w-[580px] h-auto border-0 border-slate-500" />
  </div>

  {/* phase-2 about us sec */}
  <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] text-center lg:text-left">
    <h2 className="text-2xl sm:text-3xl text-[#0A3D62] font-bold mb-4">
      About Us
    </h2>
    <p className="text-base sm:text-lg text-[#2C3E50]">
      MedVault is a simple and secure healthcare platform made to bring patients and doctors closer.
    </p>
    <br />
    <p className="text-base sm:text-lg text-[#2C3E50]">
      We want to make medical care easy for everyone by helping people connect with trusted doctors, book appointments without stress, and keep their health records safe in one place.
    </p>
    <br />
    <p className="text-base sm:text-lg text-[#2C3E50]">
      Our aim is to remove the confusion around healthcare and give patients a clear, reliable, and caring experience. At MedVault, we believe good health starts with trust, and we are here to make sure you get the care you need at the right time.
    </p>
  </div>
</div>
     </div>
     </div>

     {/* adding doctor list */}
     <div className="h-auto w-full bg-white select-none">
          {/* adding heading */}
          <div className="text-center">
            <p className="text-2xl sm:text-3xl text-[#0A3D62] font-bold tracking-wider">Meet Our Experts</p>
          </div>

          {/* adding doctor sec */}
          <div className="min-h-screen w-full flex flex-wrap justify-center items-center gap-10 p-4">
  {/* Card 1 */}
  <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    {/* adding doc profile */}
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={cardioImg} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    {/* adding review rating */}
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Shruti Mishra</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (Cardiologist Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">10+</span> Yrs
      </p>
      {/* adding button */}
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={neuroImg} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Nikhil Joshi</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (Neurologist Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">20+</span> Yrs
      </p>
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={orthoImg} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Kalyani Kumari</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (Orthopedics Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">13+</span> Yrs
      </p>
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>
</div>


          {/* adding doctor sec */}
          <div className="min-h-screen w-full flex flex-wrap justify-center items-center gap-10 p-4">
  {/* Card 1 */}
  <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    {/* adding doc profile */}
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={docOne} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    {/* adding review rating */}
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Arjun Mehra</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (Dermatologist Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">12+</span> Yrs
      </p>
      {/* adding button */}
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={docTwo} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Raghav Malhotra</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (Gastroenterologist Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">10+</span> Yrs
      </p>
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={docThree} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Karan Iyer</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (Pulmonologist Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">10+</span> Yrs
      </p>
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>
</div>

          {/* adding doctor sec */}
          <div className="min-h-screen w-full flex flex-wrap justify-center items-center gap-10 p-4">
  {/* Card 1 */}
  <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    {/* adding doc profile */}
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={docFour} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    {/* adding review rating */}
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Ananya Sharma</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (Pediatrician Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">11+</span> Yrs
      </p>
      {/* adding button */}
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={docFive} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Meera Nair</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (Gynecologist Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">12+</span> Yrs
      </p>
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={docSix} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Priya Deshmukh</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (Ophthalmologist Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">13+</span> Yrs
      </p>
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>
</div>

        {/* adding doctor sec */}
      <div className="min-h-screen w-full flex flex-wrap justify-center items-center gap-10 p-4">
     {/* Card 1 */}
     <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    {/* adding doc profile */}
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={docSeven} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    {/* adding review rating */}
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Devansh Kapoor</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (Endocrinologist Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">14+</span> Yrs
      </p>
      {/* adding button */}
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={docEight} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Vikram Sinha</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (General Physician Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">15+</span> Yrs
      </p>
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="h-auto w-full sm:w-[400px] border-0 border-black grid place-items-center gap-4">
    <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] border-0 border-black rounded-full overflow-hidden">
      <Image src={docNine} alt="Image" className="h-full w-full border-2 border-[#0D47A1] rounded-full hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500" />
    </div>
    <div className="h-auto w-full sm:w-[380px] border-0 border-black grid place-content-center gap-2">
      <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">Dr Kavya Reddy</p>
      <p className="text-sm md:text-base text-[#0097A7] tracking-widest">MBBS (Nephrologist Specialist)</p>
      <p>
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
        <FontAwesomeIcon icon={faStar} className="text-sm sm:text-base md:text-lg text-[#FFD700]" />
      </p>
      <p className="text-[#37474F]">
        Serving Patients <span className="text-[#0D47A1] text-lg font-medium">14+</span> Yrs
      </p>
      <button className="h-[35px] w-[150px] text-sm text-white bg-green-800 border-0 border-black rounded-full flex justify-center items-center hover:scale-105 hover:text-md hover:text-rose-50 transition-all ease-in-out duration-200 cursor-not-allowed opacity-50">
        Profile
      </button>
    </div>
  </div>
</div>
{/* end div of doc sec */}
     </div>

{/* adding emergency sec */}
<div className="w-full bg-[#0A3D62] text-white py-4 px-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-center gap-4 select-none">
  <div className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-red-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405M19 13V7a2 2 0 00-2-2h-3V3H10v2H7a2 2 0 00-2 2v6l-2 2v1h16v-1l-2-2z" />
    </svg>
    <p className="text-lg font-semibold tracking-wide">
      In Case of Emergency Call:
    </p>
  </div>

  <div className="flex gap-6">
    <span className="text-2xl font-bold text-red-400">108</span>
    <span className="text-2xl font-bold text-red-400">112</span>
  </div>
</div>

{/* styling space */}
      <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-red-500"></div>

        </>
    )
}