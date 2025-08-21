import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./page/navbar/page.js";
import FooterBar from "./page/footer/page.js";

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",
});

// Geist fonts (default Next.js)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MedVault",
  description: "Medical site built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <FooterBar />
      </body>
    </html>
  );
}
