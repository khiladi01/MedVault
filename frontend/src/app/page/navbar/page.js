"use client";
import Image from "next/image";
import logo from "../../assets/medvaultlogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    // calling links 
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/book", label: "Appointment" },
        { href: "/auth/login", label: "SignIn" }
    ];

    return (
        <>
            <nav className="h-[100px] w-full shadow-md shadow-black sticky top-0 select-none z-50">
                <div className="h-full w-full flex justify-between items-center bg-[#008080] p-[15px] md:p-[25px]">
                    
                    {/* Logo */}
                    <div id="logo" className="h-[65px] w-[65px] md:h-[75px] md:w-[75px]">
                        <Image src={logo} alt="MedVault Logo" className="h-full w-full rounded-full shadow-md shadow-slate-900" />
                    </div>

                    {/* Search Bar */}
                    <div className="relative justify-center items-center flex-1 px-2 hidden sm:flex">
                        <div className="relative flex justify-center items-center w-full max-w-[300px] sm:max-w-[350px] md:max-w-[500px]">
                    <input 
                        type="text" 
                        placeholder="Find Doctors Cardiologist, Orthopedic, Neurologist" 
                        className="w-full h-[40px] sm:h-[45px] md:h-[50px] tracking-wider border-[2px] pl-[15px] pr-[40px] 
                                   font-medium text-xs sm:text-sm md:text-md text-white border-gray-400 outline-0 rounded-full selection:bg-slate-600" 
                    />
                    <button 
                        className="absolute right-[12px] flex justify-center items-center text-white transition-colors duration-200"
                    >
                        <FontAwesomeIcon 
                            icon={faSearch} 
                            className="text-sm sm:text-base md:text-lg hover:text-gray-400 cursor-pointer transition-colors duration-200" 
                        />
                    </button>
                    </div>

                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex p-[15px]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`p-[15px] md:p-[25px] text-white font-normal tracking-wider underline underline-offset-[20px] transition-colors duration-300 ease-in-out ${
                                    pathname === link.href
                                        ? "decoration-red-100"
                                        : "decoration-transparent hover:decoration-red-100"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger Icon (Mobile) */}
                    <div className="flex md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
                            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="bg-[#008080] md:hidden flex flex-col items-center py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`py-2 text-white font-normal tracking-wider underline underline-offset-8 transition-colors duration-300 ease-in-out ${
                                    pathname === link.href
                                        ? "decoration-red-100"
                                        : "decoration-transparent hover:decoration-red-100"
                                }`}
                                onClick={() => setMenuOpen(false)} // close menu on click
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>

            {/* Sales Poster */}
            <div className="h-[25px] w-full bg-slate-300 flex justify-center items-center">
                <p className="text-gray-600 selection:bg-rose-100 tracking-wider">MedVault Health Care Center</p>
            </div>
        </>
    );
}
